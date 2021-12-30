var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

var image_object = "";

function new_image() {
     fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
     image_object = Img;

     image_object.scaleToWidth(600);
     image_object.scaleToHeight(1000);
     image_object.set({
         top:0,
         left:0
     });
     canvas.add(image_object); 
     });
	
}

function playSound() {
    x.play();
}
