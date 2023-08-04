// 반복문 : 같은 행위를 반복하는것 -> 몇번 반복할 것인가
// 유영아 안뇽


for(let i = 0; i<5; i=i+1){
  console.log("안녕")
};

// 변수명은 자유롭게 설정할수가 있다 
for(let susu = 0; susu<5; susu=susu+1){
  console.log("오! 안녕")
};

const test1 = ["수경수", "유영", "밍밍"]
// for (let i = 0; i<3;i++){
//   console.log(test1[i] + " 입니다.")
// }

for(let i = 0; i < test1.length; i++){
  console.log(test1[i] + "입니당 ! 🤠")
}

let persons = [
  {name: "수경수", age: 31},
  {name: "밍밍", age: 30},
  {name: "유영", age: 31},
  {name: "아영언니", age: 33},
  {name: "도비", age: 3}
];

for (let count = 0; count < persons.length; count++){
  if(persons[count].age >= 19){
    console.log(persons[count].name + "야호 성인이다")
  }else{
    console.log(persons[count].name + "나는 베이비")
  }
}


const fruits = [
  {number: 1, title:"레드항"},
  {number: 2, title:"샤인머스켓"},
  {number: 3, title:"산청딸기"},
  {number: 4, title:"한라봉"},
  {number: 5, title:"사과"},
  {number: 6, title:"에플망고"},
  {number: 7, title:"딸기"},
  {number: 8, title:"천혜향"},
  {number: 9, title:"과일선물세트"},
  {number: 10, title:"귤"},
];

// for (let count = 0; count < fruits.length; count++){
//   console.log(fruits[count])
// }

// for문으로 나타내기
// for (let count = 0; count < fruits.length; count++){
//   console.log(fruits[count].number + " " + fruits[count].title)
// }

// 백틱 사용해서 for문 돌리기
for (let count = 0; count < fruits.length; count++){
  console.log(`과일차트 ${fruits[count].number}위는 ${fruits[count].title}입니다!`)
}
