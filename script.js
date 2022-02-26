let sliderElement = document.querySelector("#slider");

let borderSize = document.querySelector("#percent-value");

let objPreview = document.querySelector("#preview-object");
let cssButon = document.querySelector('#button-cta');
let cssCode = document.querySelector('#css-code');
let toolTip = document.querySelector('#tooltip');
let newCss = "";

borderSize.innerHTML = slider.value;

slider.oninput = function(){
    borderSize.innerHTML = this.value;
    objPreview.style.borderRadius= this.value + "%";
}


function getCss(){
    cssCode.classList.remove("hiden");
    cssCode.innerHTML = "border-radius: " + borderSize.innerHTML + "% ;";
    
    setTimeout(function(){
        toolTip.classList.remove('hide');
    }, 350);

    newCss = cssCode.innerHTML = "border-radius: " + borderSize.innerHTML + "% ;";

}

function copyCode(){
    alert("Copied!");
    navigator.clipboard.writeText(newCss);
}