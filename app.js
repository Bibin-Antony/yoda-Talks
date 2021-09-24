var btnTranslate = document.getElementById("btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", clickEventHandler);

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("hey sorry we are expering some trouble! Dont worry we will fix it soon!")
};

function clickEventHandler(){
    var inputText = txtInput.value; //taking input

    fetch(getTranslationURL(inputText))
        .then(function gettingResponse(response){
            response.json();
        })
   
        .then(json => {
            var translatedText = json.contents.translated;
            outputBox.innerText = translatedText;
        })
        .catch(errorHandler)

};



