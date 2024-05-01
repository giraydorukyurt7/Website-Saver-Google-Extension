let myLeads = []
const inputEl   = document.getElementById("input-el")
const inputBtn  = document.getElementById("input-btn")
const ulEl      = document.getElementById("ul-el")

//localStorage.clear("myLeads")
//console.log(localStorage.getItem("myLeads"))

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

console.log(typeof leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log("Button clicked")
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
   // console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
let listItems = ""
    for(i=0;i<myLeads.length;i++) {
        listItems += `
          <li>
              <a target='_blank' href="https://${myLeads[i]}">
                  ${myLeads[i]}
              </a>
          </li>
        `
    }
    ulEl.innerHTML = listItems
}