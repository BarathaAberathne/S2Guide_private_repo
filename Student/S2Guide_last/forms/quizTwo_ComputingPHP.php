<html>
<head>
 <title>S2Guide - Degree Notices</title>
 <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">

 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
 <link rel="stylesheet" href="/assets/dcode.css">
 <link rel="stylesheet" href="quizOneStudentstyle.css">
 <link rel="short icon" href="/assets/favicon.ico">
 <meta name="viewport" content="width=device-width,initial-scale=1.0">
 <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
 

 <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

 <script src="https://kit.fontawesome.com/1a81673399.js"></script>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
 <script src="index.js"></script>

		<script>
var firebaseConfig = {
    apiKey: "AIzaSyDPkSmKr-2T6C0_1SFwjWeRFlCzzL5VXc0",
    authDomain: "s2guide.firebaseapp.com",
    databaseURL: "https://s2guide.firebaseio.com",
    projectId: "s2guide",
    storageBucket: "s2guide.appspot.com",
    messagingSenderId: "457852779269",
    appId: "1:457852779269:web:7e27f12f4d807544"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  </script>
  
</head>
<body>
<div class="mdl-layout mdl-js-layout">
 <header class="mdl-layout__header">
  <div class="mdl-layout-icon"></div>

  <h4 style="text-align: center">Quiz - Find My Degree</h4>

 </header>



<div class="slideshow-container">



<div class="mySlides" id="quiz">
  			

</div>

<a class="prev" id="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" id="next" onclick="plusSlides(1)">❯</a>

</div>
<div id="final_btn_div">
  <input type="button" id="btn_view_final" onclick="redirectToFinal();" value="View Results">
</div>


<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
	
        <script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
		<script src="js/quizTwo_Computing.js"></script>
</div>
</body>

</html>