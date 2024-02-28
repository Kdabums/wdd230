const  options = {dateStyle: "full"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('en-US',options)

const  opts = {dateStyle: "full"};
document.getElementById("date").textContent = new Date().toLocaleDateString('en-US',opts)

function toggleMenu() {
    document.getElementById("navLink").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");


    
}

const button = document.getElementById('hamburger');
button.onclick = toggleMenu;



function getEvent(){
	let now = new Date();
	const day = now.getDay()
	if (day == 1 || day== 2){       
        
        console.log("today is monday");

            	
    }
}
getEvent();

