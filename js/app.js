

images_type=['lamborghini','ferrari','suzuki','landrover',
            'ford','mercedes','toyota','honda']
function random_index(){
  
}
function place_cards(){
for(let i=0;i<4;i++){
  $("#grid").append('<div class="row"></div>')
  for(let j=0;j<4;j++){
  random_i=random_index()
  $('.row:last-child').append('<div class="flip-container col m3 m3"><div class="box">\
    <div class="front">\
    </div>\
    <div class="back">\
    </div>\
  </div></div>\
  ')
}
}
}

place_cards()
