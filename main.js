

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")


const rowElements = document.querySelectorAll(".row")


function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function(){
    let replaceValue = replaceInput.value
    let findValue = findInput.value 

    for (let row = 0; row < rowElements.length; row++) {
        let cellElements = getCellElements(rowElements[row])

        for (let col = 0; col < cellElements.length; col++) {
            if(cellElements[col].innerHTML.includes(findValue)) {
                cellElements[col].innerHTML = cellElements[col].innerHTML.replace(findValue, replaceValue)
            }
        }
        
    }
})


