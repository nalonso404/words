
function changeBackgroundText() {
    var textBg = document.getElementById("text-bg")
    if (textBg.innerHTML == "NADIE") {
      textBg.innerHTML = "SABE"   
    } else if (textBg.innerHTML == "SABE") {
      textBg.innerHTML = "NADA" 
    } else if (textBg.innerHTML == "NADA") {
      textBg.innerHTML = "NADIE" 
    };
  }
   
    changeBackgroundText();
  
  
  // Run this function every 300ms
  setInterval(changeBackgroundText, 700);