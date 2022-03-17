
var canvas= new fabric.canvas("myCanvas");
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(IMG)
	{
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_x,
			left:hole_y
		});
		canvas.add(hole.obj);
	});

	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(IMG)
    {
        block_image_object= IMG;

        block_image_object.scaleToWidth(50);
        block_image_object.scaleToHeight(50);
        block_image_object.set({
     top:ball_y,
     left:ball_x
    });
    canvas.add(ball.obj);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
		canvas.remove(ball.obj);
		
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	

		function up() 
		{
			if(ball_y>=0) 
			{
		ball_y= ball_y-10;
		console.log("when up arrow is pressed,x="+ rover_x+"y="+rover_y);
		upload();
		uploadball();
		} 
		}
		
		function down()
		{
			if(ball_y<=500)
			{
				ball_y= ball_y+10;
				console.log("when down arrow is pressed,x="+ rover_x+"y="+rover_y);
		upload();
		uploadball();
		
			}
		}
		function left() 
		{
			if(rover_x>=0)
			{
				ball_x= ball_x-10;
				console.log("when left arrow is pressed,x="+ rover_x+"y="+rover_y);
		upload();
		uploadball();
			}
		}
		function right()
		{
			if(ball_x<=700)
			{
				ball_x= ball_x+10;
				console.log("when right arrow is pressed,x="+ rover_x+"y="+rover_y);
		upload();
		uploadball();
			}
		}
	}

	