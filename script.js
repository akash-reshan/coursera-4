(function (){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {
      var l = names[name].charAt(0);
      var firstLetter = l.toLowerCase();
  if (firstLetter == 'j') {
      byeSpeaker.speak(names[name])
  } else {
      helloSpeaker.speak(names[name])
  }
}
})();
