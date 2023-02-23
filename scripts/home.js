//abreviamos console.log()
let c = console.log;

//datos para llenar
data = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
  ],
};

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
        c("deberia tener el value: "+cb.value);
      }
    });
  }
}

//dom
let cards = document.querySelectorAll(".card");

function CrearCards() {
  const cards = document.querySelector(".cards");
  let plantillaCard = "";

  for (let card of data.events) {
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
             <p>${card.description}</p>
           </div>
     
         </div>
         <div class="card-footer">
           <div class="footer">
             <div class="titulo">
               <p>${card.price}</p>
             </div>
     
             <div class="boton">
               <button><a href="Details.html">ver mas</a></button>
             </div>
            
           </div>
     
         </div>
     
       </div>
       `;
  }
  cards.innerHTML = plantillaCard;
}

//Cbvalues("Museum", data.events);
Checkboxfn();
CrearCards();
