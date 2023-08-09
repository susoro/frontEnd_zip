// html 파일에서 . "id값이름" 을 가진 id를 태그를 선택해서  제어한다

function greeting() {

    document.getElementById("target").innerText = "안녕안녕~!"

    //inputTest
    document.getElementById("inputTest").value = "하이하이"
}

// input태그는 value를 사용해서 바꿔준다.
/*
textContent, innerText, innerHTML 차이점

textContent  마크업 태그를 제외한 모든 문자열을 읽고, 변경가능

innerText 는 style 과 같이 마크업 언어가 적용된 최종형태를 읽어온다. 즉 html 요소는 제거된채 render된 텍스트를 가져올떄 사용
단, 최종적으로 사람이 볼수 있는 " human-readable"한 글자만 읽어올수 있다.

innerHTML 는 마크업 태그를 이용할수 없다
*/



/*
function 함수이름 (매개변수){
    함수를 호출했을때 실행할 명령문
}
 */

// 오ㅐ 함수쪽 안보이냐..