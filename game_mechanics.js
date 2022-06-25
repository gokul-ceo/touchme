// for(let i=0;i<=10;i++){
//   make_pop(i);
// }
var chance = 5;
var seconds = 0;
var click_sound = new Audio('audio/click_sound.mp3');
var pop_up = new Audio('audio/pop_up.mp3');
var pop_down = new Audio('audio/pop_down.mp3');
pop_imgno = 0;

game_start = setInterval(random_popings,1000);
function random_popings(){
  // pop_up.play();
  seconds+=1
  pop_imgno = Math.floor(Math.random()*64);
  console.log(pop_imgno);
  make_pop(pop_imgno);

  if (chance>0 && chance){
    document.getElementById('chance').innerHTML = "Life:"+chance;
  }else{
    clearInterval(game_start);
    $(".obj"+pop_imgno).removeClass('active');
    $(".img"+pop_imgno).removeClass('active');
    document.getElementById('chance').innerHTML = "-";
    $('.container').append('<div class="gameover"><h1>Game Over</h1><h2>You Survived,'+seconds+' seconds</h2></div>');
    document.getElementById('maindiv').style.background = 'red';

  }


}
sec = 1000;
function make_pop(n){

  $(".img"+n).addClass('active');
  $(".obj"+n).addClass('active');
  setTimeout(function(){
    remove_pop(n)
  },sec);

};

function remove_pop(n){
  chance-=1;
  $(".obj"+n).removeClass('active');
  $(".img"+n).removeClass('active');
  // pop_down.play();

};

var count = 0;
function addcount(){
   click_sound.play();
  $('.obj'+pop_imgno).removeClass('active');
  $('.img'+pop_imgno).removeClass('active');
  count+=1;

  if (chance>0&&chance<=5){
    document.getElementById('chance').innerHTML = "Life:"+chance;
    if(chance!=5){
      chance+=1;
    }

  }else{
    document.getElementById('chance').innerHTML = "Game Over"
  }

  document.getElementById('score').innerHTML = "Score:"+count;
  if ((count>10)&&(count<20)){
    console.log("Count crossed 10!!!!, but not 20")

  }

}
