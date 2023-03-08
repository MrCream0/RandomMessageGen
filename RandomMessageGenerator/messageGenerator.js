//topic for messaeg i want to send people 
//3 random sentences will pop up
//today you will: blah blah
//stay away from: blah blah
//dont eat: blah blah


/*

let array be equal to a bunch of responses 

function that maybe does for loop that does math.random on index of array to output the random reply

${var} inserted into string 

make three var string set to prefixed text */
/*const quote1 = 'Today you will find: ';
const quote2 = 'Stay away from: ';
const quote3 = 'Dont eat: ';*/

let answerArray = ['calanders', 'tires', 'car exaust', 'grass', '18 chickens', 'a snail']
let answers = Math.floor(Math.random() * answerArray.length);
let randomAnswer = answerArray [answers];

let message = ['Today you will find: ', 'Stay away from: ', 'Dont eat: '];
let randomText = Math.floor(Math.random() * message.length);
let randomMessage = message [randomText];

/*let quotes = {
    quote1: 'Today you will find: ',
    quote2: 'Stay away from: ',
    quote3: '',
}



const randomWord = (arr) =>{

    for(i = 0; arr.length > 1; i++){
        return arr[i];
    }
}*/

const messageAnswer = () =>{
    return randomMessage + randomAnswer;
}

console.log(randomMessage + randomAnswer);
messageAnswer();