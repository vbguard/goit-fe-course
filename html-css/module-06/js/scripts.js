//
//
// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var imgObj = document.getElementById('imageHolder');

function nextImg() {
  // Беремо дані з атрибута src зображення
  var imgsrc = document.getElementById('imageHolder').src;
  // беремо з посилання номер картинки
  var counter = parseInt(document.getElementById('imageHolder').src);
  console.log(imgsrc);
  // робимо перевірку на зміну зображення
  if (counter < 4 ) {
    console.log(counter);
    counter++;
   }
   else { counter = 1;}
  console.log(counter);
  console.log(imgObj);

  // виводимо зображення
  imgObj.setAttribute('src', 'img/image-'+counter+'.jpg');
  // return();
}

function prevImg() {
  var counter = 4;
  counter--;
  console.log(imgObj);
  imgObj.setAttribute('src', 'img/image-'+counter+'.jpg');
}

// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
