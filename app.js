var inputText= document.querySelector("#textarea")
var btnTranslate= document.querySelector("#btn-translate")
var outputText= document.querySelector("#output-div")


var url= "https://api.funtranslations.com/translate/shakespeare.json"


function urlMaker (input){
    return url + "?"+"text="+ input;
}


function errorHandler(error){
    console.log("error: ",error)
    alert("The server is not responding. Please try again after some time.")
}


function clickHandler(){
    var inputTxt= inputText.value;

    fetch(urlMaker(inputTxt))
    .then( response => response.json())
    .then( json => {
        var translation= json.contents.translated;
        outputText.innerText= translation;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)