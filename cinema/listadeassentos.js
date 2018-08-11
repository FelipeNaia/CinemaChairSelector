function checaRepet(array, obj){
    for(let i = 0; i < array.length; i++){
        if(obj == array[i]){
            return true;
        }
    }
    return false;
}

class Lista{
    constructor(){
        this.assentos = [];
        this.preco = 0;
    }

    adicionar(assento){
        if(checaRepet(this.assentos, assento)){
            console.log('Erro de sincronia(?)');
        }
        else{
            this.assentos.push(assento);
        }
    }

    remover(assento){
        for(let i = 0; i < this.assentos.length; i++){
            if(this.assentos[i] == assento){
                this.assentos.splice(i, 1);
            }
        }
    }

    draw(){
        let str = 'Preço: R$';
        let ass = '';
        this.preco = 0;
        for(let i = 0; i < this.assentos.length; i++){
            this.preco += valorIngresso;
            ass += this.assentos[i].tag + ', ';
        }

        str += this.preco+ ' Reais, Assentos: ' + ass;

        c.textAlign = "left";
        c.font = "30px Sans seriff MS";
        c.fillStyle = "Blue";
        c.fillText(str,30, canvas.height - 40);
    }
}