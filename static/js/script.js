colorsLst = ['#F5A999', '#EDBBA2', '#D3D4C4', '#B3CBBD', '#B9C1B2', '#83AF9B']

var randColor = Math.random();
randColor *= colorsLst.length; 
randColor = Math.floor(randColor);
console.log(randColor)

var c=document.getElementById("pattern-table");
var ctx=c.getContext("2d");
ctx.rect(0,0,500,500);
ctx.fillStyle=colorsLst[randColor];
ctx.fill();

var image1 = function(srcforimage1){
	var canvas = document.getElementById('pattern-table'),
	context = canvas.getContext('2d');

	var j = Math.floor(Math.random() * 100);

	var height = Math.floor(Math.random() * 500);
	if (height > 249){
		height = 249
	};
	var width = height

	var x = Math.floor(Math.random() * 500);
	var i = Math.random() * j;
	var y = x - i

	var a = Math.floor(Math.random() * 500);
	var b = Math.random() * j;
	var c = a - b

	var startx = y
	var starty = c
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


	make_base();
	make_base2();
	make_base3();
	make_base4();

	function make_base()
	{
		base_image = new Image();
		base_image.src = srcforimage1;
		base_image.onload = function(){
			context.drawImage(base_image, startx, starty, height, width);
		}
	};

	function make_base2()
	{
		base_image2 = new Image();
		base_image2.src = srcforimage1;
		base_image2.onload = function(){
			context.drawImage(base_image2, endx, endy, height, width);
		}
	};

	function make_base3()
	{
		base_image3 = new Image();
		base_image3.src = srcforimage1;
		base_image3.onload = function(){
			context.drawImage(base_image3, startx, endy, height, width);
		}
	};

	function make_base4()
	{
		base_image4 = new Image();
		base_image4.src = srcforimage1;
		base_image4.onload = function(){
			context.drawImage(base_image4, endx, starty, height, width);
		}
	};
}

var image2 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context2 = canvas.getContext('2d');

	var j = Math.floor(Math.random() * 100);

	var height = Math.floor(Math.random() * 500);
	if (height > 249){
		height = 249
	};
	var width = height

	var x = Math.floor(Math.random() * 500);
	var i = Math.random() * j;
	var y = x - i

	var a = Math.floor(Math.random() * 500);
	var b = Math.random() * j;
	var c = a - b

	var startx = y
	var starty = c
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

	make_base5();
	make_base6();
	make_base7();
	make_base8();

	function make_base5()
	{
		base_image5 = new Image();
		base_image5.src = srcforimage;
		base_image5.onload = function(){
			context2.drawImage(base_image5, startx, starty, height, width);
		}
	}

	function make_base6()
	{
		base_image6 = new Image();
		base_image6.src = srcforimage;
		base_image6.onload = function(){
			context2.drawImage(base_image6, endx, endy, height, width);
		}
	}

	function make_base7()
	{
		base_image7 = new Image();
		base_image7.src = srcforimage;
		base_image7.onload = function(){
			context2.drawImage(base_image7, startx, endy, height, width);
		}
	}

	function make_base8()
	{
		base_image8 = new Image();
		base_image8.src = srcforimage;
		base_image8.onload = function(){
			context2.drawImage(base_image8, endx, starty, height, width);
		}
	}
};

var image3 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context3 = canvas.getContext('2d');

	
	var j = Math.floor(Math.random() * 100);

	var height = Math.floor(Math.random() * 500);
	if (height > 249){
		height = 249
	};
	var width = height

	var x = Math.floor(Math.random() * 500);
	var i = Math.random() * j;
	var y = x - i

	var a = Math.floor(Math.random() * 500);
	var b = Math.random() * j;
	var c = a - b

	var startx = y
	var starty = c
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

	make_base9();
	make_base10();
	make_base11();
	make_base12();

	function make_base9()
	{
		base_image9 = new Image();
		base_image9.src = srcforimage;
		base_image9.onload = function(){
			context3.drawImage(base_image9, startx, starty, height, width);
		}
	}

	function make_base10()
	{
		base_image10 = new Image();
		base_image10.src = srcforimage;
		base_image10.onload = function(){
			context3.drawImage(base_image10, endx, endy, height, width);
		}
	}

	function make_base11()
	{
		base_image11 = new Image();
		base_image11.src = srcforimage;
		base_image11.onload = function(){
			context3.drawImage(base_image11, startx, endy, height, width);
		}
	}

	function make_base12()
	{
		base_image12 = new Image();
		base_image12.src = srcforimage;
		base_image12.onload = function(){
			context3.drawImage(base_image12, endx, starty, height, width);
		}
	}
};

