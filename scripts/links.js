const baseURL = "https://kdabums.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const activitiesList = document.querySelector('.main-section .learning ul');

  data.lessons.forEach(lesson => {
    const lessonNumber = lesson.lesson;
    const lessonLinks = lesson.links;

    const lessonItem = document.createElement('li');
    lessonItem.textContent = `${lessonNumber}:`;

    lessonLinks.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = baseURL + link.url;
      linkElement.textContent = link.title;

      const separator = document.createTextNode(' | ');

      lessonItem.appendChild(linkElement);
      lessonItem.appendChild(separator);
    });

    // Remove the last separator
    lessonItem.removeChild(lessonItem.lastChild);

    activitiesList.appendChild(lessonItem);
  });
}

getLinks();
