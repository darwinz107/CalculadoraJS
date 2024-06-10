 function agregar(valor){
document.getElementById('pantalla').value +=valor;

 }
function borrar(){
    document.getElementById('pantalla').value ='';
}

function calcular(){

    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}


















// function accion(){
// document.getElementById('demostracion').innerHTML="Esto vale oro "+ Date();
    
// }

// const ContarLetra= 'Dragon es el mejor. La esencia pura. Sixd';
// const texto2 =' en el mundo'
// const respuesta4 = ContarLetra.split('. ');

// const resultado3= ContarLetra[0];
// let resultado2 = ContarLetra.trimEnd().concat(texto2).toUpperCase();
// let resultado = ContarLetra.slice(1,7);
// console.log(respuesta4); 



// document.getElementById('demostracion').innerHTML='Esto lo escribi en otro archivo sixd'

// const a = '2';
// const b = 3;


// function OperacionSuma (x,y){

// return x + y;
// }

// let respuesta = OperacionSuma(parseInt(a),b);


// console.log(`La suma de ${a} + ${b} es :`,respuesta);

// const num = 10;


// let OperacionSuma2 = numero => numero +12;
// let result = OperacionSuma2(num);
// console.log(result);


// const vendedor = {

// nombre: 'Jose',
// empresa: 'Cajamarca',
// idiomas : ['Ingles','Español'],
// edad: 8,
// frase: function(){
//     return "Pedro es un idiota";
// },
//  xd: function(){

//     return this.nombre +" dice "+this.frase();
//  }

// }

// console.log(vendedor.xd());


