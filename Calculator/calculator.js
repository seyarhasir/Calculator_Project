document.addEventListener("DOMContentLoaded", function() {
    const resultInput = document.getElementById("result");
  
    for (let i = 0; i <= 9; i++) {
      const btn = document.getElementById(`btn${i}`);
      
      btn.addEventListener("click", function() {
        resultInput.value += i;
      });
    }
  
    const clearBtn = document.getElementById("clearBtn");
    
    clearBtn.addEventListener("click", function() {
      resultInput.value = "";
    });
  
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");
  
    addBtn.addEventListener("click", function() {
      resultInput.value += "+";
    });
  
    subtractBtn.addEventListener("click", function() {
      resultInput.value += "-";
    });
  
    multiplyBtn.addEventListener("click", function() {
      resultInput.value += "*";
    });
  
    divideBtn.addEventListener("click", function() {
      resultInput.value += "/";
    });
  
    const equalBtn = document.getElementById("equalBtn");
    
    equalBtn.addEventListener("click", function() {
      try {
        resultInput.value = eval(resultInput.value);
      } catch (error) {
        resultInput.value = "Error";
      }
    });
  });
