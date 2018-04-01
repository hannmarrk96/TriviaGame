// $(document).ready();
// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// Questions and Images that the user will guess.
var imageDir = "assets/images/";

var characters = [
chernabog = {
  question: 'This character terrorized a village in the movie Fantasia',
  image:'chernabog.jpg',
  button1: "Orias",
  button2: "Gremory",
  button3: "Abraxas",
  button4: "Chernabog",
  answer: "Chernabog"
}, 
cruellaDeVil = {
  question: "If she doesn't scare you, no evil thing will...",
  image:'cruellaDeVil.jpg',
  button1: "Cruella De Vil",
  button2: "Anastasia",
  button3: "Gloria Estefan",
  button4: "Felicity Jones",
  answer: "Cruella De Vil"
}, 
doctorFacilier = {
  question: "This guy has got friends on the other side..",
  image: 'doctorFacilier.jpg',
  button1: "Dr. Who",
  button2: "Dr. Oz",
  button3: "Dr. Facilier",
  button4: "Dr. Nefario",
  answer: "Dr. Facilier"
},
ladyTremaine = {
  question: "An evil stepmother, amongst many other evil stepmothers",
  image: 'ladyTremaine.jpg',
  button1: "Lady Gaga",
  button2: "Lady Tremaine",
  button3: "Lady Marmalade",
  button4: "Lady Sansa",
  answer: "Lady Tremaine"
},
lotsOHugginBear = {
  question: "Not the kind of teddy bear you want hanging around",
  image: 'lotsOHugginBear.png',
  button1: "Lots O' Huggin' Bear",
  button2: 'Duffy',
  button3: 'Mr. Belvedere',
  button4: 'Ted',
  answer: "Lots O' Huggin' Bear"
}, 
maleficent = {
  question: 'Angelina Jolie played her in this movie by the same name',
  image: 'maleficent.jpg',
  button1: 'Matilda',
  button2: 'Janice Joplin',
  button3: 'Brumhilda',
  button4: 'Maleficent',
  answer: 'Maleficent'
},
motherGothel = {
  question: "Rapunzel's lovely stepmother, and like other stepmothers, she's just swell ",
  image: 'motherGothel.jpg',
  button1: 'Mother Nature',
  button2:'Mother Willow',
  button3:'Mother Gothel',
  button4:'Mother Goose',
  answer: 'Mother Gothel'
},
queenGrimhilde = {
  question:"The evil queen in Snow White, just Google it, I doubt you'll get this.",
  image: 'queenGrimhilde.jpg',
  button1:'Queen Victoria',
  button2:'Queen Grimhilde',
  button3:'Queen Elsa',
  button4:'Queen Isabella',
  answer:'Queen Grimhilde'
},
scar = {
  question:"Mufasa's lying and conniving brother, hint it's not Mufasa",
  image: 'scar.png',
  button1:'Kion',
  button2:'Mufasa',
  button3:'Simba',
  button4:'Scar',
  answer:'Scar'
}, 
vanessa = {
  question:"The evil sea witch turned human in an attempt to ruin Ariel's happiness",
  image: 'vanessa.png',
  button1:'Jennifer',
  button2:'Ursula',
  button3:'Vanessa',
  button4:'Clementine',
  answer: 'Vanessa'
}
];

var timer = 10;
var questionCounter;
var i = 0;
var numCorrect = 0;
var numWrong = 0;
$("#startGame").click(displayImage);
//display images after start game is clicked
function displayImage (){
  counter = setInterval(decrement, 1000);
    $('#timer').html('Timer: ' + timer);
    $('#question').html(characters[i].question);
    $('.clue').html('<img src='+ imageDir + characters[i].image + ' width="500px">');
    $('#button1').text(characters[i].button1);
    $('#button2').text(characters[i].button2);
    $('#button3').text(characters[i].button3);
    $('#button4').text(characters[i].button4);
    //turn off start button
    $("#startGame").off();    
}

game();

function game (){
  $('#button1, #button2, #button3, #button4').on('click', function(){
    var guess = $(this).text();
    console.log(guess);
    if (guess == characters[i].answer) {
      alert('Correct!');
      numCorrect ++;
      stop();
    } else {
      alert ("Sorry, that was wrong!");
      numWrong ++;
    }
  });
}

  function decrement(){
      timer--;
      $('#timer').html('Timer: ' + timer);    
      if (timer === 0){  
      alert('Time Up!');
      stop();
      }
  }

  function stop (){
    clearInterval(counter);
    timer = 10;
    $('#timer').html('Timer: ' + timer);
    i ++;
    if (i >= characters.length) {
    $('#question').html("Congratulations! You made it to the end!");
    $('.clue').html('<img src='+ imageDir + 'fireworks.gif' + ' width="500px">');
    $('#timer').html('Correct Guesses : ' + numCorrect + "  | |  Wrong Guesses: " + numWrong);
    $('.selection').empty();
    }
    else {displayImage();}
  }