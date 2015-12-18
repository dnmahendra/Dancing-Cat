


var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var img1 = document.getElementById('walking-cat');
var img2 = document.getElementById('dancing-cat');
var moveFlag = 1;


function catWalk() {

  var currentLeft = parseInt(img1.style.left);

  	  if(currentLeft > (window.innerWidth-img1.width)) {
  	  	img1.style.transform = "rotatey(180deg)";
  	  	moveFlag = 0;
  	  }
  	  if(currentLeft <= 0) {
  	  	img1.style.transform = "rotatey(0deg)";
  	  	moveFlag = 1;
  	  }
  	  if(currentLeft > ((window.innerWidth-img1.width)/2) && currentLeft < (((window.innerWidth-img1.width)/2)+movePixels)) {
  	  	img1.style.visibility = 'hidden';
  	  	img2.style.visibility = 'visible';
  	  	img2.style.left = currentLeft + 'px';
  	  	stopCatWalk();
  	  	window.setTimeout(hideCat, 2000);
  	  	
  	  }

  	 if(moveFlag) {
  	  	img1.style.left = (currentLeft + movePixels) + 'px';
  	}
  	 else {
  		  img1.style.left = (currentLeft - movePixels) + 'px';
  	}
  }
  
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
	clearInterval(catTimer);
}

function speedCatWalk() {
	movePixels= movePixels + 10;
	clearInterval(catTimer);
	startCatWalk();

}

function hideCat() {
	img2.style.visibility = 'hidden';
	img1.style.visibility = 'visible';
	startCatWalk();
}

