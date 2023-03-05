//import { data } from "./data.js";
//abreviamos console.log()
let c = console.log;

c("arrays? " + data.currentDate);

//texto length
//let texto = document.querySelectorAll('');

//este es el task numero 3 ya...
let plantillaCard = "";

//agregamos elipsis al final del texto descriptivo
function textoLength(texto, maximopermitido) {
  return `${texto.slice(0, maximopermitido)} …`;
}

//trabajaremos en los checkboxes
function Cbvalues(selectedCategory, datacategory) {
  for (const data of datacategory) {
    if (selectedCategory === data.category) {
      c(selectedCategory);
      c("funciono entro en Cbvalues");
    }
  }
}

function Checkboxfn() {
  //traemos los checkbox
  let cbs = document.querySelectorAll(".checkbox");
  let cont = 0;

  for (let cb of cbs) {
    cont++;
    cb.addEventListener("click", function () {
      if (cb.checked === true) {
        Cbvalues(cb.value, data.events); //aqui instacioamos la funcion
        c("deberia tener el value: " + cb.value);
      }
    });
  }
}

//dom
let cards = document.querySelectorAll(".card");
const cardWrapper = document.querySelector(".card-wrapper");

//funcion para filtrar los datos por categoria

const inputvalue = document.querySelector(".input-search").value;
const searchbtn = document.querySelector(".searchbtn");

const d = document;

searchbtn.addEventListener("click", CrearCards);

function CrearCards(inputvalue, searchbtn) {
  data.events.filter((card) => {

    plantillaCard += `
  <div class="card card1">
  <div class="card-header">
    <div class="imagen">
      <img src="${card.image}" alt="imagen card 1">
    </div>
    
  </div>
  <div class="card-main">
    <div class="titulos">
      <h1>${card.name}</h1>
      <p>${textoLength(card.description, 40)}</p>
    </div>

  </div>
  <div class="card-footer">
    <div class="footer">
      <div class="titulo">
        <p>Price: $${card.price}</p>
      </div>

      <div class="boton">
        <button><a href="Details.html">ver mas</a></button>
      </div>
     
    </div>

  </div>

  </div>
  `;

    d.addEventListener("click", (e) => {
      e.preventDefault();

      c("que me brinda e event "+inputvalue);

      if (inputvalue === card.category) {
        c("e === inputvalue: " + e.target.value);

        d.querySelectorAll(".card").forEach((elemento) => {

          if(elemento.classList.contains('escondercards')){
            elemento.classList.remove("escondercards");
          }
          
          
           /* d.querySelectorAll('.card').forEach((elemento) => {
          elemento.textContent.toLocaleLowerCase().includes(e.target.value)
          ? elemento.classList.remove("filter-card")
          : elemento.classList.add("filter-card");
          
        }); */
          /*
          elemento.textContent.toLocaleLowerCase().includes(e.target.value)
            ? elemento.classList.remove("escondercards")
            : elemento.classList.add("escondercards"); */
        });
      }else if(e.target.value !== card.category) {

        if(!elemento.classList.contains('escondercards')){
          elemento.classList.add("escondercards");
        }else {
          
        }



      }


    });


  });

  cardWrapper.innerHTML = plantillaCard;
  /*
  const cardWrapper = document.querySelector(".card-wrapper");

  
  for (let card of data.events) {

   if(card.category === ''){

    plantillaCard +=  `
    <div class="card card1">
    <div class="card-header">
      <div class="imagen">
        <img src="${card.image}" alt="imagen card 1">
      </div>
      
    </div>
    <div class="card-main">
      <div class="titulos">
        <h1>${card.name}</h1>
        <p>${textoLength(card.description, 40)}</p>
      </div>

    </div>
    <div class="card-footer">
      <div class="footer">
        <div class="titulo">
          <p>Price: $${card.price}</p>
        </div>

        <div class="boton">
          <button><a href="Details.html">ver mas</a></button>
        </div>
       
      </div>

    </div>

    </div>
    `;

    }else{

    }

    
  }

  */
  //cards.innerHTML = plantillaCard;
  //cardWrapper.innerHTML = plantillaCard;
}

//Cbvalues("Museum", data.events);
Checkboxfn();
CrearCards();
