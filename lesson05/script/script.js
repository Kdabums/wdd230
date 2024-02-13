const list =document.querySelector("ul");
const input =document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function () {        
    const inputVal = input.value;
    if (inputVal != "") {         
        const childList = document.createElement('li');
        const span = document.createElement('span');
        const Btn = document.createElement('button');
        childList.appendChild(span);
        span.textContent = inputVal;
        childList.appendChild(Btn);    
        Btn.innerText = "❌";
        Btn.style.fontSize  = "25px";
        Btn.style.color = "#582F0E"    
        list.appendChild(childList);
        Btn.addEventListener('click', () => {list.removeChild(childList); });        
    	
	}
     else {    
        alert("Please enter a valid chapter");
        
    }
    input.value = '';
    input.focus();
    
    
  
});
