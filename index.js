const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems(){
    let items = ""
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
                    <div class="input-controller">
                        <textarea disabled>${itemsArray[i]}</textarea>
                        <div class="edit-controller">
                            <i class="fa-solid fa-check deleteBtn"></i>
                            <i class="fa-solid fa-pen-to-square editBtn"></i>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="save-btn">Save</button>
                        <button class="cancel-btn">Cancel</button>
                    </div>
                </div>`
            }
    document.querySelector(".to-do-list").innerHTML = items
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}

function activateSaveListeners() {
   const saveBtn = document.querySelectorAll(".save-btn")
   const inputs = document.querySelectorAll(".input-controller textarea")

   saveBtn.forEach((save, i) => {
        save.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
   });
}

function activateCancelListeners() {
    const cancelBtn = document.querySelectorAll(".cancel-btn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")

    cancelBtn.forEach((cancel, i) => {
        cancel.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    })
}

function updateItem(text, i) {
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")

    editBtn.forEach((edit, i) => {
        edit.addEventListener("click", () => {
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    });
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            deleteitem(i)
        })
    })
}

function deleteitem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    console.log(date)
    document.querySelector('#date').innerHTML = date[1] +" "+ date[2] +" "+ date[3]
}

window.onload = () => {
    displayDate()
    displayItems()
}





