//Creacion head
const meta = document.createElement('meta');
meta.setAttribute('http-equiv','X-UA-Compatible');
meta.setAttribute('content','ie=edge');

const title = document.querySelector('title');
title.textContent = 'Buscador múltiples campos JS Moderno';

const link1 = document.createElement('link');
link1.setAttribute('href','https://fonts.googleapis.com/css?family=Staatliches')
link1.setAttribute('rel','stylesheet');

const link2 = document.createElement('link');
link2.setAttribute('href','css/normalize.css')
link2.setAttribute('rel','stylesheet');

const link3 = document.createElement('link');
link3.setAttribute('href','css/skeleton.css')
link3.setAttribute('rel','stylesheet');

const link4 = document.createElement('link');
link4.setAttribute('href','css/app.css')
link4.setAttribute('rel','stylesheet');

const head = document.querySelector('head');

head.insertBefore(meta,title);
head.appendChild(link1);
head.appendChild(link2);
head.appendChild(link3);
head.appendChild(link4);

//Fin Head

//Creacion Body

const body = document.querySelector('body');
const script = document.querySelector('script')

const h1 = document.createElement('h1');
h1.textContent = 'Buscador de Autos';

const formBuscador = document.createElement('form');
formBuscador.setAttribute('id','buscador');
obtenerTodasLasMarcas()

const divContenedor = document.createElement('div')
divContenedor.classList.add('contenedor')

const divRow = document.createElement('div');
divRow.classList.add('row')
const divRow2 = document.createElement('div');
divRow2.classList.add('row')

const h1Resultados = document.createElement('h1');
h1Resultados.textContent = 'Resultados';

const divResultado = document.createElement('div');
divResultado.setAttribute('id','resultado');

const aSitioWeb = document.createElement('a');
aSitioWeb.classList.add('sitio-web');
aSitioWeb.setAttribute('href','https://www.codigoconjuan.com');
aSitioWeb.setAttribute('rel','nofollow noopener noreferrer');
aSitioWeb.textContent = 'Código Con Juan';


body.insertBefore(h1,script);
body.insertBefore(divContenedor,script);
    divContenedor.appendChild(formBuscador);
        formBuscador.appendChild(divRow);
            divRow.appendChild(obtenerTodasLasMarcas());
            divRow.appendChild(obtenerAnios(20));
            divRow.appendChild(obtenerMinimo(90000,8));
            divRow.appendChild(obtenerMaximo(90000,8));
            divRow.appendChild(divRow2);
            divRow2.appendChild(obtenerTodasLasPuertas())
            divRow2.appendChild(obtenerTodasLasTransmisiones())
            divRow2.appendChild(obtenerTodosLosColores())
    divContenedor.appendChild(h1Resultados);
    divContenedor.appendChild(divResultado);
body.insertBefore(aSitioWeb,script);

//PARA PRACTICAR LLENARE CADA CAMPO DE SELECCION CON FUNCIONES

//Obtener Todas las marcas
function obtenerTodasLasMarcas(){
    let marcas = []
    //Recorrer todos los autos y obtener sus marca
    //para compararlos con marcas y si no existen en marca se incluyen 
    autos.map( auto => {
        if(marcas.some(marca => marca === auto.marca) === false){
            marcas = [...marcas,auto.marca];    
        }
    })

    //Crear el Html para el select

    return crearHtmlSelect(marcas,"marcas",'Marca','three');
}

//Obtener los años
function obtenerAnios(cantidadAnios){
    let year = [];
    const anioActual = new Date().getFullYear();
    
    for(let i = anioActual; i>=anioActual-cantidadAnios; i--){
        year = [...year,i];
    }

    return crearHtmlSelect(year,'year','Año','three') 
}

//Obtener opcion precios minimos
function obtenerMinimo(maxMinimo,nroOpciones){
    let preciosMin = [];
    
    for(let i = maxMinimo; i>=maxMinimo-nroOpciones*10000; i -=10000){
        preciosMin = [...preciosMin,i];
    }

    return crearHtmlSelect(preciosMin,'minimo','Precio Min','three') 
}

//Obtener opciones precios maximos
function obtenerMaximo(maxMaximo,nroOpciones){
    let preciosMax = [];
    
    for(let i = maxMaximo; i>=maxMaximo-(nroOpciones*10000); i -=10000){
        preciosMax = [...preciosMax,i];
    }

    return crearHtmlSelect(preciosMax,'maximo','Precio Max','three') 
}

