var generateRandomAxis = function() {
	var j = Math.floor(Math.random() * 100);
	var x = Math.floor(Math.random() * 500);
	var i = Math.random() * j;
	var y = x - i
	return y
}

var generateSource = function(lst) {
	var rand = Math.random();
	rand *= lst.length; 
	rand = Math.floor(rand);
	return lst[rand]

}

var pickRandomRotation = function() {
	rand = Math.floor(Math.random() * 180) + 1
	console.log("RAND ROTATION", rand) 
}

pickRandomRotation()


var generate_background_color = function() {
	colorsLst = ['#F5A999', '#EDBBA2', '#D3D4C4', '#B3CBBD', '#B9C1B2', '#83AF9B']

	var c=document.getElementById("pattern-table");
	var ctx=c.getContext("2d");
	ctx.rect(0,0,500,500);
	ctx.fillStyle=generateSource(colorsLst);
	ctx.fill();
}


var image1 = function(srcforimage1){
	var canvas = document.getElementById('pattern-table');
	context = canvas.getContext('2d');

	// Calculate how big image will be
	var height = Math.floor(Math.random() * 500);

	// if image is bigger than apporx half of the canvas there are some issues with it translating on canvas. 
	// Quick fix, if image is bigger than half of canvas size, make heigh one pixel less than half of canvas size 
	if (height > 249){
		height = 249
	};

	var width = height

	// generate starting points for image on canvas
	var startx = generateRandomAxis()
	var starty = generateRandomAxis()

	if (startx >= 250){
		var endx = startx - 500
	}else{
		var endx = startx + 500
	}

	if (starty >= 250){
		var endy = starty - 500
	}else{
		var endys = starty + 500
	}

	//Call functions that draft each image onto the canvas
	makeBase();
	makeBase2();
	makeBase3();
	makeBase4();

	function makeBase()
	{
		baseImage = new Image();
		baseImage.src = srcforimage1;
		baseImage.onload = function(){
			context.drawImage(baseImage, startx, starty, height, width);
		}
	};

	function makeBase2()
	{
		baseImage2 = new Image();
		baseImage2.src = srcforimage1;
		baseImage2.onload = function(){
			context.drawImage(baseImage2, endx, endy, height, width);
		}
	};

	function makeBase3()
	{
		baseImage3 = new Image();
		baseImage3.src = srcforimage1;
		baseImage3.onload = function(){
			context.drawImage(baseImage3, startx, endy, height, width);
		}
	};

	function makeBase4()
	{
		baseImage4 = new Image();
		baseImage4.src = srcforimage1;
		baseImage4.onload = function(){
			context.drawImage(baseImage4, endx, starty, height, width);
		}
	};
}

var image2 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context2 = canvas.getContext('2d');
	
	// Calculate how big image will be
	var height = Math.floor(Math.random() * 500);

	// if image is bigger than apporx half of the canvas there are some issues with it translating on canvas. 
	// Quick fix, if image is bigger than half of canvas size, make heigh one pixel less than half of canvas size 
	if (height > 249){
		height = 249
	};

	var width = height

	// generate starting points for image on canvas
	var startx = generateRandomAxis()
	var starty = generateRandomAxis()

	if (startx >= 250){
		var endx = startx - 500
	}else{
		var endx = startx + 500
	}

	if (starty >= 250){
		var endy = starty - 500
	}else{
		var endys = starty + 500
	}

	//Call functions that draft each image onto the canvas
	makeBase5();
	makeBase6();
	makeBase7();
	makeBase8();

	function makeBase5()
	{
		baseImage5 = new Image();
		baseImage5.src = srcforimage;
		baseImage5.onload = function(){
			context2.drawImage(baseImage5, startx, starty, height, width);
		}
	}

	function makeBase6()
	{
		baseImage6 = new Image();
		baseImage6.src = srcforimage;
		baseImage6.onload = function(){
			context2.drawImage(baseImage6, endx, endy, height, width);
		}
	}

	function makeBase7()
	{
		baseImage7 = new Image();
		baseImage7.src = srcforimage;
		baseImage7.onload = function(){
			context2.drawImage(baseImage7, startx, endy, height, width);
		}
	}

	function makeBase8()
	{
		baseImage8 = new Image();
		baseImage8.src = srcforimage;
		baseImage8.onload = function(){
			context2.drawImage(baseImage8, endx, starty, height, width);
		}
	}
};

var image3 = function(srcforimage){
	// Create context for canvas
	var canvas = document.getElementById('pattern-table'),
	context3 = canvas.getContext('2d');


	// Calculate how big image will be
	var height = Math.floor(Math.random() * 500);

	// if image is bigger than apporx half of the canvas there are some issues with it translating on canvas. 
	// Quick fix, if image is bigger than half of canvas size, make heigh one pixel less than half of canvas size 
	if (height > 249){
		height = 249
	};

	var width = height

	// generate starting points for image on canvas
	var startx = generateRandomAxis()
	var starty = generateRandomAxis()

	if (startx >= 250){
		var endx = startx - 500
	}else{
		var endx = startx + 500
	}

	if (starty >= 250){
		var endy = starty - 500
	}else{
		var endys = starty + 500
	}

	//Call functions that draft each image onto the canvas
	makeBase9();
	makeBase10();
	makeBase11();
	makeBase12();

	function makeBase9()
	{
		baseImage9 = new Image();
		baseImage9.src = srcforimage;
		baseImage9.onload = function(){
			context3.drawImage(baseImage9, startx, starty, height, width);
		}
	}

	function makeBase10()
	{
		baseImage10 = new Image();
		baseImage10.src = srcforimage;
		baseImage10.onload = function(){
			context3.drawImage(baseImage10, endx, endy, height, width);
		}
	}

	function makeBase11()
	{
		baseImage11 = new Image();
		baseImage11.src = srcforimage;
		baseImage11.onload = function(){
			context3.drawImage(baseImage11, startx, endy, height, width);
		}
	}

	function makeBase12()
	{
		baseImage12 = new Image();
		baseImage12.src = srcforimage;
		baseImage12.onload = function(){
			context3.drawImage(baseImage12, endx, starty, height, width);
		}
	}
};

