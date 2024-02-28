// let currentVisit = window.localStorage.getItem("currentVisit");
// let lastVisit = window.localStorage.getItem("lastVisit");
// let p = document.getElementsByClassName("showVisits")[0];
// let time = new Date().getTime()
// let day = parseInt(time/(1000 * 3600 * 24));
// let diffInDays = currentVisit - lastVisit;
// getLastVisit()

// function getLastVisit(){
//   if (diffInDays == 0){
//     p.append("It has been 0 day(s) since your last visit")
//     window.localStorage.setItem("lastVisit", currentVisit);
//   }
//   else if (isNaN(diffInDays)){
//     p.append("it has been 0 day(s) since your last visit")
//     window.localStorage.setItem("lastVisit", currentVisit);
//   }
//   else {
//     p.append("It has been " + diffInDays + " day(s) since your last visit");
//     window.localStorage.setItem("lastVisit", currentVisit);
//   }

//   window.localStorage.setItem("currentVisit", day);
//   window.localStorage.setItem("diffInDays", diffInDays) 
// }

const visitsDisplay = document.querySelector(".visit")
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//  Determine if this is the first visit or display the number of visits. 
// We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.








const imagesToLoad = document.querySelectorAll("img[data-src]");


function loadImages(image) {
    image.setAttribute('src', image.getAttribute("data-src"));
    image.onLoad = () =>{
        image.removeAttribute("data-src");
    };
   
};
// const imgOptions ={
//     root: null,
//     rootMargin: "0px 0px 50px 0px " ,
//   threshold: 0,
// }
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }