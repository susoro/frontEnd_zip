// 문자열도 배열처럼 다룰수 있다
// 이메일 마스킹 작업하기


const email = "sususu123@gmail.com";
email.includes("@") //true
email.split("@") //['sususu123', 'gmail.com']
email.split("@")[0]
email.split("@")[1]

let userName = email.split("@")[0]
console.log(userName)

let userEmail = email.split("@")[1]
console.log(userEmail)

let maskingMail = []
maskingMail.push(userName[0])
maskingMail.push(userName[1])
maskingMail.push(userName[2])
maskingMail.push(userName[3])
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")

console.log(maskingMail)
maskingMail.join("")+ "@" + userEmail

let result = maskingMail.join("")+ "@" + userEmail
console.log(result)