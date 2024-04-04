let text = document.getElementById("text");
let textword = "I'm a fullstack developer";
let index = 0
let forward = true

setInterval(() => {
    if (index < textword.length && forward) {
        text.innerHTML += textword[index]
        index ++
    }else if( index > 0){
      forward= false;
      index -- ;
  text.innerHTML = textword.substring(0, index)

    }
    else{
        forward=true
    }
}, 50);


// function animatin(element, text, i = 0) {

//     if (i === 0) {
//         element.innerHTML = '';
//     }
//     element.innerHTML += text[i];
//     if (i === textword.length - 1) {
        
//     }


//     setTimeout(() => animatin(element, text, i + 1), 100);

//     if (i > textword.length) {
//         textword.substring(0, i)
//         
      
//     }


// }
// animatin(text, textword)