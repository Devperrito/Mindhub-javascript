//abreviamos console.log()
let c = console.log;

//texto length
//let texto = document.querySelectorAll('');

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
    {
      _id: 3,
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      name: "Batman",
      date: "2021-03-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};

//agregamos elipsis al final del texto descriptivo
function textoLength (texto, maximopermitido){
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

function CrearCards() {
  const cards = document.querySelector(".cards");
  const cardWrapper = document.querySelector(".card-wrapper");
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
  }
  //cards.innerHTML = plantillaCard;
  cardWrapper.innerHTML = plantillaCard;
}

//Cbvalues("Museum", data.events);
Checkboxfn();
CrearCards();
