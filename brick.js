class Brick {
    generateBrick(){
        this.divBrick = document.createElement('div');
        this.divBrick.classList.add('brick');
        this.divBrick.classList.add('neon');
        console.log(this.divBrick)
        return this.divBrick
    }
}