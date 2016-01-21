var replaceVowel = function(str){
var vowel = /[aeiou]/gi;
var puzzleText = "";
//var arraySTR = ""
  //take word and replace vowel with '-'

  if (vowel.test(str)) {
    for(var i = 0; i< str.length; i++){
     puzzleText = str.replace(vowel, '-');
    }
  }
  return puzzleText;
//     }else{
//     alert('error')
};
//   var vowel = /[aeiou]/i
//     for each(vowel){
//   str.replace(vowel, '-');
// }
//
//
// };

$(document).ready(function(){
  $("#phraseInput").submit(function(event) {
    var phrase = $("input#inputBox").val();
    var result = replaceVowel(phrase);
    $("#phraseInput").hide();
     $("#puzzlePhrase").text(result);
      event.preventDefault();
      // take phrase, front end,show it in html
  });
});
