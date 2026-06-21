const myBox = document.getElementById("myBox");
const dropZone = document.getElementById("dropZone");
const myVideo = document.getElementById("myVideo");
const logWindow = document.getElementById("log-window");

function logEvent(message) {
  logWindow.innerHTML += message + "<br>";
  logWindow.scrollTop = logWindow.scrollHeight;
}

//1 dbclick
myBox.addEventListener("dblclick", () => {
  logEvent("dbclick: its clicked");
});

//2 dragstart
myBox.addEventListener("dragstart", () => {
  logEvent("dragstart:  it is started ");
});

//3 drag
myBox.addEventListener("drag", function () {
  console.log("drag:dragged the element");
});

//4 dropzone
dropZone.addEventListener("dragenter", (e) => {
  e.preventDefault();
  dropZone.classList.add("active");
  logEvent("dragenter: its dragentering the box of allowing");
});

//5 dragover
dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
})

//6 dragleave
dropZone.addEventListener("dragleave",function() {
   dropZone.classList.remove("active")
logEvent("dragleave: dragleaved")
}) 

//7 drop 
dropZone.addEventListener("drop",function(e){
  e.preventDefault()
dropZone.classList.remove("active")
})

//8 dragend
myBox.addEventListener("dragend",()=>{
  logEvent("dragend: its finished the drg")
})

//9darationcharge
myVideo.addEventListener("durationchange",function(){
  logEvent("darationchange: full hieght fr video")
})

//1 mouseenter
myBox.addEventListener("mouseenter",function(){
  logEvent("mouseenter: the box ")
  myBox.style.backgroundColor="darkorange"

})
//2 mouseleave
myBox.addEventListener("mouseleave",function(){
  logEvent("mouseleave: m-leaved")
  myBox.style.backgroundColor="black"
})

//3 mousedown
myBox.addEventListener("mousedown",function(){
  logEvent("mousedown:mouse down")
  myBox.style.backgroundColor="yellow"
})

//4 mouseup
myBox.addEventListener("mouseup",function(){
  logEvent("mouseup: mouse up")
  myBox.style.backgroundColor="red"
})

//fox 
const myButton=document.getElementById("btn")
myButton.addEventListener("focus",function(){
logEvent("focus: focused")
myButton.style.outline="3px solid red";
})
myButton.addEventListener("blur",function(){
  logEvent("blur: b blur is out")
  myButton.style.outline="none"
})
 
// window.addEventListener("keydown",function(e){
// e.key
// logEvent("keydown:key down")
// if(e.key==="enter"){
//   logEvent("enter:you entered the button")
// }
// })
// window.addEventListener("keyup",function(e){
//   logEvent("keyup: keyup")
// })

 const myForm=document.getElementById("myForm")
const myInput=document.getElementById("myInput")

myInput.addEventListener("input",function(e){
  e.target.value
  logEvent("input: texting:"+e.target.value)
})
myInput.addEventListener("change",function(e){
logEvent("change: changed")
})
myForm.addEventListener("submit",function(e){
   e.preventDefault();
logEvent("submit:submitted")
if(myInput.value===""){
  alert("sorry this is incorrect ")
}
})
