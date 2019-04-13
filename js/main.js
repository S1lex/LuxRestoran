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

let specialCards = () => {
  for(let i = 0; i < btnToday.length; i++) {
    let item = btnToday[i];
    item.addEventListener("click", () => {
      dotTrack();
      cardChanger(item);
      item.children[0].classList.toggle("dot");
    })
  }
};


let dotTrack = () => {
  dotToday.forEach((elem) => {
    elem.classList.remove("dot");
  })
};

let cardChanger = (item) => {
  if(item.children[0].classList.contains("firstPhoto")) {
    arrayCard["first"][4][0]();
    arrayCard["second"][4][0]();
  } if (item.children[0].classList.contains("secondPhoto")) {
    arrayCard["third"][4][0]();
    arrayCard["fourth"][4][0]();
  } if (item.children[0].classList.contains("thirdPhoto")) {
    arrayCard["fifth"][4][0]();
    arrayCard["sixth"][4][0]();
  }
}

let cardNameFirst = document.getElementById("cardNameFirst");
let cardNameSecond = document.getElementById("cardNameSecond");
let imgCardsFirst = document.getElementById("cardImgFirst");
let imgCardsSecond = document.getElementById("cardImgSecond");
let infoCardsFirts = document.getElementById("cardInfoFirst");
let infoCardsSecond = document.getElementById("cardInfoSecond");
let priceCardsFirst = document.getElementById("cardPriceFirst");
let priceCardsSecond = document.getElementById("cardPriceSecond");

let arrayCard = {
  "first": [
      [imgCardsFirst, "./backgrounds/back1.png"],
      [cardNameFirst, "First food"],
      [infoCardsFirts, "emLoremLoremLoremLoremLoremLoremLoremLoremLorem iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"],
      [priceCardsFirst, "<sup>$</sup>91.00"],
      [() => {
        arrayCard["first"][0][0].src = arrayCard["first"][0][1];
        arrayCard["first"][1][0].innerHTML = arrayCard["first"][1][1];
        arrayCard["first"][2][0].innerText = arrayCard["first"][2][1];
        arrayCard["first"][3][0].innerHTML = arrayCard["first"][3][1];
      }]
  ],
  "second": [
      [imgCardsSecond, "./backgrounds/back2.png"],
      [cardNameSecond, "Second food"],
      [infoCardsSecond, "asdasfldkgjfdlkjhgfdlk sjlfdks;jhg iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ldksfjh l;kdfsj l;dkfsjhl;kdfsjhl;ksdfjhl;kjdhpadh"],
      [priceCardsSecond, "<sup>$</sup>92.00"],
      [() => {
        arrayCard["second"][0][0].src = arrayCard["second"][0][1];
        arrayCard["second"][1][0].innerHTML = arrayCard["second"][1][1];
        arrayCard["second"][2][0].innerText = arrayCard["second"][2][1];
        arrayCard["first"][3][0].innerHTML = arrayCard["second"][3][1]; 
      }]
  ],
  "third": [
    [imgCardsFirst, "./backgrounds/back2.png"],
    [cardNameFirst, "third food"],
    [infoCardsFirts, "asdasfldkgjfdlkjhgfdlk sjlfdks;jhg iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ldksfjh l;kdfsj l;dkfsjhl;kdfsjhl;ksdfjhl;kjdhpadh"],
    [priceCardsFirst, "<sup>$</sup>93.00"],
    [() => {
      arrayCard["third"][0][0].src = arrayCard["third"][0][1];
      arrayCard["third"][1][0].innerHTML = arrayCard["third"][1][1];
      arrayCard["third"][2][0].innerText = arrayCard["third"][2][1];
      arrayCard["third"][3][0].innerHTML = arrayCard["third"][3][1]; 
    }]
  ],
  "fourth": [
    [imgCardsSecond, "./backgrounds/back2.png"],
    [cardNameSecond, "fourth food"],
    [infoCardsSecond, "asdasfldkgjfdlkjhgfdlk sjlfdks;jhg iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ldksfjh l;kdfsj l;dkfsjhl;kdfsjhl;ksdfjhl;kjdhpadh"],
    [priceCardsSecond, "<sup>$</sup>94.00"],
    [() => {
      arrayCard["fourth"][0][0].src = arrayCard["fourth"][0][1];
      arrayCard["fourth"][1][0].innerHTML = arrayCard["fourth"][1][1];
      arrayCard["fourth"][2][0].innerText = arrayCard["fourth"][2][1];
      arrayCard["fourth"][3][0].innerHTML = arrayCard["fourth"][3][1]; 
    }]
  ],
  "fifth": [
    [imgCardsFirst, "./backgrounds/back2.png"],
    [cardNameFirst, "fifth food"],
    [infoCardsFirts, "asdasfldkgjfdlkjhgfdlk sjlfdks;jhg iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ldksfjh l;kdfsj l;dkfsjhl;kdfsjhl;ksdfjhl;kjdhpadh"],
    [priceCardsFirst, "<sup>$</sup>95.00"],
    [() => {
      arrayCard["fifth"][0][0].src = arrayCard["fifth"][0][1];
      arrayCard["fifth"][1][0].innerHTML = arrayCard["fifth"][1][1];
      arrayCard["fifth"][2][0].innerText = arrayCard["fifth"][2][1];
      arrayCard["fifth"][3][0].innerHTML = arrayCard["fifth"][3][1]; 
    }]
  ],
  "sixth": [
    [imgCardsSecond, "./backgrounds/back2.png"],
    [cardNameSecond, "sixth food"],
    [infoCardsSecond, "asdasfldkgjfdlkjhgfdlk sjlfdks;jhg iLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ldksfjh l;kdfsj l;dkfsjhl;kdfsjhl;ksdfjhl;kjdhpadh"],
    [priceCardsSecond, "<sup>$</sup>96.00"],
    [() => {
      arrayCard["sixth"][0][0].src = arrayCard["sixth"][0][1];
      arrayCard["sixth"][1][0].innerHTML = arrayCard["sixth"][1][1];
      arrayCard["sixth"][2][0].innerText = arrayCard["sixth"][2][1];
      arrayCard["sixth"][3][0].innerHTML = arrayCard["sixth"][3][1]; 
    }]
  ]
  };
specialCards();


let leftArrow = document.getElementById("clientArrowLeft");
let rightArrow = document.getElementById("clientArrowRight");
let contentWr = document.querySelectorAll("#client-reviews");
let currentSlider = 0;

let clientSlider = () => {
    rightArrow.addEventListener("click", () => {
      nextSlide();
    });
    leftArrow.addEventListener("click", () => {
      previousSlide();
    });
}

let nextSlide = () => {
  contentWr[currentSlider].classList.remove("content-visible");
  currentSlider = ((currentSlider+1)+contentWr.length)%contentWr.length;
  contentWr[currentSlider].classList.add("content-visible");
  console.log(contentWr[currentSlider].previousElementSibling);
}

let previousSlide = () => {
  contentWr[currentSlider].classList.remove("content-visible");
  contentWr[currentSlider].classList.remove("animat");
  currentSlider = ((currentSlider-1)+contentWr.length)%contentWr.length;
  contentWr[currentSlider].classList.add("content-visible");
}


clientSlider();