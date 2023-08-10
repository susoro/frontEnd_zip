// 1. 인증번호 생성함수를 화살표 함수로 변경 

// 2. 인증번호 생성시마다 글자 색상이 바뀌도록
// style color property


// 자바스크립트 코드를 여기로 이동
function auth() {
            const token = String(Math.floor(Math.random() * 100000 )).padStart(6, "0")
            const color1 = "#"+(Math.floor() * 0xffffff ).toString(16);
            document.getElementById("target").innerText = token
            token.style.color = color1
        }


        // test 용 커밋