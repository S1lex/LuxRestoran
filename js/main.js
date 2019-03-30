window.onload = () => {
    let menuElem = document.getElementById('ulList');
    let titleElem = document.getElementById('title');
    let btnDot = document.querySelectorAll("#btnDot");
    let btns = document.querySelectorAll('.do');
    let imgs = ["url(./pictures/1.png)", "url(./pictures/sheet.jpg)", "url(./backgrounds/headerBanner.png)"];
    let sliderWr = document.getElementsByClassName("slider-wr");
    

    titleElem.addEventListener("click", () => {
      let elems = menuElem.children;
      for(let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        elem.classList.toggle("opens");
        menuElem.classList.toggle("close");
    }
  });
  let changePhoto = (elem) => {
    if(elem.children[0].classList.contains("firstPhoto")) {
      sliderWr[0].style.backgroundImage = imgs[0];
    } if (elem.children[0].classList.contains("secondPhoto")) {
      sliderWr[0].style.backgroundImage = imgs[1]; 
    } if (elem.children[0].classList.contains("thirdPhoto")) {
      sliderWr[0].style.backgroundImage = imgs[2]; 
    }
  }

    let slider = () => {
      for(let i = 0; i < btns.length; i++) {
        let elem = btns[i];
          elem.addEventListener("click", () => {
            changePhoto(elem);
            dotTrack();
            elem.children[0].classList.toggle("dot");
          }); 
    };
  }

  let dotTrack = () => {
    btnDot.forEach((elem) => {
      elem.classList.remove("dot");
    })
  }
    slider();

  
} 

