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

let isStarted = false;

// 인증번호 날리기
let auth = () => {

    if (isStarted == false) {
        // 타이머가 작동중이 아닐때
        isStarted = true;
        document.getElementById("finish").disabled = false;
        const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token

        let time = 10
        let timer

        timer = setInterval(function () {

            if (time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        }, 1000)

    } else {
        // 타이머가 작동중일때
    }


}


// 인증완료버튼 비활성화