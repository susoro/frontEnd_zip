const password1 = "입력받은 비밀번호";
const password2 = "입력받은 비밀번호 확인";

if (password1 === password2){
  //alert("회원가입을 축하합니다");
} else{
  //alert("비밀번호가 다릅니다. 다시 한번 확인해 주세요");
}


if(1+1 ===2){
  console.log("정답입니다.")
} else {
  console.log("틀렸습니다.")
}



const profile = {
  name : "수경수",
  age : 127,
  school : "동작"
}

if (profile.age>=20){
  console.log("성인입니다.")
}else if (profile.age>=8){
  console.log("학생입니다.")
}else if(profile.age > 0){
  console.log("어린이 입니다.")
}