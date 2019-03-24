window.onload = () => {
    let menuElem = document.getElementById('ulList');
    let titleElem = document.getElementById('title');
    
    titleElem.addEventListener("click", () => {
      let elems = menuElem.children;
      for(let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        elem.classList.toggle("opens");
        menuElem.classList.toggle("close")
      }
    })
}