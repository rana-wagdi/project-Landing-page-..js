const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navLinks= document.getElementsByClassName('navLink')[0]
const links = document.querySelectorAll('.navbarLink');

toggleButton.addEventListener('click',()=> {
    navLinks.classList.toggle('active')
}) 
//
window.addEventListener('scroll',event =>{
    let navigationLinks=document.querySelectorAll('.navbarLink');
    let fromTop=window.scrollY;

    navigationLinks.forEach(link =>{
        let section = document.querySelector(link.hash);

        if(
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop 
        ){
            link.classList.add('active');
        } else{
            link.classList.remove('active');
        }
    })
})


//active navigation on scroll
for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
  //
  window.addEventListener('scroll',function(){
      let nav = document.querySelector('.navbar');
    let windoPosition = window.scrollY > 0
      nav.classList.toggle('scrolling.active',windoPosition);
  })
