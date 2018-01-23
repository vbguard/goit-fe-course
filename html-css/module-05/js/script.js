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
