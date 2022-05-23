//'use strict';
function strictMode(){
    teste = 'teste';
    console.log(teste);
    delete teste; //erro
}
function template(){
    let stringNormal = 'hello world'; //string convencional
    let stringInterpolada = `${stringNormal}`;
    console.log(stringNormal, ' - ',stringInterpolada);
}
function destructuring(){
    let array = ['elem1', 'elem2', 'elem3'];
    let [i1, i2, i3] = array;
    console.log(array, i1, i2, i3);
}
function varLetConst(){ //criação, chamada, inicialização
    //console.log(testeVar); //undefined
    //var testeVar = 'teste var';
    //console.log(testeLet); //uncaught error
    //let testeLet = 'teste let';
    const testeConst = {'nome': 'jason', 'idade': 21};
    console.log(testeConst.nome);
    testeConst.nome = 'Raito Yagami';
    console.log(testeConst.nome);
}

function forForEachForOf(){
    let array = [];
    let string = 'hello world!';
    let data = { 'name': 'name', 'age': 21 };
    for(let i=0; i < 10; i++){
        array.push(i);
    }
    array.forEach((item) => { //item, index, array
        console.log(item);
    });
    for(let x of string){
        console.log(x);
    }
    for(let x of array){
        console.log(x);
    }
    for(let x of data){
        console.log(x); //erro
        console.log(data[x]);//erro
    }
    for(let x in data){
        console.log(data[x]);
    }
}