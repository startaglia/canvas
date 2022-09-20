
class Canvas{
    containerWidth = 625;
    canvasContainer;
    arrY = [];
    arrX = [];
    coordinates = {
        x0:0,
        y0:0
    }
    brickPrevius;
    brickSelected;
    newx0;
    newy0;
    constructor(){
        this.canvasContainer = document.createElement('div');
        this.canvasContainer.classList.add("canvas-container")
        this.canvasSize = Math.sqrt(this.containerWidth);
        this.brickForSide = Math.sqrt(this.canvasSize);
        this.arrCordinate = this.generateCanvas();
        this.brickStart = this.arrCordinate[0][0];
        this.brickStart.appendChild(this.putCircle());  
    }
    appendOnRoot(){
        Dom.getRoot().appendChild(this.canvasContainer);
    }
    generateCanvas(){
        for(let i = 0; i<this.brickForSide; i++){
            for(let j = 0; j<this.brickForSide; j++){
                let newBrick = new Brick;
                this.arrX.push(newBrick.generateBrick());
                this.canvasContainer.appendChild(this.arrX[j]);
            }
            this.arrY.push(this.arrX)
            this.arrX = [];
        }
        console.log(this.coordinates)
        return this.arrY;
    }
    putCircle(){
        let circle = Circle.generateCircle();
        return circle
    }
    findCircle(){
        for(let j =0; j< this.arrCordinate.length; j++){
            for(let i =0; i<this.arrCordinate.length; i++){
                if(this.arrCordinate[j][i].hasChildNodes()){
                    this.newCoordinates ={
                        newx0: i,
                        newy0: j,
                    }
                }
            }
        }
        return this.newCoordinates
    }
    moveToRight(){
        if (this.brickStart.hasChildNodes()) {
            this.coordinates = {
                x0:1,
                y0:0
            }
            this.brickStart.removeChild(this.brickStart.firstElementChild);
            this.brickSelected = this.arrCordinate[this.coordinates.y0][this.coordinates.x0];
            console.log(this.coordinates)
            this.brickSelected.appendChild(this.putCircle())
        } else{
            let newCoordinate = this.findCircle();
            newCoordinate.newx0 = this.findCircle().newx0 +1;
            if(newCoordinate.newx0 === 5){
                return
            }
            this.brickSelected = newCoordinate
            console.log(this.brickSelected)
            let newBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0]
            let oldBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0 -1]
            newBrick.appendChild(this.putCircle())
            oldBrick.removeChild(oldBrick.firstElementChild);
        }       
    }
    moveToDown(){
        if (this.brickStart.hasChildNodes()) {
            
            this.coordinates = {
                x0:0,
                y0:1
            }
            console.log(this.coordinates)
            this.brickStart.removeChild(this.brickStart.firstElementChild);
            let brickSelected = this.arrCordinate[this.coordinates.y0][this.coordinates.x0];
            brickSelected.appendChild(this.putCircle())
        } else{
            let newCoordinate = this.findCircle();
            newCoordinate.newy0 = this.findCircle().newy0 +1;
            if(newCoordinate.newy0 === 5){
                return
            }
            this.brickSelected = newCoordinate
            console.log(this.brickSelected)
            let newBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0]
            let oldBrick = this.arrCordinate[this.brickSelected.newy0 - 1][this.brickSelected.newx0]
            newBrick.appendChild(this.putCircle())
            oldBrick.removeChild(oldBrick.firstElementChild);
        } 
    }
    moveToLeft(){
            let newCoordinate = this.findCircle();
            newCoordinate.newx0 = this.findCircle().newx0 -1;
            if(newCoordinate.newx0 === -1){
                return
            }
            this.brickSelected = newCoordinate
            console.log(this.brickSelected)
            let newBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0]
            let oldBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0 +1]
            newBrick.appendChild(this.putCircle())
            oldBrick.removeChild(oldBrick.firstElementChild);
    }
    moveToUp(){
            let newCoordinate = this.findCircle();
            newCoordinate.newy0 = this.findCircle().newy0 -1;
            if(newCoordinate.newy0 === -1){
                return
            }
            this.brickSelected = newCoordinate
            console.log(this.brickSelected)
            let newBrick = this.arrCordinate[this.brickSelected.newy0][this.brickSelected.newx0]
            let oldBrick = this.arrCordinate[this.brickSelected.newy0 + 1][this.brickSelected.newx0]
            newBrick.appendChild(this.putCircle())
            oldBrick.removeChild(oldBrick.firstElementChild);
    }
}


