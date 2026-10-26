from PIL import Image
import numpy as np, sys
HAZE=float(sys.argv[1]); T_SAT=float(sys.argv[2]); OUT=sys.argv[3] if len(sys.argv)>3 else None
PAIRS=[('cam1.jpg','cam1_cam.jpg'),('corridor0.png','corridor0_cam.jpg'),
 ('corridor5.jpg','corridor5_cam.jpg'),('external1.png','external1_cam.jpg'),
 ('lab_a1_1.png','lab_a1_1_cam.jpg'),('lab_b1_1.png','lab_b1_1_cam.jpg'),
 ('specimen1.png','specimen1_cam.jpg'),('corridor1.png','corridor1_cam.jpg'),
 ('containment1.png','containment1_cam.jpg'),('containment2.png','containment2_cam.jpg'),
 ('armory1.png','armory1_cam.jpg'),('cam3.jpg','cam3_cam.jpg'),
 ('vent7.png','vent7_cam.jpg'),('storage2.png','storage2_cam.jpg'),
 ('corridor3.png','corridor3_cam.jpg'),('storage3.png','storage3_cam.jpg')]
T_WHITE,T_MEAN,T_P25,T_RB,T_GB=180.0,32.7,7.0,-15.9,-7.3
def luma(a): return .299*a[...,0]+.587*a[...,1]+.114*a[...,2]
def sm(x,a,b):
    t=np.clip((x-a)/(b-a),0,1);return t*t*(3-2*t)
def tint(a,g):
    keep=sm(luma(a),150.,235.)[...,None]
    return np.clip(a*(1.0+(np.asarray(g)-1.0)*(1.0-keep)),0,255)
def expose(a,t):
    m=max(luma(a).mean(),1.)
    return np.clip(255.*np.power(np.clip(a,0,255)/255.,np.clip(np.log(t/255.)/np.log(m/255.),0.5,1.9)),0,255)
for src,dst in PAIRS:
    im=Image.open('media/'+src).convert('RGB')
    w,h=im.size;tr=960/540
    if w/h>tr: nw=int(h*tr);im=im.crop(((w-nw)//2,0,(w-nw)//2+nw,h))
    else: nh=int(w/tr);im=im.crop((0,(h-nh)//2,w,(h-nh)//2+nh))
    a=np.asarray(im.resize((960,540),Image.LANCZOS),dtype=np.float32)
    y=luma(a);a=np.clip(a-np.percentile(y,0.5),0,None)
    y=luma(a);a=np.clip(a*(T_WHITE/max(np.percentile(y,99),1.)),0,255)
    a=expose(a,T_MEAN)
    for _ in range(2):                                  # sink the fog
        y=luma(a);mx,mn=a.max(2),a.min(2)
        s=np.where(mx>0,(mx-mn)/np.maximum(mx,1),0)
        w_h=(sm(y,28.,80.)*(1.0-sm(y,155.,220.))*(1.0-sm(s,0.14,0.44)))[...,None]
        a=np.clip(a*(1.0-HAZE*w_h),0,255)
    y=luma(a);sh=(1.0-sm(y,10.,90.))[...,None]
    need=max(0.,T_P25-np.percentile(y,25))
    a=np.clip(a+sh*np.array([0.2,0.5,1.0])*need*1.5,0,255)
    a=expose(a,T_MEAN)
    for _ in range(6):
        R,G,B=a[...,0].mean(),a[...,1].mean(),a[...,2].mean()
        dRB,dGB=(R-B)-T_RB,(G-B)-T_GB
        if abs(dRB)<0.4 and abs(dGB)<0.4: break
        a=tint(a,[1-0.45*dRB/max(R,1),1-0.45*dGB/max(G,1),1.0])
        a=np.clip(a*(T_WHITE/max(np.percentile(luma(a),99),1.)),0,255)
        a=expose(a,T_MEAN)
    mx,mn=a.max(2),a.min(2)                             # overall colour level
    s=np.where(mx>0,(mx-mn)/np.maximum(mx,1),0).mean()*100
    keep=sm(luma(a),165.,240.)[...,None]
    k=float(np.clip(T_SAT/max(s,1.),0.3,1.3))
    gy=luma(a)[...,None]
    a=np.clip(gy+(a-gy)*(k+(1.0-k)*keep),0,255)
    Image.fromarray(a.astype(np.uint8)).save((OUT+'/' if OUT else 'media/')+dst,quality=88,optimize=True)

# Usage, run from the repo root:
#   python3 tools/grade_cams.py <haze> <saturation> [outdir]
#
#   haze        how hard to sink the fog. 0 = leave it, 0.80 = current, 1.0 = max
#   saturation  overall colour level. 34 = current, 44 = more colour,
#               54 = the original reference screenshot
#   outdir      write somewhere else to compare before replacing media/
#
# Always regrades from the PNG originals, so running it again never stacks.
