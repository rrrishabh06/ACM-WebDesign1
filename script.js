const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu.addEventListener("click",()=>links.classList.toggle("show"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("show")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})
},{threshold:.12});
document.querySelectorAll(".hero-copy,.hero-data,.section,.event,.team article,.stats div").forEach(e=>{e.classList.add("reveal");observer.observe(e)});

const navLinks=document.querySelectorAll(".links a");
const sections=document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
  navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
