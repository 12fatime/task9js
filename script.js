const list1=document.querySelector(".list1")
const list2=document.querySelector(".list2")
const list3=document.querySelector(".list3")
const button=document.querySelector(".button")
const myTable=document.querySelector("#table")
var first=document.querySelector(".radiotype1")
var second=document.querySelector(".radiotype2")
var third=document.querySelector(".radiotype3")
const movzu1=document.querySelector(".movzu1")
const movzu2=document.querySelector(".movzu2")
const movzu3=document.querySelector(".movzu3")
button.addEventListener("click", ()=>{
    var tr = document.createElement("tr")
    tr.style.backgroundColor=list3.value;
      var td1 = document.createElement("td")
      td1.innerText=list1.value
      var td2 =document.createElement("td")
      td2.innerText=list2.value
      var td3 = document.createElement("td")
  
      if(list1.value.trim() && list2.value.trim() && list3.value.trim()){
        myTable.appendChild(tr)
        tr.append(td1,td2,td3)
      }
      list1.value="",
      list2.value="",
      list3.value=""

    if(first.checked==true){
       first.value="Phsycology"
       td3.append(first.value)
    }else if(second.checked==true){
       second.value="Drama"
       td3.append(second.value)
    }else{
        third.value="Motivasion"
        td3.append(third.value)
    }
    
    if (list3.value.trim()) {
        let color1 = list3.value;
        console.log(color1);
        tr.style.backgroundColor = color1;
      }
})