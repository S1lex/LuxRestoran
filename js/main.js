window.onload = () => {
    let menuElem = document.getElementById('ulList');
    let titleElem = document.getElementById('title');
    let btns = document.querySelectorAll('.do');
    let btnDot = document.querySelectorAll("#btnDot");
    let imgs = ["url(./backgrounds/back1.png)", "url(./backgrounds/back2.png)", "url(./backgrounds/back3.png)"];
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
  };

    let slider = () => {
      for(let i = 0; i < btns.length; i++) {
        let elem = btns[i];
          elem.addEventListener("click", () => {
            changePhoto(elem);
            dotTrack();
            elem.children[0].classList.toggle("dot");
        });
    };
  };

  let dotTrack = () => {
    btnDot.forEach((elem) => {
      elem.classList.remove("dot");
    })
  }
    slider();
} 

let btnToday = document.querySelectorAll(".btn-today");
let dotToday = document.querySelectorAll("#dotToday");

for(let i = 0; i < btnToday.length; i++) {
  let item = btnToday[i];
  item.addEventListener("click", () => {
    dotTrack();
    item.children[0].classList.toggle("dot");
  })
};

let dotTrack = () => {
  dotToday.forEach((elem) => {
    elem.classList.remove("dot");
  })
};

let cards = new Map([
  ['img1', './srcblblblb'],
  ['img2', 'blabalbbla']
]);
console.log(cards.get("img1"))