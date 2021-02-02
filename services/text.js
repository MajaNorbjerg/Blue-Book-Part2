export default class TextService {
    constructor() {
    //   this.loader = document.getElementById('loader');
   
    this.addText();
    }

    // show(show) {
    //   if (show) {
    //     this.loader.classList.remove("hide");
    //   } else {
    //     this.loader.classList.add("hide");
    //   }
    // }
    addText(){
        let textSection = document.getElementsByClassName('text');
        let textArticle = document.createElement("ARTICLE");
        textSection.appendChild(textArticle);


    }

    addToJSON(){

    }

  }