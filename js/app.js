const toggleButton=document.querySelector('.toggle-button')
const navLinks= document.getElementsByClassName('navLink')[0]
const links = document.querySelectorAll('.navbarLink');
const header = document.querySelector('.navbar')

$(document).ready(function(){
    $('.toggle-button').click(function(){
        $('.navLink').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})
//toggleButton.addEventListener('click',()=> {
  //  navLinks.classList.toggle('active')
//}) 
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
  window.onscroll = function(){
      var top = window.scrollY;
    console.log(top);
    if(top >= 200){
        header.classList.add('active');
     } else {
        header.classList.remove('active')
    }
    }
    



