function startGame(){

    var player;

    document.getElementById("game-container").style.display="grid"
    document.getElementById("start-game-btn").style.display="none"

    var selections = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

    $(".boxes").addClass("x");
    var clicks = 0;
    $(".boxes").click(function(){
        clicks ++;
        $(this).addClass("clicked");       
        
        if(clicks%2>0){
            $(".boxes:not('.clicked')").removeClass("x"); 
            $(".boxes:not('.clicked')").addClass("circle"); 
            $(this).addClass("x");
            $(this).removeClass("circle");
            selections[$(this).attr('data-box-id')] = 1;

            crossWinningDet.push(this.id)
                
            if(crossWinningDet.includes("box-1")&&crossWinningDet.includes("box-2")&&crossWinningDet.includes("box-3")){
                player="Cross"
                gameOver(player)
            }else if(crossWinningDet.includes("box-4")&&crossWinningDet.includes("box-5")&&crossWinningDet.includes("box-6")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-7")&&crossWinningDet.includes("box-8")&&crossWinningDet.includes("box-9")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-1")&&crossWinningDet.includes("box-4")&&crossWinningDet.includes("box-7")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-2")&&crossWinningDet.includes("box-5")&&crossWinningDet.includes("box-8")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-3")&&crossWinningDet.includes("box-6")&&crossWinningDet.includes("box-9")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-1")&&crossWinningDet.includes("box-5")&&crossWinningDet.includes("box-9")){
                player="Cross"
                gameOver(player)
            }
            else if(crossWinningDet.includes("box-3")&&crossWinningDet.includes("box-5")&&crossWinningDet.includes("box-7")){
                player="Cross"
                gameOver(player)
            }
            else if($("#game-container div.clicked").length == $("#game-container div").length) {
                gameDraw()
            }
                

        } else{

            circleWinningDet.push(this.id)
            
            if(circleWinningDet.includes("box-1")&&circleWinningDet.includes("box-2")&&circleWinningDet.includes("box-3")){
                player="Circle"
                gameOver(player)
            }else if(circleWinningDet.includes("box-4")&&circleWinningDet.includes("box-5")&&circleWinningDet.includes("box-6")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-7")&&circleWinningDet.includes("box-8")&&circleWinningDet.includes("box-9")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-1")&&circleWinningDet.includes("box-4")&&circleWinningDet.includes("box-7")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-2")&&circleWinningDet.includes("box-5")&&circleWinningDet.includes("box-8")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-3")&&circleWinningDet.includes("box-6")&&circleWinningDet.includes("box-9")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-1")&&circleWinningDet.includes("box-5")&&circleWinningDet.includes("box-9")){
                player="Circle"
                gameOver(player)
            }
            else if(circleWinningDet.includes("box-3")&&circleWinningDet.includes("box-5")&&circleWinningDet.includes("box-7")){
                player="Circle"
                gameOver(player)
            }
            else if($("#game-container div.clicked").length == $("#game-container div").length) {
                gameDraw()
            }

            $(".boxes:not('.clicked')").removeClass("circle"); 
            $(".boxes:not('.clicked')").addClass("x"); 
            $(this).addClass("circle");
            $(this).removeClass("x");
            selections[$(this).attr('data-box-id')] = 0;

           
        }
        
    })
    
}


let crossWinningDet=[]
let circleWinningDet=[]

function gameOver(winner){
    document.getElementById("game-container").style.display="none"
    document.getElementById("whosTheWinner").innerHTML=winner+" Won!"
    document.getElementById("play-again-btn").style.display="block"
    document.getElementById("title").style.display="none";
}
function gameDraw(){
    document.getElementById("game-container").style.display="none"
    document.getElementById("whosTheWinner").innerHTML="Its a Draw"
    document.getElementById("play-again-btn").style.display="block"
    document.getElementById("title").style.display="none";
}

if (sessionStorage.getItem("reload")) {
    $("#start-game-btn").click()
    sessionStorage.setItem("reload", false)
  }
function playAgain(){
    sessionStorage.setItem("reload", true)
    window.location.reload()
}