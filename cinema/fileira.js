class Fileira{
    constructor(letra_, tamanho_, posy_){
        this.posy = posy_;
        this.letra = letra_;
        this.cadeiras = [];
        let x = espacamento;
        for(let i = 0; i < tamanho_; i++){
            let novac = new Cadeira(i + 1, this, espacamento + (espacamento * i), this.posy );

            if(Math.random() < ocurdm){
                novac.ocupada = 'ocupada';
            }

            this.cadeiras.push(novac);
            todascadeiras.push(novac); 
        }

    }

    draw(){
        for(let i = 0; i < this.cadeiras.length; i++){
            this.cadeiras[i].draw();

        }
    }
}