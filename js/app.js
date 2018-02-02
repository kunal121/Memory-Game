/*
 * Create a list that holds all of your cards
 */

 let array = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];
 let open=[];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
let PlaceCards=()=>{
    deck_ref=document.getElementsByClassName('deck');
    for (i=0;i<array.length;i++){
        li_ref=document.createElement('li');
        li_ref.classList.add('card');
        li_ref.innerHTML=`<i class="${array[i]}"></i>`
        console.log(li_ref.innerHTML);
        deck_ref[0].appendChild(li_ref)
      }
}
let endGame=()=>{
    console.log("hello");
}
let match=(match1,match2)=>{
    if(match1==match2){
        open=[];
        count=0;
        full=full+1;
        if(full==array.length/2){
            endGame();
        }
        moves=moves+1;
        mov_ref[0].innerHTML=moves;
    }
    else{
        console.log("Match not possible");
        setTimeout(function(){
        open[0].classList.remove("open");
        open[0].classList.remove("show");
        open[1].classList.remove("open");
        open[1].classList.remove("show");
        open=[];
        count=0;
      },500)
      moves=moves+1;
      mov_ref[0].innerHTML=moves;
    }
}



let card_class=(ref)=>{
  ref.classList.add("open");
  ref.classList.add("show");
  open.push(ref);
  
  count++;
    if(count==2){
      match1=open[0].firstChild.className;
      match2=open[1].firstChild.className;
      match(match1,match2);
  }
}


let shuffle=(array)=>{
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


let Start_Game=()=>{
  array=shuffle(array);
  PlaceCards();
  let class_ref=document.getElementsByClassName('card');

  for(let i of class_ref){
    i.onclick=function(){
      card_class(this);
    }
  }
}


let count=0;
let full=0;
let moves=0;
Start_Game();
const mov_ref=document.getElementsByClassName('moves');
const star_ref=document.getElementsByClassName('stars');


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
