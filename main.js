var canvas = new fabric.Canvas("c");

var data = {
    player:{
        x: 20,
        y: 20,
        s: 100,
        img: ""
    },
    block:{
        s: 30,
        img: "",
        types:[
            {
                
            }
        ]
    }
};

var playerDraw = function(){
    fabric.Image.fromURL("player.png", function(Img){
        data.player.img = Img;
        data.player.img.scaleToWidth(data.player.s);
        data.player.img.scaleToHeight(data.player.s);
        data.player.img.set({
            top: data.player.y,
            left: data.player.x
        });
        canvas.add(data.player.img);
    });
}

var blockDraw= function(Img){
    fabric.Image.fromURL(Img, function(Img){
        data.block.img = Img;
        data.block.img.scaleToWidth(data.block.s);
        data.block.img.scaleToHeight(data.block.s);
        data.block.img.set({
            top: data.player.y,
            left: data.player.x
        });
        canvas.add(data.block.img);
    });
}

var left = function(){
    if(data.player.x > 4){
        data.player.x -= data.block.s;
        canvas.remove(data.player.img);
        playerDraw();
    }
}, up = function(){
    if(data.player.y > 4){
        data.player.y -= data.block.s;
        canvas.remove(data.player.img);
        playerDraw();
    }
}, right = function(){
    if(data.player.x + data.player.s + data.block.s < canvas.width){
        data.player.x += data.block.s;
        canvas.remove(data.player.img);
        playerDraw();
    }
}, down = function(){
    if(data.player.y + data.player.s + data.block.s < canvas.height){
        data.player.y += data.block.s;
        canvas.remove(data.player.img);
        playerDraw();
    }
}

var my_keydown = function(e){
    var k = e.keyCode;
    var s = e.shiftKey;
    console.log(k);

    if(s){
        if(k === 80){
            data.block.s += 5;
            document.getElementById("size").innerHTML = data.block.s;
        }else if(k === 77){
            data.block.s -= 5;
            document.getElementById("size").innerHTML = data.block.s;
        }
    }else{
        switch(k){
            case 84:
                blockDraw("trunk.jpg");
                break;
            case 68:
                blockDraw("dark_green.png");
                break;
            case 72:
                blockDraw("ground.png");
                break;
            case 71:
                blockDraw("light_green.png");
                break;
            case 82:
                blockDraw("roof.jpg");
                break;
            case 80:
                blockDraw("sponge.png");
                break;
            case 83:
                blockDraw("stone.jpg");
                break;
            case 87:
                blockDraw("wall.jpg");
                break;
            case 89:
                blockDraw("yellow_wall.png");
                break;
            case 37:
                left();
                break;
            case 38:
                up();
                break;
            case 39:
                right();
                break;
            case 40:
                down();
                break;
        }
    }
}




window.addEventListener("keydown", my_keydown);

playerDraw()