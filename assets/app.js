/* ===== EDIT THESE BEFORE GOING LIVE ===== */
var CONFIG={whatsapp:'919817911128',email:'hr@apexworkforce.example',phoneDisplay:'+91 98179 11128'};
/* ========================================= */
(function(){
 var wa=document.getElementById('waFab');if(wa){wa.href='https://wa.me/'+CONFIG.whatsapp}
 document.querySelectorAll('[data-wa]').forEach(function(a){a.href='https://wa.me/'+CONFIG.whatsapp});
 document.querySelectorAll('[data-mail]').forEach(function(a){a.href='mailto:'+CONFIG.email});
 document.querySelectorAll('[data-tel]').forEach(function(a){a.href='tel:+'+CONFIG.whatsapp});
 [['quickForm','Quick enquiry'],['reqForm','Manpower request'],['jobForm','Job application']].forEach(function(p){
  var f=document.getElementById(p[0]);if(!f)return;
  f.addEventListener('submit',function(e){e.preventDefault();
   var lines=['*'+p[1]+' - Apex Workforce website*'];
   f.querySelectorAll('label').forEach(function(l){var c=l.querySelector('input,select,textarea');if(!c||c.type==='file')return;
    var t=(l.childNodes[0]&&l.childNodes[0].textContent||'').trim();var v=(c.value||'').trim();if(v)lines.push(t+': '+v)});
   var url='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(lines.join('\n'));
   var ok=f.querySelector('.ok');if(ok){ok.style.display='block';ok.textContent='Thank you. WhatsApp is opening with your details. Press send to reach us.'}
   window.open(url,'_blank','noopener');f.reset();
  });
 });
})();

document.documentElement.classList.add('js');

var nav=document.getElementById('nav'),m=document.getElementById('menu');
var dr=document.getElementById('drawer'),ov=document.getElementById('ov');
function tog(o){dr.classList.toggle('on',o);ov.classList.toggle('on',o);m.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
m.onclick=function(){tog(!dr.classList.contains('on'))};
ov.onclick=function(){tog(false)};
dr.onclick=function(e){if(e.target.closest('a,.x'))tog(false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});

document.querySelectorAll('[data-role]').forEach(function(b){b.onclick=function(){var s=document.getElementById('role');s.value=b.dataset.role;document.getElementById('jobForm').scrollIntoView();s.focus()}});
function count(el){var n=+el.dataset.n,s=el.dataset.s||'',t0=null;function f(t){t0=t0||t;var p=Math.min((t-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e).toLocaleString('en-IN')+s;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
function route(hh){var h=(typeof hh==='string')?hh:location.hash.slice(1),home=!h||h==='top'||h==='services';
document.querySelectorAll('.pg').forEach(function(s){s.classList.toggle('on',s.id===h)});
document.body.dataset.v=home?'home':'page';
var t=h&&document.getElementById(h);
if(t&&t.offsetParent!==null&&h!=='top')setTimeout(function(){t.scrollIntoView()},0);else window.scrollTo(0,0)}
window.addEventListener('hashchange',function(){route()});route();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;var h=a.getAttribute('href').slice(1);e.preventDefault();try{history.replaceState(null,'','#'+h)}catch(_){}route(h)});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;
  t.style.transitionDelay=(Array.prototype.indexOf.call(t.parentNode.children,t)%3)*0.12+'s';t.classList.add('show');
  t.querySelectorAll('[data-n]').forEach(count);
  if(t.parentNode.id==='steps')t.parentNode.classList.add('go');
  io.unobserve(t)})},{threshold:.15});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('show')});document.querySelectorAll('[data-n]').forEach(function(e){e.textContent=e.dataset.n+(e.dataset.s||'')})}
