// proplem 1 even or add
// function checknumber(num){
//     if(num%2===0){
//         return("even")
//     }
//     else{
//         return("odd")
//     }
// }
// console.log(checknumber(11))

//proplem 2 positive or negative
// function check(num){
//     if(num>0){
//         return("positive")
//     }
//     else if(num<0){
//         return("negative")
//     }
//     else{
//         return("zero")
//     }
// }
// console.log(check(-10))

//3 largest number
// function check(a,b){
//     if(a>b){
//         return   a ;//("a")
//     }
//     else{
//         return    b ; //("b")
//     }
// }
// console.log(check(20,40))

//grade calculator
function grade(score){
    if(score>=90){
        return("A");
    }
    else if(score>=80){
        return("B");
    }
    else if(score>=70){
        return("C")
    }
    else{
        return("fail");
    }
}
console.log(grade(89))
 