//Obtener todas las puertas
function obtenerTodasLasPuertas(){
    let puertas = []
    //Recorrer todos los autos y obtener sus marca
    //para compararlos con marcas y si no existen en marca se incluyen 
    autos.map( auto => {
        if(puertas.some(puerta => puerta === auto.puertas) === false){
            puertas = [...puertas,auto.puertas];    
        }
    })
    
    return crearHtmlSelect(puertas,"puertas",'Puertas','four');
}

//Obtener todas las transmisiones
function obtenerTodasLasTransmisiones(){
    let transmisiones = []
    //Recorrer todos los autos y obtener sus marca
    //para compararlos con marcas y si no existen en marca se incluyen 
    autos.map( auto => {
        if(transmisiones.some(transmision => transmision === auto.transmision) === false){
            transmisiones = [...transmisiones,auto.transmision];    
        }
    })
    
    return crearHtmlSelect(transmisiones,"transmision",'Transmision','four');
}

//Obtener Colores
function obtenerTodosLosColores(){
    let colores = []
    //Recorrer todos los autos y obtener sus marca
    //para compararlos con marcas y si no existen en marca se incluyen 
    autos.map( auto => {
        if(colores.some(color => color === auto.color) === false){
            colores = [...colores,auto.color];    
        }
    })
    
    return crearHtmlSelect(colores,"color",'Color','four');
}
//Crear el Html para el select
function crearHtmlSelect(arreglo, contenidoArreglo, textoLabel, columns){
    const div = document.createElement('div');
    div.classList.add(columns,'columns')

    const label = document.createElement('label');
    label.setAttribute('for',contenidoArreglo);
    label.textContent = textoLabel

    const select = document.createElement('select');
    select.classList.add('u-full-width');
    select.setAttribute('id',contenidoArreglo);

    const option = document.createElement('option')
    option.setAttribute('value',"");
    option.textContent = 'Seleccione'

    div.appendChild(label);
    div.appendChild(select);
    select.appendChild(option);
        //Incluir option 
    arreglo.forEach(element => {
        const option = document.createElement('option')
        option.setAttribute('value',element);
        option.textContent = element;
        
        select.appendChild(option);
    });
  

    return div;

}

/*############################ Fin CREAR PAGINA WEB ###################################################
    declaracion de variables de select
   
*/

const marca = document.querySelector("#marcas")
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: '',
}

//mostrar todos los autos apenas se carge la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarTodosLosAutos(autos);
    console.log(marca)
})

//EventListener de cada Select
marca.addEventListener('change', (evt) => {
    datosBusqueda.marca = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.marca)
})

year.addEventListener('change', (evt) => {
    datosBusqueda.year = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.year)
})

precioMin.addEventListener('change', (evt) => {
    datosBusqueda.precioMin = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.precioMin)
})

precioMax.addEventListener('change', (evt) => {
    datosBusqueda.precioMax = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.precioMax)
})

puertas.addEventListener('change', (evt) => {
    datosBusqueda.puertas = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.puertas)
})

transmision.addEventListener('change', (evt) => {
    datosBusqueda.transmision = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.transmision)
})

color.addEventListener('change', (evt) => {
    datosBusqueda.color = evt.target.value;
    filtrarAuto();

    console.log(datosBusqueda.color)
})


//Mostrar todos los autos al cargar la pagina
function mostrarTodosLosAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color, transmision} = auto;
        const pAuto = document.createElement('p');
        pAuto.textContent = `Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio ${precio} - Puertas: ${puertas} -Calor: ${color} -Transmision: ${transmision}` 
        
        divResultado.appendChild(pAuto)
    })
}

//Filtrar auto
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecioMax).filter(filtrarPrecioMin).filter(filtrarPuertas).filter(filtrarTrasmision).filter(filtrarColor);

    if(resultado.length){
        mostrarTodosLosAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay Resultados, intenta con otros terminos de busquedas';
    divResultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;        
    }
    return auto;
}

function filtrarYear(auto){

    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}

function filtrarPrecioMin(auto){

    if(datosBusqueda.precioMin){
        return auto.precio == datosBusqueda.precioMin;
    }
    return auto;
}

function filtrarPrecioMax(auto){

    if(datosBusqueda.precioMax){
        return auto.precio == datosBusqueda.precioMax;
    }
    return auto;
}

function filtrarPuertas(auto){

    if(datosBusqueda.puertas){
        return auto.puertas == datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTrasmision(auto){

    if(datosBusqueda.transmision){
        return auto.transmision == datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){

    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function limpiarHTML(){
    while(divResultado.firstChild){
        divResultado.removeChild(divResultado.firstChild);
    }
}