
let canva1 = new Canvas;
canva1.appendOnRoot();

document.onkeydown = (e)=>{
           
    if (e.keyCode== '38') {
        canva1.moveToUp()
    }
    else if (e.keyCode == '40') {
        canva1.moveToDown()
    }
    else if (e.keyCode == '37') {
        canva1.moveToLeft()
    }
    else if (e.keyCode == '39') {
        canva1.moveToRight()
    }
}










