var TextArea = document.querySelector("#text-area");
var Button = document.querySelector("#BtnTranslate");
var OutPut = document.querySelector("#outputArea");

var translationURL = "https://api.funtranslations.com/translate/valyrian.json";

function getUrl(text){
    return translationURL + "?text=" + text;
}

function errorHandler(error){
    alert("An error occured please try after some time");
}

function translationAfterClick(){
    fetch(getUrl(TextArea.value))
        .then(response => response.json())
        .then(json => OutPut.innerText = json.contents.translated)
        .catch(errorHandler)
}

Button.addEventListener("click",translationAfterClick);