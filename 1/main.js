// change theme
function changeTheme() {
    let changeTh = document.querySelector('body')
    if (changeTh.classList[0] === 'theme-dark') {
        changeTh.classList.remove('theme-dark')
        changeTh.classList.add('theme-light')

    }
    else {
        changeTh.classList.remove('theme-light')
        changeTh.classList.add('theme-dark')
    }
}
// add a new Item 
function addInput() {
    const newItemInput = document.getElementById('addInput').value
    let li = document.createElement('li')
    li.classList.add('liItem')

    let label = document.createElement('label')
    label.classList.add('list-item')

    let inputTag = document.createElement('input')
    inputTag.setAttribute("type","checkbox")
    inputTag.setAttribute("name","todoItem")
    inputTag.classList.add('checkbox')
    label.appendChild(inputTag)

    let span = document.createElement('span')
    span.classList.add('checkmark')
    label.appendChild(span)

    let secondSpan = document.createElement('span')
    secondSpan.classList.add('text')
    secondSpan.innerText = newItemInput
    label.appendChild(secondSpan)

    li.appendChild(label)
    let ul = document.getElementById('myUl')
    if(newItemInput === ''){
            alert("You must write something!"   )
        }
        else {
            ul.appendChild(li)
        } 
        document.getElementById('addInput').value = ""
        let closeSpan = document.createElement('span')
        closeSpan.className = "icon-cross"
        li.appendChild(closeSpan)

}
// Click on a close button to hide the current list item
// let close = document.getElementsByClassName('icon-cross')
// for(let i = 0 ; i<close.length ; i++){
//     close[i].onclick = function() {
//     let closeParent = this.parentElement 
//     closeParent.style.display = "none"
//     }
// }
 document.querySelectorAll('li').addEventListner('click',e => {
     if(e.target === 'icon-cross'){
        this.parentNode.style.display = 'none'
     }
 })