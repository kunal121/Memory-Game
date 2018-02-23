 //Made Array  of the classes for iteration
 let array = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

 //A open array to track record of open cards.
 let open=[];





//Creating the grid and placing cards.
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



// When user clicks on last card the game will end and the popup will appear
let endGame=()=>{
    let grid_ref=document.getElementsByClassName('grid');
    grid_ref[0].style.display="none";
    result=document.createElement("div");
    result.classList.add('card','result');
    result.style.marginTop="35vh";
    result.style.marginLeft="38%";  //Setting styles for the content in the popup
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll="no";
    result.innerHTML=`<div>
            <p class="congrats_message" style="font-size:3em">
                    Congratulations
              </p>
            <div class="time" style="font-size:2em;margin-left:10vw" >${hours[0].innerHTML}${minutes[0].innerHTML}${seconds[0].innerHTML}
            </div>
            <br><br>
                  <span class="star" style="margin-left:8vw">
                      <i class="fa fa-star fa-3x"></i>
                  </span>

                  <span class="star">
                      <i class="fa ${ (moves >= 20) ? "fa-star-o" : "fa-star"}  fa-3x"></i>
                </span>

                <span class="star">
                  <i class="fa ${ (moves > 15) ? "fa-star-o" : "fa-star"} fa-3x"></i>
                </span>

                    <br><br>
                <div class="restart" style="margin-left:10vw;font-size:2em" onclick="window.location.reload()">
                    <i class="fa fa-repeat"></i>
            </div>
    </div>`;
    document.body.appendChild(result);  //appending the congrats message stars and time in final popup
}




let change_stars=()=>{
    star_ref[0].removeChild(star_ref[0].lastElementChild); //changing stars according to the moves.

}


//Build Matching logic how two cards are goign to match
let match=(match1,match2)=>{
    if(match1==match2){
        open=[];
        count=0;
        full=full+1;
        if(full==array.length/2){
            setTimeout(endGame,2000);
        }
        moves=moves+1;
        mov_ref[0].innerHTML=moves;
    }
    else{
        console.log("Match not possible");
        open[0].classList.add("animated","shake");
        open[1].classList.add("animated","shake");
        setTimeout(function(){
          // open[1].classList.add("shake");
        open[0].classList.remove("open","show");  //closing the card
        open[1].classList.remove("open","show");
        open[0].classList.remove("animated","shake"); //use animate.css classes to animate the cards
        open[1].classList.remove("animated","shake");
        for(i of open){
          i.style.pointerEvents="auto";
        }
        open=[]; //empty the open array again
        count=0;
      },500)
      moves=moves+1;
      mov_ref[0].innerHTML=moves;

      if(moves>15 && moves<=20 && flag1==0){
        change_stars();
        flag1=1;
      }
      else if(moves>20 && flag2==0){
        change_stars();
        flag2=1;
      }

    }
}



let card_class=(ref)=>{ //ref contain the refrence of that card which user clicked
  ref.classList.add("open");
  ref.classList.add("show");    //open card which user is goign to click
  open.push(ref);
  ref.style.pointerEvents='none';

  count++;
    if(count==2){
      match1=open[0].firstChild.className;
      match2=open[1].firstChild.className;
      match(match1,match2);
  }
}

// Shuffle function from http://stackoverflow.com/a/2450976
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

// Function to start the game
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
let full=0;//checking wether all cards are opened or not
let moves=0;//counting number of moves
let flag1=0;//Are used in building the ratings logic
let flag2=0;

Start_Game();


let hours=document.getElementsByClassName("hour");  //Setting hours,minutes and seconds
let minutes=document.getElementsByClassName("minutes");
let seconds=document.getElementsByClassName("seconds");
let count1=0;//Use in building the logic of timer
let count2=0;

//setting hours
let sethour=()=>{
  count3=count3+1;
  hours[0].innerHTML=count3+" "+":";
}


//setting minutes
let setminutes=()=>{
  count2=count2+1;
  minutes[0].innerHTML=count2+" "+":";
  if(count2==60){
    sethour();
    count2=0;
  }
}


setInterval(function(){
  count1=count1+1;
  seconds[0].innerHTML=count1;
  if(count1==60){
    setminutes();
    count1=0;
  }
},1000)



const mov_ref=document.getElementsByClassName('moves'); //taking the refrence of moves
const star_ref=document.getElementsByClassName('stars');//refrence of stars.
