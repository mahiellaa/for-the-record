const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];const page=document.body.dataset.page;
const sayings=['some things look better in the dark.','a little luck, a little bad timing.','the stars are terrible at keeping secrets.','something was left burning.','ask the moon. it was there.','not everything that glows is a sign.','you found the hidden switch.'];
let toastTimer;function toast(t){let e=$('.message');e.textContent=t;e.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.remove('show'),3100)}
for(let i=0;i<20;i++){const b=document.createElement('span');b.className='bulb';b.style.setProperty('--c',['#f39541','#b73745','#a55ad2','#ffc16e'][i%4]);b.style.setProperty('--r',(i%2?15:-13)+'deg');b.style.setProperty('--d',i*.13+'s');$('.lights').append(b)}
$$('.ornament').forEach((b,i)=>b.addEventListener('click',()=>{b.classList.toggle('lit');toast(sayings[i%sayings.length]);if(b.dataset.action==='moon')document.body.style.filter=document.body.style.filter?'':'hue-rotate(16deg)';}));
$$('[data-surprise]').forEach(b=>b.addEventListener('click',()=>toast(sayings[Math.floor(Math.random()*sayings.length)])));
if(page==='home'){$('#homeTitle').textContent=SITE.title;$('#tagline').textContent=SITE.tagline;}
if(page==='songs'){
 let current=0,playing=false;const list=$('#trackList'),search=$('#search');
 function select(i){current=(i+SONGS.length)%SONGS.length;const s=SONGS[current];$('#nowTitle').textContent=s.title;$('#nowArtist').textContent=s.artist;$('#memory').textContent=s.memory;$('#listen').href=s.url||'#';$$('.track').forEach(x=>x.classList.toggle('selected',+x.dataset.i===current));}
 function render(q=''){list.innerHTML='';SONGS.forEach((s,i)=>{if(!(s.title+' '+s.artist+' '+s.memory).toLowerCase().includes(q.toLowerCase()))return;const b=document.createElement('button');b.className='track';b.dataset.i=i;const num=document.createElement('span');num.className='num';num.textContent=String(i+1).padStart(2,'0');const info=document.createElement('span');const title=document.createElement('b');title.textContent=s.title;const artist=document.createElement('small');artist.textContent=s.artist;info.append(title,artist);b.append(num,info);b.addEventListener('click',()=>select(i));list.append(b)});select(current)}
 $('#next').onclick=()=>select(current+1);$('#prev').onclick=()=>select(current-1);$('#play').onclick=()=>{playing=!playing;$('#vinyl').classList.toggle('playing',playing);$('#play').textContent=playing?'❚❚ pause record':'▶ spin record';toast(playing?'the record is turning. open the song link to listen.':'the needle lifts.');};search.oninput=()=>render(search.value);render();
 const tarot=$('#tarot');['☾','✦','♠','☼','✶'].forEach((sym,i)=>{const b=document.createElement('button');b.className='tarot';b.innerHTML=`<span>${sym}</span><small>DRAW ${i+1}</small>`;b.onclick=()=>{select(Math.floor(Math.random()*SONGS.length));toast('the cards have chosen: '+SONGS[current].title);window.scrollTo({top:Math.max(0,$('#player').offsetTop-90),behavior:'smooth'})};tarot.append(b)});
}
if(page==='entries'){const grid=$('#entries');ENTRIES.forEach((e,i)=>{const b=document.createElement('button');b.className='paper';b.style.setProperty('--tilt',((i%2?1:-1)*(2+i%3))+'deg');const tag=document.createElement('div');tag.className='mono';tag.textContent=e.date;const title=document.createElement('h3');title.textContent=e.title;const p=document.createElement('p');p.textContent=e.preview;b.append(tag,title,p);b.onclick=()=>{$('#entryTitle').textContent=e.title;$('#entryDate').textContent=e.date;$('#entryBody').textContent=e.body;$('#entryOverlay').classList.add('open')};grid.append(b)});$('#closeEntry').onclick=()=>$('#entryOverlay').classList.remove('open');$('#entryOverlay').onclick=e=>{if(e.target.id==='entryOverlay')e.currentTarget.classList.remove('open')};document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#entryOverlay').classList.remove('open')})}
if(page==='about'){$('#aboutName').textContent=SITE.about.name;$('#aboutIntro').textContent=SITE.about.intro;$('#aboutBio').textContent=SITE.about.bio;$('#portrait').textContent=SITE.about.portrait;SITE.about.favorites.forEach(x=>{const s=document.createElement('span');s.className='pill';s.textContent='✦ '+x;$('#favorites').append(s)});SITE.about.links.forEach(x=>{const a=document.createElement('a');a.className='pill';a.textContent=x.label;a.href=x.url;a.target='_blank';a.rel='noopener';$('#links').append(a)})}


// More little things to touch; drag them around like stickers.
const trinketMessages={spark:['wish carefully.','a star has fallen out of its frame.','someone moved the constellations.'],cat:['the cat knows.','you have disturbed the familiar.','a small, extremely judgmental witness.']};
let trinketClicks=0;
document.querySelectorAll('[data-trinket]').forEach(el=>{
 let start=null,moved=false;
 el.addEventListener('pointerdown',e=>{start={x:e.clientX,y:e.clientY,left:el.offsetLeft,top:el.offsetTop};moved=false;el.setPointerCapture(e.pointerId)});
 el.addEventListener('pointermove',e=>{if(!start)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.abs(dx)+Math.abs(dy)>9){moved=true;el.classList.add('dragging');el.style.left=Math.max(0,Math.min(window.innerWidth-el.offsetWidth,start.left+dx))+'px';el.style.top=Math.max(0,Math.min(window.innerHeight-el.offsetHeight,start.top+dy))+'px';el.style.right='auto';el.style.bottom='auto'}});
 el.addEventListener('pointerup',()=>{start=null;el.classList.remove('dragging');if(moved){moved=false;return}const type=el.dataset.trinket;el.classList.toggle('activated');trinketClicks++;if(type==='light'){document.querySelector('.lights').classList.toggle('off');toast(document.querySelector('.lights').classList.contains('off')?'the lights go out.':'someone left the lights on.')}else if(type==='potion'){document.body.classList.toggle('potion-mode');toast('you should probably not have drunk that.')}else if(type==='note'){document.querySelector('#secretBackdrop').hidden=false}else{const messages=trinketMessages[type]||['the room remembers.'];toast(messages[trinketClicks%messages.length])}});
});
const secretBackdrop=document.querySelector('#secretBackdrop');if(secretBackdrop){document.querySelector('#secretClose').onclick=()=>secretBackdrop.hidden=true;secretBackdrop.addEventListener('click',e=>{if(e.target===secretBackdrop)secretBackdrop.hidden=true});document.addEventListener('keydown',e=>{if(e.key==='Escape')secretBackdrop.hidden=true})}
if(page==='songs'){
 const tape=document.querySelector('#miniCassette');let side='A';const flip=()=>{side=side==='A'?'B':'A';tape.classList.toggle('flipped');tape.querySelector('.cassette-head').textContent='SIDE '+side+' · A COLLECTION OF ALMOSTS';toast('side '+side+'. the tape keeps turning.')};tape.addEventListener('click',flip);tape.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}});
 document.querySelector('#play').addEventListener('click',()=>tape.classList.toggle('spinning'));
 document.querySelectorAll('.tarot').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tarot').forEach(c=>c.classList.remove('drawn'));b.classList.add('drawn')}));
}

