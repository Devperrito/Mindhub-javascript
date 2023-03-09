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

function Checkboxfn() {
  //traemos los checkbox
  let cbs = document.querySelectorAll(".checkbox");
  let cont = 0;

  for (let cb of cbs) {
    cont++;
    cb.addEventListener("change", function () {

      let isChecked = false; //si esta checked entonces le poasariamos true a Cbvalues()
      let arrayvalues = [];

      if (cb.checked === true) {

        arrayvalues += arrayvalues.push(cb.value);

        c("que nos trae arrayvalues: "+arrayvalues);

        isChecked = true;
        Cbvalues(cb.value, data.events, isChecked); //aqui instacioamos la funcion con parametro 

        //c("deberia tener el value: " + cb.value);
      }else {
        isChecked = false;
        Cbvalues(cb.value, data.events, isChecked);
      }
    });

    cont++
  }

}

//trabajaremos en los checkboxes
function Cbvalues(selectedCategory, datacategory, ischeked) {



 // c("la category es: "+selectedCategory);



  let i = 0;

  let cards = document.querySelectorAll(".card");

  for (const data of datacategory) {

   

    //arrayvalues.push(selectedCategory);

    if (selectedCategory === data.category) {
  
      //c("is nt define?: "+cards);
      if(ischeked){

        if(cards[i].classList.contains('escondercards')){ //si esta checked entonces va a mostrar cards
          cards[i].classList.remove("escondercards");
        }

      }else { 
        cards[i].classList.add("escondercards"); //si no esta cheked no se mostrara cards
      }
      
      c(selectedCategory);
      //c("funciono entro en Cbvalues");
    }else {

      if(!cards[i].classList.contains('escondercards')){
        cards[i].classList.add("escondercards");
      }

    }

    i++;
  }

  //c("todos el arrayvalues checked:: "+arrayvalues);
}

//dom
let cards = document.querySelectorAll(".card");
const cardWrapper = document.querySelector(".card-wrapper");

//funcion para filtrar los datos por categoria
const inputvalue = document.querySelector(".input-search").value;
const searchbtn = document.querySelector(".searchbtn");

//const  = document.querySelectorAll();

//searchbtn.addEventListener("click", CrearCards);

function CrearCards() {

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

});

searchbtn.addEventListener("click", (e) => {

  const inputvalue = document.querySelector(".input-search").value;

  let cards = document.querySelectorAll(".card");

  e.preventDefault();
  
  c("que me brinda e event "+inputvalue);

  recorrecards();
  
});

cardWrapper.innerHTML = plantillaCard;
}

//recorre y renderiza las cards
function recorrecards(){

  const inputvalue = document.querySelector(".input-search").value;
  let cards = document.querySelectorAll(".card");

  data.events.map((card, i) => {
    if (inputvalue === card.category) {

        c("e === inputvalue: " + inputvalue);
  
        if(cards[i].classList.contains('escondercards')){
          cards[i].classList.remove("escondercards");
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
  
    }else {
  
      if(!cards[i].classList.contains('escondercards')){
        cards[i].classList.add("escondercards");
      }
    }
  });
}

//Cbvalues("Museum", data.events);
Checkboxfn();
CrearCards();