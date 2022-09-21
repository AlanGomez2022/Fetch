//------------------------------------------------------------------------
// compra2.html
Toastify({
    text: "SE HA GENERADO TU RESERVA...",
    duration: 3000,
    className:"tostada",
    destination: "",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "background-image: linear-gradient(105deg, #cf536a 0, #cb4a6f 7.14%, #c54074 14.29%, #bd357a 21.43%, #b22a7f 28.57%, #a41e85 35.71%, #93128a 42.86%, #7e098f 50%, #640994 57.14%, #401199 64.29%, #001a9e 71.43%, #0021a3 78.57%, #0026a6 85.71%, #0029a7 92.86%, #002ba7 100%);",
    },
    onClick: function(){} // Callback after click
  }).showToast();



let form2 = document.getElementById("form2")
form2.style.display="none"
let asignar = document.getElementById("asignarNombres")
let volver = document.getElementById("volver")

asignar.onclick= () =>{
    Toastify({
        text: "ASIGNANDO DATOS...",
        duration: 3000,
        className:"tostada",
        destination: "",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "background-image: linear-gradient(105deg, #cf536a 0, #cb4a6f 7.14%, #c54074 14.29%, #bd357a 21.43%, #b22a7f 28.57%, #a41e85 35.71%, #93128a 42.86%, #7e098f 50%, #640994 57.14%, #401199 64.29%, #001a9e 71.43%, #0021a3 78.57%, #0026a6 85.71%, #0029a7 92.86%, #002ba7 100%);",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    form2.style.display=""
    asignar.style.display="none"
    volver.style.display="none"
    let labelNombres = document.getElementsByClassName("form-label")
    let nombres = document.getElementsByClassName("form-control")
    let labelDni= document.getElementsByClassName("form-label2")
    let dni = document.getElementsByClassName ("form-control1")
    let cantidadEntradas =parseInt(localStorage.getItem("cantidad"))
    for(let i=cantidadEntradas; i<nombres.length;i++){
        console.log(i)
        labelNombres[i].style.display="none"
        nombres[i].style.display="none"
        labelDni[i].style.display="none"
        dni[i].style.display="none"
    }
}


//--------------------------------------------------------------------------------------
// RELOJ CON FECHA QUE UTILIZA UNA API

const tiempo = document.getElementById("reloj")
const date = document.createElement("p")
const diaSemana = document.createElement("p")
const hora = document.createElement("p")
setInterval(() => {
      fetch("http://worldtimeapi.org/api//America/Argentina/Buenos_Aires")
    .then((res) => res.json())
    .then ((resultado) =>{
      let fecha="";
      let dia=[0,"Lunes","Martes","Miercoles", "Jueves","Viernes","Sabado","Domingo"];
      for (let i=0;i<10;i++ ) {
        fecha+=resultado.datetime[i];
      }
    
      diaSemana.innerHTML=`
      <p>${dia[resultado.day_of_week]}  ${fecha}</p>
      `
      let time="";
      for (let i=11;i<19;i++){
        time+=resultado.datetime[i];
    
      }
      hora.innerHTML=`
        <p>Horario: ${time}</p>
      `
      
      tiempo.append(date)
      tiempo.append(diaSemana)
      tiempo.append(hora)
    })
},1000)

