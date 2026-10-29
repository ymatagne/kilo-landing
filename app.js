const grams=h=>320+Math.floor(11.4*h);
const verdict=h=>h<30?'Light lunch. Respectable.':h<=70?'Solid plate. Nap incoming.':'Absolute unit of a meal.';
const i=document.getElementById('heftIn');
function upd(){const h=+i.value;document.getElementById('heftOut').textContent=h;document.getElementById('grams').textContent=grams(h)+' g';
document.getElementById('verdict').textContent=verdict(h);
document.getElementById('heftImg').style.filter=`saturate(${(1+.9*h/100).toFixed(3)}) contrast(${(1+.38*h/100).toFixed(3)})`;i.setAttribute('aria-valuetext',`${h}, ${grams(h)} grams`);}
i.addEventListener('input',upd);upd();window.kiloGrams=grams;
document.getElementById('wl').addEventListener('submit',e=>{e.preventDefault();const n=nm.value.trim(),c=ct.value.trim(),err=document.getElementById('err');
if(!n||!(/\S+@\S+\.\S+/.test(c)||/^[+\d][\d\s().-]{6,}$/.test(c))){err.textContent='Need a name and a working email or phone.';return;}
e.target.hidden=true;const t=document.getElementById('thanks');t.hidden=false;t.focus();});
