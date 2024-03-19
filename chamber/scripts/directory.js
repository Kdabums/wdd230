const directoryUrl = "./data/members.json"


getcompaniesData(directoryUrl );

async function getcompaniesData(directoryUrl ){
    const result  = await fetch(directoryUrl )
    const data = await result.json();
    displayCompanies(data.companies);
   
    
   
}



function displayCompanies(companies){
    let mainDiv  = document.querySelector(".main-directory")
    companies.forEach(company => {
        
        let sect = document.createElement('section');
        sect.classList.add('main-patners');
        let fig = document.createElement('figure');
        fig.classList.add('patners-img');
        let name = document.createElement('h3');    
        let industry = document.createElement('p');
        let Membershiplevel=document.createElement('p');
        let line = document.createElement('hr');
        line.classList.add('line');
        let location = document.createElement('p');
        let domain = document.createElement('p');        
        let image = document.createElement('img');

        name.innerHTML =    ` ${company.name}`;
        industry.innerHTML = `${company.PhoneNumber}`;        
        location.innerHTML = `${company.Address}`;
        domain.innerHTML = `  ${company.Website}`;
        Membershiplevel.innerHTML = `  ${company.Membershiplevel}`;
        image.setAttribute( 'src',`./images/${company.image}` );
        image.setAttribute( 'alt', `image of ${company.name} `);
        image.setAttribute( 'width', '250');
        image.setAttribute( 'height', '150');
        image.setAttribute( 'loading', 'lazy');

        fig.appendChild(image);

        sect.appendChild(name);
        sect.appendChild(fig);
        sect.appendChild(line);
        sect.appendChild(industry);        
        sect.appendChild(location);
        sect.appendChild(domain);        
        
        mainDiv.appendChild(sect)

        
    });

};

const listBtn = document.querySelector('#list-btn');
const gridBtn = document.querySelector('#grid-btn');
const main = document.querySelector('.main-directory');
const display = document.querySelector('article')

gridBtn.addEventListener("click", () => {	
	display.classList.add("main-directory");
	display.classList.remove("list");
});

listBtn.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("main-directory");
}
