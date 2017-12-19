

images_type=['lamborghini','ferrari','suzuki','landrover',
            'ford','mercedes','toyota','honda']

let count=[];
for(let i=0;i<8;i++){
  count[i]=0;
}
function random_index(){
  random_value=Math.floor(8*Math.random())
  return random_value;
}
function place_cards(){
for(let i=0;i<4;i++){
  $("#grid").append('<div class="row"></div>')
  for(let j=0;j<4;j++){
  flag=0;
  while(flag!=1){
  random_i=random_index();
  if(random_i==0 && count[0]!=2){
       count[0]+=1;
       flag=1;
       $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
         <div class="front">\
         </div>\
         <div class="back images_type[0]">\
         </div>\
       </div></div>\
       ')
  }
  else if(random_i==1 && count[1]!=2){
      count[1]+=1;
      flag=1;
      $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
        <div class="front">\
        </div>\
        <div class="back images_type[1]">\
        </div>\
      </div></div>\
      ')
  }
  else if(random_i==2 && count[2]!=2){
      count[2]+=1;
      flag=1;
      $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
        <div class="front">\
        </div>\
        <div class="back images_type[2]">\
        </div>\
      </div></div>\
      ')
  }
  else if(random_i==3 && count[3]!=2){
      count[3]+=1;
      flag=1;
      $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
        <div class="front">\
        </div>\
        <div class="back images_type[3]">\
        </div>\
      </div></div>\
      ')
  }
  else if(random_i==4 && count[4]!=2){
        count[4]+=1;
        flag=1;
        $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
          <div class="front">\
          </div>\
          <div class="back images_type[4]">\
          </div>\
        </div></div>\
        ')
  }
  else if(random_i==5 && count[5]!=2){
        count[5]+=1;
        flag=1;
        $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
          <div class="front">\
          </div>\
          <div class="back images_type[5]">\
          </div>\
        </div></div>\
        ')
  }
  else if(random_i==6 && count[6]!=2){
        count[6]+=1;
        flag=1;
        $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
          <div class="front">\
          </div>\
          <div class="back images_type[6]">\
          </div>\
        </div></div>\
        ')
  }
  else if(random_i==7 && count[7]!=2){
        count[7]+=1;
        flag=1;
        $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
          <div class="front">\
          </div>\
          <div class="back images_type[7]">\
          </div>\
        </div></div>\
        ')
  }
}
   console.log(count);
}
}
}

place_cards()
