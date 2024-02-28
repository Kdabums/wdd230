

document.addEventListener("DOMContentLoaded", function () {
   
    if (!localStorage.getItem("visits")) {
       
        localStorage.setItem("visits", 1);
    } else {
      
        let visits = parseInt(localStorage.getItem("visits")) + 1;
        localStorage.setItem("visits", visits);
        updateVisits(visits);
    }
});

function updateVisits(visits) {
    
    const visitsElement = document.querySelector(".visits");
    if (visitsElement) {
        visitsElement.textContent = visits;
    }
}
