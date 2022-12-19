function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    let h = 360;
    let s = 60;
    let l = 45;

    let position = 0;
    let width = 450;
    let height = 350;

     

    for (i = 0; i < 17; i++) {

        context.fillStyle = `hsl(${h},${s}%,${l}%)`

        context.fillRect(position,position,width,height);

        position += 10;
        width -=20;
        height -= 20;
        h -= 360 / 17
    }

}

window.addEventListener("load", pageLoaded);