// V8: ambient motion and clickable magic, shared by every page.
(function(){
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const world=document.createElement('div');world.className='ambient-world';world.setAttribute('aria-hidden','true');document.body.append(world);
 const make=(tag,cls,styles,content)=>{const e=document.createElement(tag);e.className=cls;Object.entries(styles).forEach(([k,v])=>e.style.setProperty(k,v));if(content)e.textContent=content;world.append(e);return e};
 for(let i=0;i<23;i++){make('span','ambient-spark',{'--x':(3+(i*43)%94)+'%','--y':(9+(i*31)%81)+'%','--size':(9+i%4*5)+'px','--duration':(1.1+i%5*.55)+'s','--delay':(-i*.43)+'s','--color':['#ff7a18','#e74866','#ba58ff','#ffc16a'][i%4]},['✦','✳','✧','⋆','✶'][i%5]);}
 for(let i=0;i<3;i++){const b=make('div','ambient-bat',{'--y':(16+i*27)+'%','--size':(23+i*7)+'px','--duration':(7+i*2)+'s','--delay':(-i*4)+'s'});const wings=document.createElement('span');wings.textContent='🦇';b.append(wings)}
 const toggle=document.createElement('button');toggle.className='chaos-toggle';toggle.type='button';toggle.textContent='✷ CHAOS: ON';toggle.setAttribute('aria-pressed','true');toggle.setAttribute('aria-label','Toggle animated decorations');document.body.append(toggle);
 document.body.classList.add('chaos-on');
 toggle.addEventListener('click',()=>{const on=document.body.classList.toggle('chaos-on');toggle.textContent=on?'✷ CHAOS: ON':'☾ CHAOS: LOW';toggle.setAttribute('aria-pressed',String(on));});
 document.querySelectorAll('.sticker,.ornament,.tarot').forEach((el,i)=>el.style.setProperty('--n',String(i+1)));
 function burst(x,y,n=9){if(reduced)return;for(let i=0;i<n;i++){const s=document.createElement('span');s.className='magic-burst';s.textContent=['✦','✧','✶','★'][i%4];s.style.left=x+'px';s.style.top=y+'px';const a=i/n*Math.PI*2;s.style.setProperty('--dx',Math.cos(a)*(38+i%3*18)+'px');s.style.setProperty('--dy',Math.sin(a)*(38+i%3*18)+'px');s.style.setProperty('--turn',(i*60)+'deg');document.body.append(s);s.addEventListener('animationend',()=>s.remove(),{once:true});}}
 document.addEventListener('click',e=>{const target=e.target.closest('.sticker,.ornament,.tarot,[data-surprise],.object');if(target)burst(e.clientX,e.clientY,target.classList.contains('tarot')?16:9)});
 // Small drifting smoke rises from the cigarette ornament.
 const cig=document.querySelector('.ornament.o4');if(cig&&!reduced){const smoke=document.createElement('span');smoke.textContent='〰';smoke.setAttribute('aria-hidden','true');smoke.style.cssText='position:absolute;left:45%;top:-12px;color:#c9a2d7;pointer-events:none;font-size:24px;animation:smokeDrift 2.1s ease-out infinite';cig.style.position='absolute';cig.append(smoke)}
})();
