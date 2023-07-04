const nav = document.querySelector('.nav__bar');
const navIcon = document.querySelector('.nav__icon');
const card = document.querySelectorAll('.trail__card');
const navItem = document.querySelectorAll('.nav__item');
const btnTop = document.querySelector('.btn__top')

// nav toggle
navIcon.addEventListener('click',(()=>{
  nav.classList.toggle('active')
  navIcon.classList.toggle('activited')
}))

// trail card opener
card.forEach(a=>{
  a.addEventListener("click",()=>{
    a.classList.toggle('expand')
  })
})

// nav close with link click
navItem.forEach(a=>{
  a.addEventListener("click",()=>{
    nav.classList.remove('active')
  navIcon.classList.remove('activited')

  })
})
// scroll top 

window.addEventListener('scroll',()=>{
  if(document.documentElement.scrollTop>document.documentElement.scrollHeight/10){
btnTop.classList.add("visible")
  }
  else{
btnTop.classList.remove("visible")
  }
})

btnTop.addEventListener("click",()=>{
document.body.scrollTop=0,
document.documentElement.scrollTop=0;
})

//section animations
const sections = document.querySelectorAll(".animation__entry");
const observer = new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add("animation__active")
  }
});
},{
  threshold:0.065
})
sections.forEach(s=>{
  observer.observe
(s)})