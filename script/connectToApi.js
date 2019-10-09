'use strict';

const connectToApi = async () => {
  const section = document.querySelector('.random-word');
    
  const response= await fetch('https://api.adviceslip.com/advice')
     const wordArray= await response.json();
     console.log(wordArray);
     const words=wordArray.slip.advice.split(" ");
     const number= Math.floor(words.length*Math.random());
     const word= words[number].toUpperCase();
     const oneWord= word.split(/[ ,.]+/);
    console.log(word);
     const article = document.createElement('article')
        article.innerHTML = `
          <h3>${oneWord}</h3>
        `
        section.appendChild(article) 
     }


     connectToApi();
   

     const connectToApiAnswer1 = async() =>{
       const btn = document.querySelector('.random-btn-1');
       const response= await fetch('https://api.adviceslip.com/advice')
     const wordArray= await response.json();
     const words=wordArray.slip.advice.split(" ");
     const number= Math.floor(words.length*Math.random());
     const word1= words[number];
     btn.innerHTML=`${word1}`
     }

     connectToApiAnswer1();

     const connectToApiAnswer2 = async() =>{
      const btn = document.querySelector('.random-btn-2');
      const response= await fetch('https://api.adviceslip.com/advice')
    const wordArray= await response.json();
    const words=wordArray.slip.advice.split(" ");
    const number= Math.floor(words.length*Math.random());
    const word2= words[number];
    btn.innerHTML=`${word2}`
    }

    connectToApiAnswer2();

    const connectToApiAnswer3 = async() =>{
      const btn = document.querySelector('.random-btn-3');
      const response= await fetch('https://api.adviceslip.com/advice')
    const wordArray= await response.json();
    const words=wordArray.slip.advice.split(" ");
    const number= Math.floor(words.length*Math.random());
    const word3= words[number];
    btn.innerHTML=`${word3}`
    }

    connectToApiAnswer3();


/* 
     const connectToApiAnswer = async()=>{
       const btns= document.querySelectorAll('.random-btn');
       const response= await fetch ('https://random-word-api.herokuapp.com/word?key=8EYT0PH2&number=3');
       const answerArray= await response.json();

      for (let i = 0; i<answerArray.length; i++){
        btns[i].innerHTML = `${answerArray[i]}`;
      }

     }

 connectToApiAnswer(); */