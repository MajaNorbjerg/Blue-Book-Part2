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
        // let textSection = document.getElementsByClassName('text');
        // let textArticle = document.createElement("ARTICLE");
        // textSection.appendChild(textArticle);


        var textSection = document.createElement("SECTION");                 // Create a <li> node
var textArticle = document.createElement("ARTICLE");         // Create a text node
textSection.appendChild(textArticle);                              // Append the text to <li>
document.getElementsByTagName("MAIN").appendChild(textSection); 


    }

    addToJSON(){

    }

  }