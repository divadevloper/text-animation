let text = document.getElementById("text");
let textword = "I'm a fullstack developer";



function animatin(element,text, i=0) {

    if (i === 0) {
        element.innerHTML = '';
    }
    element.innerHTML += text[i];
    if (i === textword.length -1) {
        return;
    }


    setTimeout(() =>  animatin(element,text , i+1), 50);
   

}
animatin(text, textword)