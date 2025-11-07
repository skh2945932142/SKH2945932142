// Simple animated background (particles)
(()=>{
  const canvas=document.getElementById('bg');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  let w=canvas.width=innerWidth, h=canvas.height=innerHeight;
  const pts=[]; const N=80;
  function rand(a,b){return a+Math.random()*(b-a)}
  for(let i=0;i<N;i++) pts.push({x:rand(0,w),y:rand(0,h),r:rand(0.6,3.2),vx:rand(-0.6,0.6),vy:rand(-0.4,0.4)});
  function onResize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight}
  addEventListener('resize',onResize);
  function draw(){ctx.clearRect(0,0,w,h);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=w; if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(127,86,217,0.12)';ctx.fill();}
    // lines
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){let a=pts[i],b=pts[j];let d=(a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y);if(d<9000){ctx.strokeStyle='rgba(127,86,217,'+(0.12- d/12000)+')';ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}
    requestAnimationFrame(draw);
  }
  draw();
})();

// Skill bars animation & controls
document.addEventListener('DOMContentLoaded',()=>{
  const animBars = ()=>{
    document.querySelectorAll('.bar > i').forEach(el=>{
      const pct=el.dataset.pct||'60'; el.style.width='0%'; setTimeout(()=>{el.style.transition='width 900ms cubic-bezier(.2,.9,.3,1)'; el.style.width=pct+'%';},80);
    });
  };
  // Use IntersectionObserver so bars animate when visible
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{ if(ent.isIntersecting) animBars(); });
  },{threshold:0.3});
  const demoSection = document.getElementById('demo'); if(demoSection) io.observe(demoSection);
  document.getElementById('shuffle')?.addEventListener('click',()=>{
    // randomize percentages
    document.querySelectorAll('.bar > i').forEach(el=>{const n=Math.floor(50+Math.random()*50);el.dataset.pct=n;el.style.width='0%';setTimeout(()=>{el.style.width=n+'%';},60);});
  });

  // Card flip interactions (click or Enter)
  document.querySelectorAll('.card').forEach(card=>{
    const toggle = ()=> card.classList.toggle('flipped');
    card.addEventListener('click',toggle);
    card.addEventListener('keydown',(e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); toggle(); } });
  });
});
