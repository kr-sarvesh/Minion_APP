var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#click");
var outputDiv = document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

const getTranslationsURL = (input) =>

    serverurl+ "?"+"text="+input ;

var clickHandler =(event)=>{
   var inputText = textInput.value;
   fetch(getTranslationsURL(inputText))
   .then((response)=>{
      return response.json()
   })
   .then((data)=>{
         var translatedText = data.contents.translated;
         outputDiv.innerText =translatedText;
       })
      }
   

btnTranslate.addEventListener("click",clickHandler)