let money = Number(prompt("số tiền: "))
let month = Number(prompt("số tháng: "))
let rent = Number(prompt("nhập lãi suất tháng"))
let tienlai = money * rent / 100 * month
document.writeln("số tiền lãi : " + tienlai.toFixed(3))
let total = money + tienlai
document.writeln("tiền nhận được : " + total.toFixed(3))