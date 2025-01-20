import { getPodcasts } from './api';

const podcastContainer = document.querySelector('.main__section--podlist') as HTMLElement;


export async function createHtml() {
  const podcasts = await getPodcasts();

  podcasts.programs.forEach((podcast) => {
    const innerArticle = createInnerArticle();

    createImg(podcast.socialimage, innerArticle, `Programbild för ${podcast.name}`);
    const textDiv = createTextDiv(innerArticle);

    createHeader(podcast.name, textDiv);
    createP(podcast.description, textDiv);
    createLink(podcast.programurl, textDiv);
  });
}

function createInnerArticle(): HTMLElement {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'section__article--innerarticle');
  podcastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv(parent: HTMLElement): HTMLElement {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'section__article--div');
  parent.appendChild(textDiv);
  return textDiv;
}

function createImg(src: string, parent: HTMLElement, alt: string): void {
  const imgPlacement = document.createElement('img');
  imgPlacement.setAttribute('src', src);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.setAttribute('alt', alt);
  parent.appendChild(imgPlacement);
}

function createHeader(name: string, parent: HTMLElement): void {
  const headerPlacement = document.createElement('h2');
  headerPlacement.textContent = name;
  parent.appendChild(headerPlacement);
}

function createP(description: string, parent: HTMLElement): void {
  const descPlacement = document.createElement('p');
  descPlacement.textContent = description;
  parent.appendChild(descPlacement);
}

function createLink(url: string, parent: HTMLElement): void {
  const linkPlacement = document.createElement('a');
  linkPlacement.setAttribute('href', url);
  linkPlacement.textContent = 'Lyssna här';
  parent.appendChild(linkPlacement);
}

export default createHtml;

/*
import { getPodcasts } from './api';

const podcastContainer = document.querySelector('.section__podlist-pods') as HTMLElement;

let i = 0;

const innerArticle = createInnerArticle();
const textDiv = createTextDiv();

export async function createHtml() {
  const podcasts = await getPodcasts();

  podcasts.programs.forEach(podcast => {
    i++;

    createInnerArticle();
    createTextDiv();

    createImg(podcasts);

    createHeader(podcasts);
    createP(podcasts);
    createLink(podcasts);
  
  });
}

function createInnerArticle() {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'section__article-innerarticle');
  podcastContainer.appendChild(innerArticle);
  return innerArticle;
}

function createTextDiv() {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'section__article-div');
  innerArticle.appendChild(textDiv);
  return textDiv;
}

function createImg(podcasts) {
  
  const imgPlacement = document.createElement('img');
  imgPlacement.setAttribute('src', podcasts.programs[i].socialimage);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  innerArticle.appendChild(imgPlacement);
}

function createHeader(podcasts) {
  const headerPlacement = document.createElement('h2');
  const programName = document.createTextNode(podcasts.programs[i].name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}

function createP(podcasts) {
  const descPlacement = document.createElement('p');
  const desc = document.createTextNode(podcasts.programs[i].description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createLink(podcasts) {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', podcasts.programs[i].programurl);
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export default createHtml;
*/