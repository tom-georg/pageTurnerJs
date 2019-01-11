class PageTurner{

    constructor(pageTurnerClass, pageTurnerNextButtonClass,pageTurnerPreviousButtonClass){
       // this.that = this;
        this.pageTurnerClass = pageTurnerClass;
        this.pageTurnerNextButtonClass = pageTurnerNextButtonClass;
        this.pageTurnerPreviousButtonClass = pageTurnerPreviousButtonClass;
        this.init();
    }

    init(){
        this.elements = document.getElementsByClassName(this.pageTurnerClass);
        this.hideAllElements(this.elements);
        this.index = 0; // Erstes Element

        let nextButtons     = document.getElementsByClassName(this.pageTurnerNextButtonClass);
        let previousButtons = document.getElementsByClassName(this.pageTurnerPreviousButtonClass);
        
        this.registerNextButtons(nextButtons);
        this.registerPreviousButtons(previousButtons);

        this.elements[0].style.display = "block";
    }

    hideAllElements(elements){
        console.log("Laenge: "+elements.length);
        for (let i=0;i<elements.length;i++) {
            let element = elements[i];
            console.log(element)
            element.style.display = "none";
        }
    }

    registerNextButtons(buttons){
        
        for(let i = 0;i<buttons.length;i++){
             let button = buttons[i];
             let that = this;
             button.onclick = function(){
                that.showNextElement();
             }
        }
    }

    registerPreviousButtons(buttons){
        
        for(let i = 0;i<buttons.length;i++){
             let button = buttons[i];
             let that = this;
             button.onclick = function(){
                that.showPreviousElement();
             }
        }
    }

    //Hides the current Element and shows the next element
    showNextElement(){
        console.log(this.index + "  " + this.elements.length)
        if(this.index >= this.elements.length){
            return false;
        }
        this.elements[this.index].style.display = "none";
        this.index += 1;
        this.elements[this.index].style.display = "block";
        return true;
    }
    //Hides the current Element and shows the previous element
    showPreviousElement(){
        console.log(this.index + "  " + this.elements.length)
        if(this.index < 0){
            return false;
        }
        this.elements[this.index].style.display = "none";
        this.index -= 1;
        this.elements[this.index].style.display = "block";
        return true;
    }
}