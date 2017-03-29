var highlighter = document.getElementById("highlighter");
var currentIndex = -1;
var imagesArray = document.querySelectorAll("div img");
console.log(imagesArray);

// i++, ++i, --i, i--
for (var i = 0; i < imagesArray.length; ++i) {
  var image = imagesArray[i];
  image.addEventListener("mouseover", function(){
    // console.log(this);
    var rect = this.getBoundingClientRect();

    highlighter.style.opacity = 1;
    highlighter.style.width = rect.width+"px";
    highlighter.style.height = rect.height+"px";
    highlighter.style.top = rect.top+"px";
    highlighter.style.left = rect.left+"px";
  });
}
