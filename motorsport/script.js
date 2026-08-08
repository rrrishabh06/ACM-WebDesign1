const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu.addEventListener("click",()=>links.classList.toggle("show"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("show")));

const nav=document.querySelectorAll(".links a"),sections=document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
  nav.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

document.querySelectorAll(".session,.crew article,.about-content,.contact-title,.contact-box").forEach(el=>{
  el.style.opacity="0";el.style.transform="translateY(20px)";el.style.transition="opacity .6s ease,transform .6s ease";
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)";}});
},{threshold:.12});
document.querySelectorAll(".session,.crew article,.about-content,.contact-title,.contact-box").forEach(el=>observer.observe(el));