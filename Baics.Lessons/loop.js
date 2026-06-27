// for loop . waa sadex qaab initailazion,condition, and incriment or decriment

// for( let i=0 ; i <=100; i++ ){
//      console.log(i)

//}
// for(let i=0; i<=20; i+=2)//qaabkan waa even numbers soo bandhig
//     console.log(i)
// for (let i=1; i<=20; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

// //   real scenario
// const transections = [100, -50, -30, 500];
//   for (let i = 0; i <transections.length; i++) {
//     if (transections[i] > 0){ console.log(`deposit: $${transections[i]}`);
//   }  else {
//      console.log(`withdr0wals: $${transections[i]}`);
// }
// }
// const faaiidadamaanta=[6500,-150,-40,-130,-330,-50]
// let Hadhaagayga=0;
// let aanisticaamalay=0
// for (let qiime=0;qiime<faaiidadamaanta.length;qiime++){
//   Hadhaagayga+=faaiidadamaanta[qiime];

//   if(faaiidadamaanta[qiime]>0){
//     console.log(`deposit $${faaiidadamaanta[qiime]}`)
//   }else{
//     console.log(`withdrowalls $${Math.abs(faaiidadamaanta[qiime])}`)
//     aanisticaamalay+=Math.abs(faaiidadamaanta[qiime])
//   }
// }console.log(`hadhaagayga:${Hadhaagayga}`)
// console.log(`aanisticaamalay:$${aanisticaamalay}`)

// // while loop
// let balance = 500;
// let withdrawAmount;
// while (true) {
//   let input = prompt(
//     `your balance is :$${balance}".how much do you want to withdrow?`,
//   );
//   if (input === null) {
//     console.log("jop is stoped");
//     break;
//   }
//   withdrawAmount = Number(input);
//   if (withdr0walsAmount <= balance && withdrawAmount > 0) {
//     balance -= withdrawAmount;
//     console.log(`withdrawn: $${withdrawAmount}.new balance: $${balance}`);
//     break;
//   } else {
//     console.log("invalid amount or insufficient balance.");
//   }
// }

// let balance=500
// let withdrawAmount=180
// if(withdrawAmount<=balance && withdrawAmount>0){
// balance-=withdrawAmount;
// console.log(`withdrown:$${withdrawAmount}.new balance:$${balance}`)
// }else{
//   console.log(`invalid amount`)
// }

// let balance=1000
// let withdrawAmount=900
// if(withdrawAmount<=balance && withdrawAmount >0){
//   balance-=withdrawAmount
//   console.log(`withdrawn:$${withdrawAmount}.new balance:$${balance}`)
// }else{
//   console.log("invalid")
// }
// do while
//  let count=15
//  do{
//      console.log("count" + count)
//      count++
//  }while(count<=5)
