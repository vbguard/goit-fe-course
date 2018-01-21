var imgObj = document.getElementById('imageHolder'); 

function nextImg() {
  // for(i=0;i<n;i++)
  // console.log(i);
  var imageNum = 
  console.log(imgObj);
  imgObj.setAttribute('src', 'img/image-2.jpg');
}

function prevImg() {
  console.log(imgObj);
  imgObj.setAttribute('src', 'img/image-1.jpg');
}
