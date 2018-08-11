class Cadeira{
    constructor(numero_, fileira_, posx, posy){
        this.tag = fileira_.letra + numero_;
        this.numero = numero_;
        this.fileira = fileira_;
        this.ocupada = 'vazia';
        this.raio = 30;
        this.x = 0;
        this.y = canv.height;
        this.lugarx = posx;
        this.lugary = posy;

    }

    update(){

        if(destinox < 0 && destinoy < 0 || destinox > canv.width || destinoy > canv.height){
            this.x -= (this.x - this.lugarx) * 0.05;
            this.y -= (this.y - this.lugary) * 0.05;

            if(Math.abs(this.x - this.lugarx) < 0.6){
                this.x = this.lugarx;
            }
            if(Math.abs(this.y - this.lugary) < 0.6){
                this.y = this.lugary;
            }
        }

        else{
            this.x -= (this.x - destinox) * 0.05;
            this.y -= (this.y - destinoy) * 0.05;

            if(Math.abs(this.x - destinox) < 0.6){
                this.x = destinox;
            }
            if(Math.abs(this.y - destinoy) < 0.6){
                this.y = destinoy;
            }
        }
    }

    clicada(){
        if(this.ocupada == 'selecionada'){
            this.ocupada = 'vazia';
            compra.remover(this);
        }
        else if(this.ocupada == 'vazia'){
            this.ocupada = 'selecionada';
            compra.adicionar(this);
        }
    }

    draw(){
        this.update();

        if(this.ocupada == 'ocupada'){
            c.drawImage(ocu, this.x - raio/2 - offset, this.y - raio/2, raio, raio);
        }
        else if(this.ocupada == 'vazia'){
            c.drawImage(vaz, this.x - raio/2 - offset, this.y - raio/2, raio, raio);
        }
        else if(this.ocupada == 'selecionada'){
            c.drawImage(sel, this.x - raio/2 - offset, this.y - raio/2, raio, raio);
        }

        c.textAlign = "center";
        c.font = "15px Sans seriff MS";
        c.fillStyle = "black";
        c.fillText(this.fileira.letra + this.numero, this.x - offset, this.y);
           
    }
}