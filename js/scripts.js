var replaceVowel = function(str){
  //take word and replace vowel with '-'

if (/[aeiou]/.test(str)) {
  var puzzleText = str.replace(/[aeiou]/i, '-');
  return puzzleText;
}else{
  alert('error')
}
};
