// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo()
{
   let amigo=document.querySelector('#amigo').value;
   if(amigo==''){
    alert("Por favor, inserte un nombre");
   }  
   else{
    alert("Estamos validando que el campo no fue vacio.");
    amigos.push(amigo);
    console.log(amigos);
    //limpiarCaja();
    amigo.value="";
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

function limpiarCaja()
{
    document.getElementById('amigo').value="";    
}