let c = console.log;
let urlAPI = "https://mindhub-xj03.onrender.com/api/amazing";

let currentdateglobal = "";

async function getEvents() {
  let events = [];

  try {
    let response = await fetch(urlAPI);
    let dataAPI = await response.json();

    currentdateglobal = dataAPI.currentDate;
    c("cglobal: "+currentdateglobal);

    for (const event of dataAPI.events) {
      try {
        events.push({
          _id: event._id,
          category: event.category,
          capacity: event.capacity,
          assistance: event.assistance,
          name: event.name,
          date: `${event.date}`,
          currentdate: `${currentdateglobal}`
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    // ya tengo disponible el array pokemons para hacer todas las operaciones iniciales
    upcomingevents(events, currentdateglobal);
    mayorPorcentajeAsistencias(events);
    menorPorcentajeAsistencias(events);
    objetoConMayorCapacidad(events);

    
    //mayorCapacidad(events);
    //mayorcapacidadMathmax(events);
    
    return events;
  } catch (error) {
    console.log(error.message);
  }
}

function mayorPorcentajeAsistencias(datosp) {
  const mayorp = soloConAsistencias(datosp).reduce((eventoanterior, eventoactual) => {
    const porcentajeanterior =
      (eventoanterior.assistance / eventoanterior.capacity) * 100;
    const porcentaactual =
      (eventoactual.assistance / eventoactual.capacity) * 100;
    return porcentajeanterior > porcentaactual ? eventoanterior : eventoactual;
  });

  c(
    `El objeto con mayor porcentaje de asistencia es el ${
      mayorp.name
    }, con un ${((mayorp.assistance / mayorp.capacity) * 100).toFixed(
      2
    )}% de asistencia.`
  );

  return mayorp;
}

function menorPorcentajeAsistencias(datosp) {
  const menorp = soloConAsistencias(datosp).reduce((eventoanterior, eventoactual) => {
    const porcentajeanterior =
      (eventoanterior.assistance / eventoanterior.capacity) * 100;
    const porcentaactual =
      (eventoactual.assistance / eventoactual.capacity) * 100;
    return porcentajeanterior < porcentaactual ? eventoanterior : eventoactual;
  });

  c(
    `El objeto con menor porcentaje de asistencia es el ${
      menorp.name
    }, con un ${((menorp.assistance / menorp.capacity) * 100).toFixed(
      2
    )}% de asistencia.`
  );

  return menorp;
}

/*
function mayorCapacidad(eventos) {
  c("eventos "+eventos);
  let eventomayorcapacidad = eventos.reduce((eventoanterior, eventoactual) => {
    return eventoanterior.capacity > eventoactual.capacity ? eventoanterior.capacity : eventoactual.capacity;
  });

  c("lista: "+eventomayorcapacidad);
  return eventomayorcapacidad;

}
*/

// Método para retornar el objeto con la mayor capacidad
function objetoConMayorCapacidad(array) {
  let capacidades = array.map(objeto => objeto.capacity);
  let mayorCapacidad = Math.max(...capacidades);
  c(array.find(event => event.capacity === mayorCapacidad));
  return array.find((objeto) => objeto.capacity === mayorCapacidad);
}

//esta funcion devolvera solo los eventos que tengan asistencia 
function soloConAsistencias(eventos){
  let temporal = [];

  eventos.forEach((asistencia) => {
    if (!isNaN(asistencia.assistance)) {
      temporal.push({
        capacity: asistencia.capacity,
        assistance: asistencia.assistance,
        name: asistencia.name,
      });
    }
  });

  return temporal;
}

//metodo para traer solo upcoming events
function upcomingevents(eventos, currentdate){

  c(eventos[0].currentdate);
  let arr_cardupcoming = []; 

  for(dataupcoming of eventos){

    

     //Primero patron para solo numeros
     let regex = /(\d+)/g;

     //segundo traemos solo los numeros
     let numeros = currentdate.match(regex);


     //tercero unimos toda la fecha con solo numeros
     let fecha = numeros.join("");

     
     c(fecha);
 
    if(fecha > currentDateNow(eventos)){
      arr_cardupcoming.push(
        {
          _id: dataupcoming._id,
          "image": dataupcoming.image,
          "name": dataupcoming.name,
          "description": dataupcoming.description,
          "category": dataupcoming.category,
          "place": dataupcoming.place,
          "capacity": dataupcoming.capacity,
          "assistance": dataupcoming.assistance,
          "price": dataupcoming.price
        },
      );
    }
  }

  cargarupcomingtable(arr_cardupcoming);
  return arr_cardupcoming;
}

 // ========================= CurrentDateNow() ==========================
 function currentDateNow(currentdate) {
  //Primero patron para solo numeros
  c(currentdate.currentdate);
  let regex = /(\d+)/g;

  let fechaActual = "";

  //segundo traemos solo los numeros
  let numerosActuales = currentdate.currentdate.match(regex);

  //tercero unimos toda la fecha con solo numeros
  fechaActual = numerosActuales.join("");

  c(fechaActual);

  return fechaActual;
}

function cargarupcomingtable(upcomingeventsp){
  let container = document.querySelector("tbody");
  let tableBodyHTML = "";

   upcomingeventsp.forEach((upcoming) => {
     tableBodyHTML += `<tr>
        <td>${upcoming}</td>
       
    </tr>`;
   });

   container.innerHTML = tableBodyHTML;
}

function convertirAPorcentaje(asistencianum) {}


getEvents();