'use strict'



function buttonRandom(){
  emptyResult();
      const section = document.querySelector('.random-result');
          let resultado = Math.random();
          if(resultado>0.7){
            const article = document.createElement('article')
            article.innerHTML = `
              <h3 class="respuesta">Perfect! te nombramos caballero Words</h3>
            `
            section.appendChild(article)
          } else if(resultado > 0.5 && resultado < 0.7){
            const article = document.createElement('article')
            article.innerHTML = `
              <h3 class="respuesta">Hay nivel pero aún se puede mejorar</h3>
            `
            section.appendChild(article)
           }else{
            const article = document.createElement('article')
            article.innerHTML = `
              <h3 class="respuesta">Dedícate al parchís</h3>
            `
            section.appendChild(article)
          }

          emptyContain()


}


//botones respuesta
function eventListener(){ 
    let btn1 = document.querySelector('.random-btn-1');
    btn1.addEventListener("click", buttonRandom);

    let btn2 = document.querySelector('.random-btn-2');
    btn2.addEventListener("click", buttonRandom);

    let btn3 = document.querySelector('.random-btn-3');
    btn3.addEventListener("click", buttonRandom);
}

eventListener();

//boton try again

function emptyResult(){
  document.querySelector('.random-result').innerHTML=" ";

}


let deleteButton= document.querySelector('.delete-btn');

function emptyContain(){

  console.log(`empty contain`)
  document.querySelector('.random-word').innerHTML="";
  document.querySelector('.random-btn-1').innerHTML = "";
  document.querySelector('.random-btn-2').innerHTML = "";
  document.querySelector('.random-btn-3').innerHTML = "";
  connectToApiAnswer1();
  connectToApiAnswer2();
  connectToApiAnswer3();
  connectToApi()


  
}




function tryAgain(){
 
    deleteButton.addEventListener("click", emptyContain);
}
tryAgain(); 
