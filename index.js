const inputBtn = document.getElementById("input-btn")
let myLeads =[]
const inputEl = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//Check if localStorage has any leads

//Get leads from the localStorage
const leadsFromLocalStorage = localStorage.getItem("myLeads")
if(leadsFromLocalStorage){
    myLeads = JSON.parse(leadsFromLocalStorage)
    render(myLeads)
}
// function render(leads){
//     let listItems = ""
//     for(i=0;i<leads.length; i++){
//         if(leads[i]===""){
//             myLeads.splice(i,1)            
//         }
//         else{            
//             listItems += `<li>${i+1}<a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`
//         }
//     }  
//     ulEl.innerHTML = listItems
// }

function render(leads){
    let listItems = ""
    leads.forEach((element)=>{        
            listItems += `<li>${element}<a href='${element}' target='_blank'>${element}</a></li>`       
    })
    ulEl.innerHTML = listItems
}
// console.log(leadsFromLocalStorage)
deleteBtn.addEventListener("dblclick",function(){
    
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

inputBtn.addEventListener("click", function(){
  //Add New value to the array from text field
  myLeads.push(inputEl.value)
  //Clear text field
  inputEl.value = "" 
  //Store value into localStorage 
  localStorage.setItem("myLeads",JSON.stringify(myLeads)) 
  //Call renderLeads function to display all the leads 
  render(myLeads) 
})
 tabBtn.addEventListener("click",function(){
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        myLeads.push(tabs[0].url)   
        //Store value into localStorage
        localStorage.setItem("myLeads",JSON.stringify(myLeads)) 
        //Call renderLeads functi   `on to display all the leads 
        render(myLeads)     
      });    
 })


