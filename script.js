let personagem = document.getElementById("personagem")
let bloco = document.getElementById("bloco")
let pontos = 0

function pular(){
    if(personagem.classList != "animate"){
        personagem.classList.add("animate")
    }
    setTimeout(function(){
        personagem.classList.remove("animate")
    },500);
}

let colisao = setInterval(function(){
    let personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"))
    let blocoLeft = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"))
    if(blocoLeft<60 && blocoLeft>0 && personagemTop>=120){
        bloco.style.animation = "none"
        bloco.style.display = "none"
        if(alert("Renan saiu da dieta de novo :(")){
            
        }
        else    window.location.reload()
    }
},10);

let tempo = setInterval(pontuacao,17);
function pontuacao() {
        pontos++
        document.getElementById("pontos").innerHTML = 0 + pontos
    }