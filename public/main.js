window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width ,
		height = canvas.height,

		/*width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		*/
		target = {
			x: width,
			y: Math.random() * height
		},

		position = {
			x: 0,
			y:  Math.random() * height
		},

		positionobj = {
			x: width-100,
			y: height - 100,
		},

		ease = 0.1,
		vol = height/2,
		vv = 2 ;

	update();
//	render();

	w = context.width,
    h = context.height;

var oiseaux = [],
    num = 4,
    a = 0,
    position,
    s = vol;


//

	document.body.addEventListener("click", function(event) {
	
			//position.x += 1;
		    //position.y = event.clientY;

		   // position.y = position.y+1;
          // position.y -= 60;
           vol -= 10 ;
           
            
		    vv += 2 ;
		
	});
/*
document.body.addEventListener("mousemove", function(event) {
		target.x = event.clientX;
		target.y = event.clientY;
	});
*/
	function update() {
		context.clearRect(0, 0, width, height);

	/*	context.beginPath();
		context.arc(position.x, position.y, 10, 0, Math.PI * 2, false);
		context.fill();
*/
		var twitterBird = new Image();
        twitterBird.src = "twitterBird.png";

    var tree = new Image();
    tree.src = "th.jpg";
    //twitterBird.onload = function () {
    context.drawImage(twitterBird, position.x, position.y, 50, 50);
     context.drawImage(tree, positionobj.x, positionobj.y, 80, 80);

           /*var dx = target.x - position.x,
			dy = target.y - position.y,
			vx = dx * ease,
			vy = dy * ease;
*/
          
			if(position.x>width)
			{
				position.x = 0 ;
				context.drawImage(twitterBird, position.x, position.y, 50, 50);
			}
			 

             //position.y +=2;

			 position.y = Math.random() * 3 + vol;


           // position.x += 1;
            
            /*
            for(var i = 0; i < numPoints; i++) {
            	context.drawImage(twitterBird, vv, 2*vv, 50, 50);
            }
            */

		/*var dx = target.x - position.x,
			dy = target.y - position.y,
			vx = dx * ease,
			vy = dy * ease;

		position.x += vx;
		position.y += vy;
		*/
		//tree
		
		if(positionobj.x== -100)
			{
				positionobj.x = width-20 ;
           context.drawImage(tree, positionobj.x, positionobj.y, 80, 80);
			}
			 positionobj.x -= 1;
			 
		requestAnimationFrame(update);
	}

/*

		document.body.addEventListener("mousemove", function(event) {
		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;
		angle = Math.atan2(dy, dx);
	});

		*/

};