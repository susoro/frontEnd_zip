// 내장함수



// setTimeoutTime(function(){
//     console.log("펑")
// },2000)


// setInterval(function() {
//     console.log("1초가 지났다")
// },1000)

// 10초 타이머
let time = 180
setInterval(function(){
    if (time >= 0){

        let min = Math.floor( time/60)
        let sec = String(time % 60).padStart(2, "0") 
        console.log(min + ":" + sec)
        time = time -1
    }
    
},1000)