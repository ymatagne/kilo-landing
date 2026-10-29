const FR=document.documentElement.lang.startsWith('fr');
const T=FR?{v:['Lunch léger. Respectable.','Belle assiette. Sieste en vue.','Une unité absolue de repas.'],g:'grammes',e:'Il nous faut un nom et un courriel ou un numéro qui marche.'}
:{v:['Light lunch. Respectable.','Solid plate. Nap incoming.','Absolute unit of a meal.'],g:'grams',e:'Need a name and a working email or phone.'};
const grams=h=>320+Math.floor(11.4*h);
const verdict=h=>T.v[h<30?0:h<=70?1:2];
const i=document.getElementById('heftIn');
function upd(){const h=+i.value;document.getElementById('heftOut').textContent=h;document.getElementById('grams').textContent=grams(h)+' g';
document.getElementById('verdict').textContent=verdict(h);
document.getElementById('heftImg').style.filter=`saturate(${(1+.9*h/100).toFixed(3)}) contrast(${(1+.38*h/100).toFixed(3)})`;i.setAttribute('aria-valuetext',`${h}, ${grams(h)} ${T.g}`);}
i.addEventListener('input',upd);upd();window.kiloGrams=grams;
document.getElementById('wl').addEventListener('submit',e=>{e.preventDefault();const n=nm.value.trim(),c=ct.value.trim(),err=document.getElementById('err');
if(!n||!(/\S+@\S+\.\S+/.test(c)||/^[+\d][\d\s().-]{6,}$/.test(c))){err.textContent=T.e;return;}
e.target.hidden=true;const t=document.getElementById('thanks');t.hidden=false;t.focus();});
