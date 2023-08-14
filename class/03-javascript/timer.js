/*
내장함수 : 자주 사용되는 함수를 js에서 내장하여
편리하게 이용할 수 있도록 한것 
시간지연함수 : setTimeout(func,time)
시간반복함수 : setInterval(func, time)
 */


// setTimeoutTime(function(){
//     console.log("펑")
// },2000)


// setInterval(function() {
//     console.log("1초가 지났다")
// },1000)

// 10초 타이머
let time = 180
setInterval(function () {
    if (time >= 0) {

        let min = Math.floor(time / 60)
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }

}, 1000)

// 테스트