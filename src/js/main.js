
let gofor = (it) => {
    let h = it.parentElement.children[3];
    h.scrollLeft += 250;
  };
let goback = (it) => {
    let h = it.parentElement.children[3];
    h.scrollLeft -= 250;
  };


  let tognav = ()=>{

    let nav = document.querySelector('#nav');
    nav.classList.toggle("show");

  }