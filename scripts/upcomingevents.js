//abreviamos console.log()
let c = console.log;

c("aca viene el data: "+data.currentDate);

  //agregamos elipsis al final del texto descriptivo
  function textoLength (texto, maximopermitido){
    return `${texto.slice(0, maximopermitido)} …`;
  }

  function currentDateNow() {
    //Primero patron para solo numeros
    let regex = /(\d+)/g;

    let fechaActual = ''; 

    //segundo traemos solo los numeros 
    let numerosActuales = data.currentDate.match(regex);

    //tercero unimos toda la fecha con solo numeros
    fechaActual = numerosActuales.join('');

    return fechaActual;
  }

  function upcomingevent() {
    
    const cardWrapper = document.querySelector(".card-wrapper");
    const cards = document.querySelector('.cards');
    let plantillaCard = "";

    for(let card of data.events){

        let patt1 = /[0-9]/g;
        //let fechaActual = 20220101;

        //Primero patron para solo numeros
        let regex = /(\d+)/g;

        //segundo traemos solo los numeros 
        let numeros = card.date.match(regex);

        //tercero unimos toda la fecha con solo numeros
        let fecha = numeros.join('');

        //si la fecha es mayor al currentDate entonces es upcoming event
        if(fecha > currentDateNow()){ 
            c(card._id+" es upcoming events");
        

         plantillaCard += 
         `
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
        //pusheamos las fechas y lo guardamos en array (fechas)
        //fechas.push(fecha); 
    }

  cardWrapper.innerHTML = plantillaCard;
}

currentDateNow();
upcomingevent();