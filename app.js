const FR=document.documentElement.lang.startsWith('fr');
const T=FR?{v:['Intérêt poli.','Pas mal en amour.','Je marierais cette assiette-là.'],g:'aimé à',e:'Il nous faut un nom et un courriel ou un numéro qui marche.'}
:{v:['Polite interest.','Seriously into it.','Would marry this plate.'],g:'loved at',e:'Need a name and a working email or phone.'};
const score=h=>320+Math.floor(11.4*h);
const verdict=h=>T.v[h<30?0:h<=70?1:2];
const i=document.getElementById('loveIn');
function upd(){const h=+i.value;document.getElementById('loveOut').textContent=h;document.getElementById("score").textContent=score(h);
document.getElementById('verdict').textContent=verdict(h);
document.getElementById('loveImg').style.filter=`saturate(${(1+.9*h/100).toFixed(3)}) contrast(${(1+.38*h/100).toFixed(3)})`;i.setAttribute('aria-valuetext',`${h}, ${T.g} ${score(h)}`);}
i.addEventListener('input',upd);upd();window.kiloScore=score;
document.getElementById('wl').addEventListener('submit',e=>{e.preventDefault();const n=nm.value.trim(),c=ct.value.trim(),err=document.getElementById('err');
if(!n||!(/\S+@\S+\.\S+/.test(c)||/^[+\d][\d\s().-]{6,}$/.test(c))){err.textContent=T.e;return;}
e.target.hidden=true;const t=document.getElementById('thanks');t.hidden=false;t.focus();});
