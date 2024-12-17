function show(var1) {

	document.getElementById("homepage").style.display = "none"
	document.getElementById("div1").style.display = "none"
  document.getElementById("div2").style.display = "none"
  document.getElementById("div3").style.display = "none"
  document.getElementById("div4").style.display = "none"
  document.getElementById("div5").style.display = "none"

	document.getElementById(var1).style.display = "block"
	clearInterval(timeId);



	if (var1 === "homepage") {
  	starttime();
  }
}

document.getElementById("div1").style.display = "none"
document.getElementById("div2").style.display = "none"
document.getElementById("div3").style.display = "none"
document.getElementById("div4").style.display = "none"
document.getElementById("div5").style.display = "none"

let timeId;
let currentImageIndex = 0;

function performAction() {
	// Get all the images
  const images = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
  document.getElementById("image4"),
  document.getElementById("image5"),
  ];
  
  document.getElementById("image1").style.display = "none"
  document.getElementById("image2").style.display = "none"
  document.getElementById("image3").style.display = "none"
  document.getElementById("image4").style.display = "none"
  document.getElementById("image5").style.display = "none"

  images[currentImageIndex].style.display = "block";
  
  currentImageIndex = (currentImageIndex + 1) % images.length;}
  
function starttime() {
	clearInterval(timeId);
  timeId = setInterval(performAction, 3000);
}

starttime();
