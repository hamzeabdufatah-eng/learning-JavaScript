// 1 setItem
// localStorage.setItem("user1", "hamze")

//2 getItem
//  let name=localStorage.getItem("name")
//   console.log(name)

//3 removeItem it can remove only (1item)
// localStorage.removeItem("name")

//4 clear() it can be to clear all
// localStorage.clear()

//project
// const input=document.getElementById("nameInput")
// const btn=document.getElementById("saveBtn")
// const result=document.getElementById("result")
// btn.addEventListener("click",()=>{
// localStorage.setItem("username",
// input.value)
// result.textContent="saved"
// })

// let age = 22;
// localStorage.setItem("userAge",age);
// console.log(localStorage.getItem("userAge"));

const themeBtn=document.getElementById("themeBtn")
let currentTheme=localStorage.getItem("theme")
if(currentTheme==="dark"){
    document.body.classList.add("dark-theme")
}
themeBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
})