//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para resultados
const resultados = document.querySelector('#resultado');

//Obtener la fecha actual
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//Generar objeto, el cual almacenara los eventos ocurridos

const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra los autos al cargar

    //llena las opciones de años
    llenarSelect();
})

//Event listeners para los select
marca.addEventListener('change', (evt) => {
    datosBusqueda.marca = evt.target.value;

    filtrarAuto();
});
year.addEventListener('change', (evt) => {
    datosBusqueda.year = evt.target.value;
    filtrarAuto();
});
precioMin.addEventListener('change', (evt) => {
    datosBusqueda.precioMin = evt.target.value;
    filtrarAuto();
});
precioMax.addEventListener('change', (evt) => {
    datosBusqueda.precioMax = evt.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', (evt) => {
    datosBusqueda.puertas = parseInt(evt.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', (evt) => {
    datosBusqueda.transmision = evt.target.value;
    filtrarAuto();
});
color.addEventListener('change', (evt) => {
    datosBusqueda.color = evt.target.value;
    filtrarAuto();
    //console.log(datosBusqueda)
});

//Funciones.
//Recordar que autos hace mencion al simulador de base de datos.
function mostrarAutos(autos){
    limpiarHTML(); //Elimina los resultados para poder escribir los nuevos
    autos.forEach(auto => {
        
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        const autoHtml = document.createElement('P');

        autoHtml.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas -Precio: ${precio} - Transmicion: ${transmision} - Color: ${color}
            
        `;

        //insertar en el HTML
        resultados.appendChild(autoHtml)
    });
}

function limpiarHTML(){
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild);
    }
}

function llenarSelect(){
    for (let i = maxYear; i >= minYear; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
        
    }
}

//filtrar en base a la busqueda
//Funcion de alto nivel ya que recive como parametro otra funcion
function filtrarAuto(){

    //filtra directamente de la base de datos
    //si no se filtra por nada, mostrara todo directamente
    //filter, puede filtrar por cadena
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay Resultados, intenta con otros terminos de busquedas';
    resultados.appendChild(noResultado);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

//En esta seccion hay que tener cuidado ya que los parametros
//de select son String y los datos de la base de datos son int
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarPrecioMin(auto){
    const {precioMin} = datosBusqueda;
    if(precioMin){
        //No es necesario parseInt ya que no es un comparador extricto
        return auto.precio == precioMin;
    }
    return auto;
}
function filtrarPrecioMax(auto){
    const {precioMax} = datosBusqueda;
    if(precioMax){
        //No es necesario parseInt ya que no es un comparador extricto
        return auto.precio == precioMax;
    }
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        //No es necesario parseInt ya que no es un comparador extricto
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        //No es necesario parseInt ya que no es un comparador extricto
        return auto.transmision == transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        //No es necesario parseInt ya que no es un comparador extricto
        return auto.color == color;
    }
    return auto;
}