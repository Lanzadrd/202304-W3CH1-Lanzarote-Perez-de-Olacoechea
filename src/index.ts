import { createCharacters } from "./characters.ts";
import { King } from "./king.ts";
import { Warrior } from "./warrior.ts";
import { Adviser } from "./adviser.ts";
import { Squire } from "./squire.ts";
import "../styles.css";

const charactersArray = createCharacters();
const html = document.querySelector(".characters-list")!;

const template = (character: King | Warrior | Adviser | Squire) => {
  return `
  <li class="character col">
  <div class="card character__card">
  <img src="img/${character.name.toLowerCase()}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
  <div class="card-body">
  <h2 class="character__name card-title h4">${character.name} y ${
    character.family
  }</h2>
  <div class="character__info">
  <ul class="list-unstyled">
  <li>Edad: ${character.age} años</li>
  <li>
  Estado:
  <i class="fas fa-thumbs-down"></i>
  <i class="fas fa-thumbs-up"></i>
  </li>
  </ul>
  </div>
  <div class="character__overlay">
  <ul class="list-unstyled">
  <li>Años de reinado: }</li>
  </ul>
  <div class="character__actions">
  <button class="character__action btn">habla</button>
  <button class="character__action btn">muere</button>
  </div>
  </div>
  </div>
  <i class="emoji"></i>
  </div>
  </li>
  `;
};

let htmlList = "";

charactersArray.forEach((item) => {
  console.log(item);
  htmlList += template(item);
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="app-container">
    <ul class="characters-list row list-unstyled">
    ${htmlList}
    </ul>
  </div>
`;
