// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo()
{
   let amigo=document.querySelector('#amigo').value;
   let lista=document.getElementById('resultado');
   lista.innerHTML='';
   if(amigo==''){
    alert("Por favor, inserte un nombre");
   }  
   else{
    amigos.push(amigo);
    console.log(amigos);
    limpiarCaja();
   }
   updateAmigos();
}

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

function sortearAmigo()
{
 let numeroAmigo=0;   
 let lista=document.getElementById('resultado');
 let listaAmigos=document.getElementById('listaAmigos');
 if(amigos.length==0){
    alert("No hay ninguna nombre para sortear")     
 }else{
    numeroAmigo=Math.floor(Math.random()*amigos.length);
    lista.innerHTML= "El amigo secreto sorteado es:" + amigos[numeroAmigo];
    listaAmigos.innerHTML='';
    amigos=[];
 }

}

function limpiarCaja()
{
    document.getElementById('amigo').value="";    
}