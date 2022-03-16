document.getElementById("productImage2").addEventListener("click", function(){
    var selected = this.src;
    var primary = document.getElementById("productImagePrimary").src;
    document.getElementById("productImagePrimary").src=selected;
    document.getElementById("productImage2").src=primary;
});

document.getElementById("productImage3").addEventListener("click", function(){
    var selected = this.src;
    var primary = document.getElementById("productImagePrimary").src;
    document.getElementById("productImagePrimary").src=selected;
    document.getElementById("productImage3").src=primary;
});

document.getElementById("productImage4").addEventListener("click", function(){
    var selected = this.src;
    var primary = document.getElementById("productImagePrimary").src;
    document.getElementById("productImagePrimary").src=selected;
    document.getElementById("productImage4").src=primary;
});