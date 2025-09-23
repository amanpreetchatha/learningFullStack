console.clear();


let pElement = document.getElementById('click-me');
let clearButton = document.getElementById('clear');

//console.log(window.scrollX,window.scrollY)
//console.log(Array.from(pointer));
pElement.style='font-size: 21px';

function myFunction(){
    let counter = document.getElementById('counter');
    /*if(headingTag.style.opacity == 0)
        headingTag.style.opacity = 1;
    else
        headingTag.style.opacity = 0;
    */
   //headingTag.classList.toggle('topHeading');
   //headingTag.classList.replace('topHeading','newStyle')

   //console.log(headingTag.classList)

   let counterVal = parseInt(counter.textContent);
   counter.textContent = counterVal + 1;
}
pElement.addEventListener('click',myFunction);
clearButton.addEventListener('click',()=>{
    let counter = document.getElementById('counter');
    counter.textContent = 0;
})