var image4 = function(srcforimage){
	var canvas = document.getElementById('pattern-table'),
	context4 = canvas.getContext('2d');

	
	var j = Math.floor(Math.random() * 100);

	var height = Math.floor(Math.random() * 500);
	if (height > 249){
		height = 249
	};
	var width = height

	var x = Math.floor(Math.random() * 500);
	var i = Math.random() * j;
	var y = x - i

	var a = Math.floor(Math.random() * 500);
	var b = Math.random() * j;
	var c = a - b

	var startx = y
	var starty = c
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

	make_base13();
	make_base14();
	make_base15();
	make_base16();

	function make_base13()
	{
		base_image13 = new Image();
		base_image13.src = srcforimage;
		base_image13.onload = function(){
			context4.drawImage(base_image13, startx, starty, height, width);
		}
	}

	function make_base14()
	{
		base_image14 = new Image();
		base_image14.src = srcforimage;
		base_image14.onload = function(){
			context4.drawImage(base_image14, endx, endy, height, width);
		}
	}

	function make_base15()
	{
		base_image15 = new Image();
		base_image15.src = srcforimage;
		base_image15.onload = function(){
			context4.drawImage(base_image15, startx, endy, height, width);
		}
	}

	function make_base16()
	{
		base_image16 = new Image();
		base_image16.src = srcforimage;
		base_image16.onload = function(){
			context4.drawImage(base_image16, endx, starty, height, width);
		}
	}
}


var imageList = ['http://orig11.deviantart.net/3494/f/2012/199/4/1/gem_png_by_doloresdevelde-d57p0sp.png',
				'http://orig08.deviantart.net/3ecb/f/2012/199/0/8/gem_png_by_doloresdevelde-d57oyqr.png',
				'http://orig14.deviantart.net/0823/f/2012/199/5/f/gem_png_by_doloresdevelde-d57oz0e.png',
				'http://orig03.deviantart.net/692b/f/2012/199/9/7/gem_png_by_doloresdevelde-d57p04g.png',
				'http://orig01.deviantart.net/4dd5/f/2012/286/e/1/citrine_oval_gem_by_artg33k74-d5hov1e.png'

]

var flowerList = [	'http://www.clipartqueen.com/image-files/red-flower-yellow.png', 
					'http://detoxretox.org/testimonials/files/small_5858.png', 
					'http://www.lovingyourcurves.co.uk/wp-content/uploads/2013/04/flower.png', 
					'http://static1.squarespace.com/static/5166ce33e4b07ccd0c1e5213/51aa598ce4b0c88fb2009233/51aa59d2e4b02f35a70f00cb/1370118610947/Carnation.png', 
					'http://data.whicdn.com/images/59850935/large.png']

var rand1 = Math.random();
rand1 *= imageList.length; 
rand1 = Math.floor(rand1);

var rand2 = Math.random();
rand2 *= imageList.length; 
rand2 = Math.floor(rand2);

var rand3 = Math.random();
rand3 *= imageList.length; 
rand3 = Math.floor(rand3);

var rand4 = Math.random();
rand4 *= imageList.length; 
rand4 = Math.floor(rand4);


// image4(imageList1[rand1])


image1(imageList[rand1]);
image2(imageList[rand2]);
image3(imageList[rand3]);
image4(imageList[rand4]);


