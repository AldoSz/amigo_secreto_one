// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

//Funcion para agregar amigos
function agregarAmigo()
{
   //Se elige el objeto de campo de texto via DOM y se valida que haya amigos agregados. Al igual que por un usuario anterior se establece el "ganador" en blanco
   let amigo=document.querySelector('#amigo').value;
   let lista=document.getElementById('resultado');
   lista.innerHTML='';
   if(amigo==''){
    alert("Por favor, inserte un nombre");
   }  
   //En caso de que si exista un dato en el campo de texto se agrega al arreglo y se limpia la caja al igual que se llama la funcion de actualizar amigo 
   else{
    amigos.push(amigo);
    limpiarCaja();
    updateAmigos();
   }
}

//Funcion para recorrer la lista de amigo y actualizarla conforme se agregan
function updateAmigos()
{
 let lista=document.getElementById('listaAmigos');
 lista.innerHTML='';  
 for(let i=0;i<amigos.length;i++)
    {
     let li=document.createElement("li");
     li.appendChild(document.createTextNode(amigos[i]));
     lista.append(li);      
    } 
}

//Calcula el amigo secreto y lo muestra
function sortearAmigo()
{
 //Variables para usar y modificar el texto de la interfaz 
 let numeroAmigo=0;   
 let lista=document.getElementById('resultado');
 let listaAmigos=document.getElementById('listaAmigos');
  //Se valida si hay algun nombre almanecado en la lista
 if(amigos.length===0){
    alert("No hay ninguna nombre para sortear")     
 }else{
  //Calculo del numero aletorio. Se considera el funcionamiento de los arreglos para dicho calculo  
    numeroAmigo=Math.floor(Math.random()*amigos.length);
  //Se muestra el amigo secreto en interfaz y se establen valor a cero para que se llene nuevamente la lista y el calculo del amigo secreto  
    lista.innerHTML= "El amigo secreto sorteado es:" + amigos[numeroAmigo];
    listaAmigos.innerHTML='';
    amigos=[];
 }
}
//Se desarrolla una pequeña funcion para limpiar la caja de texto
function limpiarCaja()
{
    document.getElementById('amigo').value="";    
}