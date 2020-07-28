
var numSquares=6;
var colors=[];

    var squares=document.querySelectorAll(".square");
    var pickedColor;
    var colorDisplay=document.getElementById("colorDisplay");
    var messageDisplay=document.querySelector("#message");
    var h1=document.querySelector("h1");
    var resetButton=document.querySelector("#reset");
   var modeButtons=document.querySelectorAll(".mode");

        init();

function init(){
    //moden button event listner
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numSquares=3;
            }else{
                numSquares=6;
            }
            
            reset();   
        });
   }

   //set up squares
   for(var i=0;i<squares.length;i++){
    //add initial colours
    squares[i].style.backgroundColor=colors[i];

    //add clicklisteners to squares
    squares[i].addEventListener("click",function(){
      //grab colour of clicked square
     var clickedColor= this.style.backgroundColor;
      //compare color to pickedcolor
      if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct!"
        resetButton.textContent="Play Again?"
        changeColors(clickedColor);
        h1.style.background=clickedColor; 

      }else{
         this.style.backgroundColor="#232323";
         messageDisplay.textContent="Try again"
      }

    });
}
reset();

}

   function reset(){
    colors=generateRandomColors(numSquares);
    //pick a new random color
    pickedColor=pickColor();
    //change color display to match picked color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";

    messageDisplay.textContent="";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
                   squares[i].style.backgroundColor=colors[i];
                }else{
                       squares[i].style.display="none";
                   }
    }
    h1.style.backgroundColor="steelblue";
   }
     

    resetButton.addEventListener("click",function(){
      reset();

    })

    colorDisplay.textContent=pickedColor;

    function changeColors(color){
        //loop through all square when get right ans
        for(var i=0;i<squares.length;i++){
              //change each color to match given color
              squares[i].style.backgroundColor=color;
        }
    }

    function pickColor(){
        var random= Math.floor(Math.random()*colors.length);
        return colors[random];
    }

    function generateRandomColors(num){
        //make arrray
        var arr=[];
        //add num random colors to array
        for(var i=0; i<num; i++){
           //get random color and puch to array
            arr.push(randomColor())
        }
        //return array
        return arr;
    }

    function randomColor(){
        //pick a "red" from 0 to 255
         var r= Math.floor(Math.random()*256) 
         //pick a "green" from 0 to 255
         var g= Math.floor(Math.random()*256)
          //pick a "blue" from 0 to 255
          var b= Math.floor(Math.random()*256)
      
          return "rgb(" + r + ", " + g + ", " + b + ")";        
    }