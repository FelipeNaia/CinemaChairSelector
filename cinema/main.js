const canv = document.getElementById("canvas");
const c = canv.getContext("2d");
const ocu = document.getElementById("cadeiraocupada");
const vaz = document.getElementById("cadeiravazia");
const sel = document.getElementById("cadeiraselecionada");
const letra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const ocurdm = 0.4;

let destinox = -1;
let destinoy = -1;

let mouse = {
    xpos: innerWidth, 
    ypos: innerHeight
};

addEventListener("mousemove", function(event){
    mouse.xpos = event.clientX;
    mouse.ypos = event.clientY;
});

let compra = new Lista();
let preco = 12;

let fileiras = [];
let todascadeiras = [];
let nFileiras = 8;
let tamFileiras = 12;

let espacamento = (canvas.width - 100) / tamFileiras;
const raio = espacamento * 0.8;
const offset = raio * 0.17;

let dist = (canvas.height - 100) / nFileiras;

for(let i = 0; i < nFileiras; i++){
    let nova = new Fileira(letra[i], tamFileiras, dist + (i * dist));
    fileiras.push(nova);
}

function clock(){
    console.log('iae');
    for(let i = 0; i < todascadeiras.length; i++){
        if(Math.abs(todascadeiras[i].x - mouse.xpos) < raio / 2 && Math.abs(todascadeiras[i].y - mouse.ypos) < raio / 2){
            todascadeiras[i].clicada();
        }
    }
}

document.addEventListener("click", clock);

function animate(){
    requestAnimationFrame(animate)

    c.fillStyle = 'rgb(20, 20, 20)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < fileiras.length; i++){
        fileiras[i].draw();
    }
    
    
}
animate()