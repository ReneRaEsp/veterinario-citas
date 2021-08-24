const mascotaInput = document.querySelector('#mascota');
const especieInput = document.querySelector('#especie');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const descripcionInput = document.querySelector('#descripcion');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
const crear = document.getElementById('crear');

let cont = 0;
const citas = [];

//Functions

const datosCita = (e)=>{
    let campo = e.target.name;
    citaObj[campo] = e.target.value
    console.log(citaObj);
}
const eventListeners = ()=>{
    mascotaInput.addEventListener('change', datosCita);
    especieInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    descripcionInput.addEventListener('change', datosCita);
    crear.addEventListener('click', crearCita);
    contenedorCitas.addEventListener('click', eliminarCita);
}
let citaObj = {
    id:cont,
    mascota:'',
    especie:'perro',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    descripcion:''
}
const crearCita = ()=>{
    //Create elements
    let cita = document.createElement('div');
    let data = document.createElement('div');
    let botones = document.createElement('div');
    let mascota = document.createElement('h3');
    let especie = document.createElement('p'); 
    let propietario = document.createElement('p'); 
    let telefono = document.createElement('p'); 
    let fecha = document.createElement('p'); 
    let hora = document.createElement('p');
    let descripcion = document.createElement('p'); 
    let editar = document.createElement('p'); 
    let eliminar = document.createElement('p');

    //Create elements dinamics
    let data_mascota = document.createElement('span');
    let data_especie = document.createElement('span');
    let data_propietario = document.createElement('span');
    let data_telefono = document.createElement('span');
    let data_fecha = document.createElement('span');
    let data_hora = document.createElement('span');
    let data_descripcion = document.createElement('span');    

    //Create text nodes
    let especie_text = document.createTextNode = 'Especie: ';
    let propietario_text = document.createTextNode = 'Propietario: ';
    let telefono_text = document.createTextNode = 'Telefono: ';
    let fecha_text = document.createTextNode = 'Fecha: ';
    let hora_text = document.createTextNode = 'Hora: ';
    let descripcion_text = document.createTextNode = 'Descripcion: ';
    let editar_text =  document.createTextNode = 'Editar ';
    let eliminar_text = document.createTextNode = 'Eliminar ';

    //Create dinamic text nodes
    let data_mascota_text = document.createTextNode = citaObj.mascota;
    let data_especie_text = document.createTextNode = citaObj.especie;
    let data_propietario_text = document.createTextNode = citaObj.propietario;
    let data_telefono_text = document.createTextNode = citaObj.telefono;
    let data_fecha_text = document.createTextNode = citaObj.fecha;
    let data_hora_text = document.createTextNode = citaObj.hora;
    let data_descripcion_text = document.createTextNode = citaObj.descripcion;

    //Add text nodes
    especie.append(especie_text);
    propietario.append(propietario_text);
    telefono.append(telefono_text);
    fecha.append(fecha_text);
    hora.append(hora_text);
    descripcion.append(descripcion_text);
    editar.append(editar_text);
    eliminar.append(eliminar_text);

    //Add dinamic text nodes
    mascota.append(data_mascota_text);
    data_propietario.append(data_propietario_text);
    data_especie.append(data_especie_text);
    data_telefono.append(data_telefono_text);
    data_fecha.append(data_fecha_text);
    data_telefono.append(data_telefono_text);
    data_hora.append(data_hora_text);
    data_descripcion.append(data_descripcion_text);

    //Add classes
    cita.classList.add('cita');
    data.classList.add('data');
    botones.classList.add('botones');
    editar.classList.add('editar');
    eliminar.classList.add('eliminar');

    //Add dinamic clasess
    mascota.classList.add('data-mascota');
    data_especie.classList.add('data-especie');
    data_propietario.classList.add('data-propietario');
    data_telefono.classList.add('data-telefono');
    data_fecha.classList.add('data-fecha');
    data_hora.classList.add('data-hora');
    data_descripcion.classList.add('data-descripcion');

    //Assambling data
    mascota.append(data_mascota);
    especie.append(data_especie);
    propietario.append(data_propietario);
    telefono.append(data_telefono);
    fecha.append(data_fecha);
    hora.append(data_hora);
    descripcion.append(data_descripcion);
    data.append(especie);
    data.append(propietario);
    data.append(telefono);
    data.append(fecha);
    data.append(hora);
    data.append(descripcion);

    //Assambling botones
    botones.append(editar);
    botones.append(eliminar);

    //Assambling cita    
    cita.append(mascota);
    cita.append(data);
    cita.append(botones);

    contenedorCitas.append(cita);
    
    //Add id
    cita.id = citaObj.id;
    console.log(cita.id);
    citas.push(citaObj);
    cont++;
    citaObj={
        id:cont,
        mascota:'',
        especie:'perro',
        propietario:'',
        telefono:'',
        hora:'',
        descripcion:''
    };
}
const eliminarCita = (e)=>{
    let id = e.target.parentNode.parentNode.id;
    let borrar;
    citas.forEach(cita=>{
        cita.id == id ? citas.splice(id, 1) : null
        borrar = document.getElementById(cita.id);
        cita.id == id ? borrar.remove() : null
        cita.id == id ? console.log(borrar) : null;
    });
}

eventListeners();