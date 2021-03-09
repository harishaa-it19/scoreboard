var score = 0;
var wickets = 0;
var balls = 0;
var extras = 0;
var sixes = 0;
var fours = 0;
var wds = 0;
var nbs = 0;
var byes = 0;
var singles = 0;
var doubles = 0;
var triples = 0;
var dots = 0;
var runrate;

function wide(){
  score = score+1;
    wds = 1;
  sc();

}
var overs;
var blito = 0;
function sc(){
  
  overs  = Math.floor(balls/6);
    overs  = Math.floor(balls/6);
 
  if(overs === 0){
    if (wds === 0){
    blito++;}
    else{
      wds = 0;
    }
  }
  else{
  blito = balls/(6*overs);
  }
   runrate = (score*6)/balls;
 document.getElementById("sc").innerHTML = (score+"/"+wickets+" in " + overs+"."+blito+" overs at " + runrate + " runs per over");
  
}
function sameball(){
  balls = (balls-1);
}
function bye(){
 byes ++;
  extras = extras+1;
}

function plusone(){
  singles++;
  score = score+1;
balls = balls+1;
 
 sc();
}
function plustwo(){
  doubles++;
  score = score+2;
balls = balls+1;
 
   sc();
}

function plusthree(){
  triples++;
  score = score+3;
balls = balls+1;
  
     sc();
}

function plusfour(){
  score = score+4;
balls = balls+1;

 fours = fours+1;    
  sc();
}

function plusfive(){
  score = score+5;
balls = balls+1;
 
     sc();
}

function plussix(){
  score = score+6;
balls = balls+1;

 sixes = sixes+1;  
  sc();
}

function pluszero(){
  score = score;
balls = balls+1;
dots++;
   sc();
}

function nbs(){
  score = score+1;
balls = balls;
nbs++;
 extras = extras+1; 
  sc();
}

function out(){
  wickets = wickets+1;
balls++;
  blito = balls%6;
 if(wickets===10){
 
   document.getElementById("sc").innerHTML = (score+" all out"+" in " + overs+"."+blito+" overs" + "(Extras: "+extras);}
   else{ sc();
}
  
}

