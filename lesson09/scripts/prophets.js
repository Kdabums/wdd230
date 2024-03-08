const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
getprophetData(url);

async function getprophetData(url){
    const result  = await fetch(url)
    const data = await result.json();
    displayProphets(data.prophets);
	 
   
};



function displayProphets(prophets){
    let mainDiv  = document.querySelector("#cards")
    prophets.forEach(prophet => {
        // create the necessary  html elements
        let sect = document.createElement('section');
        sect.classList.add('sect');
        let info = document.createElement('div');
        info.classList.add("info");
        let fullName = document.createElement('h2');
        let order = document.createElement('p');
        let length = document.createElement('p');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let death = document.createElement('p');
        let children = document.createElement('p');
        let image = document.createElement('img');

        fullName.textContent = ` ${prophet.name}  ${prophet.lastname}`;
        order.innerHTML = `<strong class="label"> Order <strong/>:  ${prophet.order} `;
        length.innerHTML = `<strong class="label"> Length <strong/>:  ${prophet.length} `;
        birthdate.innerHTML = `<strong class="label"> Birthdate <strong/>:  ${prophet.birthdate} `;
        birthplace.innerHTML = `<strong class="label"> Birthplace   <strong/>:  ${prophet.birthplace} `;
        death.innerHTML = `<strong class="label"> Death  <strong/>:  ${prophet.death} `;
        children.innerHTML = `<strong class="label"> Children <strong/>:  ${prophet.numofchildren} `;
        image.setAttribute( 'src', prophet.imageurl);
        image.setAttribute( 'alt', `Image of ${prophet.name}  ${prophet.lastname}`);
        image.setAttribute( 'width', '340');
        image.setAttribute( 'height', '440');
        image.setAttribute( 'loading', 'lazy');


        
        info.appendChild(order)
        info.appendChild(length)
        info.appendChild(birthplace)
        info.appendChild(birthdate)
        info.appendChild(death)
        info.appendChild(children)

        sect.appendChild(fullName)
        sect.appendChild(info)
        sect.appendChild(image)

        mainDiv.appendChild(sect)

        
    });

};










