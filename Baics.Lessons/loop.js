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
const transections = [100, -50, -30, 500];
  for (let i = 0; i <transections.length; i++) {
    if (transections[i] > 0){ console.log(`deposit: $${transections[i]}`);
  }  else {
     console.log(`withdr0wals: $${transections[i]}`);
}
}

// // while loop
// let balance=500
//  let withdr0walamount
//  while(true){
//      withdr0walamount=prompt("your blance is : $${balance}. how much to withdrw ")
//      if(withdr0walamount <= balance && withdr0walamount >0){
//          balance -=withdr0walamount
//          console.log(`withfrwa $${withdr0walamount}. new balance $${balance}`)
//          break
//      } else{
//          console.log("invalid amount")
//      }
//  }

 // do while
//  let count=15
//  do{
//      console.log("count" + count)
//      count++
//  }while(count<=5)

