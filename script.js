
const windows=document.getElementsByClassName("w-100")
const output=document.getElementById("9")
//console.log(windows)

let cross=true
let scoreTable = [0,0,0,0,0,0,0,0,0]
let moves=0;
let winner=false
let index;

init()

function init() {
    moves=9;
    scoreTable = [0,0,0,0,0,0,0,0,0]
    winner=false
    for (const wind of windows) {
        wind.addEventListener("click", showContent)
    }
}
function showContent(event){
    console.log(event)
    index=event.target.id
    output.innerText=""


    if(cross && moves!==0){
        windows[index].innerText="X"
        scoreTable[index]=1
        checkResult()
        cross=!cross;
        moves--;
        console.log(index+ " kryzius ")

    }  else if (moves!==0){
        windows[index].innerText="O"
        scoreTable[index]=-1
        checkResult()
        cross=!cross;
        moves--;
        console.log(index+ " nulis ")
    }
    moves===0 ? checkResult() : null

    windows[index].removeEventListener("click", showContent)
}

function checkResult(){
    let value;
    let result="No result "
    cross ? value=3 : value=-3

    winner=(scoreTable[0]+scoreTable[1]+scoreTable[2]) === value ||
        (scoreTable[0]+scoreTable[3]+scoreTable[6]) === value ||
        (scoreTable[3]+scoreTable[4]+scoreTable[5]) === value ||
        (scoreTable[6]+scoreTable[7]+scoreTable[8]) === value ||
        (scoreTable[0]+scoreTable[4]+scoreTable[8]) === value ||
        (scoreTable[6]+scoreTable[4]+scoreTable[2]) === value ||
        (scoreTable[0]+scoreTable[1]+scoreTable[2]) === value ||
        (scoreTable[1]+scoreTable[4]+scoreTable[7]) === value ||
        (scoreTable[2]+scoreTable[5]+scoreTable[8]) === value
    && moves>0 ? cross ? showResults(result="Crosses won") : showResults(result="Zeros won") : moves===0? showResults(result="nobody wins!") : false
    //console.log(winner)

    if(winner || moves===0) {
        setTimeout(()=> {
            for (const wind of windows) {
                wind.innerHTML = ""
                wind.removeEventListener("click", showContent)
            }
            output.innerText=`previuos results: ${result}`
            init()
        }, 2000)
    }
}
function showResults(results){
    output.innerText=`results: ${results}`
    return true
}