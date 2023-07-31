// 객체
let friend =[

  {name : "수경수", age: 131, location:"지구"},
  {name : "밍밍이", age: 130, location:"화성"}
] 
console.log(friend)
friend.name //수경수
friend.age //131
friend.location //지구

friend[0]//{name: '수경수', age: 131, location: '지구'}
friend[1]///{name: '밍밍이', age: 130, location: '화성'}

friend.length //2
friend[0].location //지구