var image4 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context4 = canvas.getContext('2d');
	// Calculate how big image will be
	var height = Math.floor(Math.random() * 500);
	// if image is bigger than apporx half of the canvas there are some issues with it translating on canvas. 
	// Quick fix, if image is bigger than half of canvas size, make heigh one pixel less than half of canvas size
	if (height > 249){
		height = 249
	};

	var width = height

	// generate starting points for image on canvas
	var startx = generateRandomAxis()
	var starty = generateRandomAxis()

	if (startx >= 250){
		var endx = startx - 500
	}else{
		var endx = startx + 500
	}

	if (starty >= 250){
		var endy = starty - 500
	}else{
		var endys = starty + 500
	}

	//Call functions that draft each image onto the canvas
	makeBase13();
	makeBase14();
	makeBase15();
	makeBase16();

	function makeBase13()
	{
		baseImage13 = new Image();
		baseImage13.src = srcforimage;
		baseImage13.onload = function(){
			context4.drawImage(baseImage13, startx, starty, height, width);
		}
	}

	function makeBase14()
	{
		baseImage14 = new Image();
		baseImage14.src = srcforimage;
		baseImage14.onload = function(){
			context4.drawImage(baseImage14, endx, endy, height, width);
		}
	}

	function makeBase15()
	{
		baseImage15 = new Image();
		baseImage15.src = srcforimage;
		baseImage15.onload = function(){
			context4.drawImage(baseImage15, startx, endy, height, width);
		}
	}

	function makeBase16()
	{
		baseImage16 = new Image();
		baseImage16.src = srcforimage;
		baseImage16.onload = function(){
			context4.drawImage(baseImage16, endx, starty, height, width);
		}
	}
}

var image5 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context5 = canvas.getContext('2d');
	// Calculate how big image will be
	var height = Math.floor(Math.random() * 500);
	// if image is bigger than apporx half of the canvas there are some issues with it translating on canvas. 
	// Quick fix, if image is bigger than half of canvas size, make heigh one pixel less than half of canvas size
	if (height > 249){
		height = 249
	};

	var width = height

	// generate starting points for image on canvas
	var startx = generateRandomAxis()
	var starty = generateRandomAxis()

	if (startx >= 250){
		var endx = startx - 500
	}else{
		var endx = startx + 500
	}

	if (starty >= 250){
		var endy = starty - 500
	}else{
		var endys = starty + 500
	}

	//Call functions that draft each image onto the canvas
	makeBase17();
	makeBase18();
	makeBase19();
	makeBase20();

	function makeBase17()
	{
		baseImage17 = new Image();
		baseImage17.src = srcforimage;
		baseImage17.onload = function(){
			context5.drawImage(baseImage17, startx, starty, height, width);
		}
	}

	function makeBase18()
	{
		baseImage18 = new Image();
		baseImage18.src = srcforimage;
		baseImage18.onload = function(){
			context5.drawImage(baseImage18, endx, endy, height, width);
		}
	}

	function makeBase19()
	{
		baseImage19 = new Image();
		baseImage19.src = srcforimage;
		baseImage19.onload = function(){
			context5.drawImage(baseImage19, startx, endy, height, width);
		}
	}

	function makeBase20()
	{
		baseImage20 = new Image();
		baseImage20.src = srcforimage;
		baseImage20.onload = function(){
			context5.drawImage(baseImage20, endx, starty, height, width);
		}
	}
}

var imageList = ['static/img/spoongraphic-watercolor/1.png', 
					'static/img/spoongraphic-watercolor/2.png',
					'static/img/spoongraphic-watercolor/3.png',
					'static/img/spoongraphic-watercolor/4.png',
					'static/img/spoongraphic-watercolor/5.png',
					'static/img/spoongraphic-watercolor/6.png',
					'static/img/spoongraphic-watercolor/7.png',
					'static/img/spoongraphic-watercolor/8.png'


]

var gemList = ['http://orig11.deviantart.net/3494/f/2012/199/4/1/gem_png_by_doloresdevelde-d57p0sp.png',
				'http://orig08.deviantart.net/3ecb/f/2012/199/0/8/gem_png_by_doloresdevelde-d57oyqr.png',
				'http://orig14.deviantart.net/0823/f/2012/199/5/f/gem_png_by_doloresdevelde-d57oz0e.png',
				'http://orig03.deviantart.net/692b/f/2012/199/9/7/gem_png_by_doloresdevelde-d57p04g.png',
				'http://orig01.deviantart.net/4dd5/f/2012/286/e/1/citrine_oval_gem_by_artg33k74-d5hov1e.png']

var flowerList = [	'http://www.clipartqueen.com/image-files/red-flower-yellow.png', 
					'http://detoxretox.org/testimonials/files/small_5858.png', 
					'http://www.lovingyourcurves.co.uk/wp-content/uploads/2013/04/flower.png', 
					'http://static1.squarespace.com/static/5166ce33e4b07ccd0c1e5213/51aa598ce4b0c88fb2009233/51aa59d2e4b02f35a70f00cb/1370118610947/Carnation.png', 
					'http://data.whicdn.com/images/59850935/large.png']


// generate_background_color();
image1(generateSource(imageList));
image2(generateSource(imageList));
image3(generateSource(imageList));
image4(generateSource(imageList));
image5(generateSource(imageList));


