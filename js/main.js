const press = document.querySelector('.press')
const fgName = document.querySelector('#fg-name')
const fgEmail = document.querySelector('#fg-email')
const fgFone = document.querySelector('#fg-fone')
const nameContainer = document.querySelector('input[name=name]')
const emailContainer = document.querySelector('input[name=email]')
const foneContainer = document.querySelector('input[name=fone]')
const nameBtn = document.querySelector("#name-btn")
const emailBtn = document.querySelector("#email-btn")
const sendBtn = document.querySelector("#send-btn")
/*
function ChildFocus(nome){
    let father = nome.parentElement
    let sibling = father.nextElementSibling
    let childInp = sibling.querySelector('input')
    //console.log(father, sibling, childInp)
    childInp.focus()
}

nameContainer.addEventListener('click', () => {
    focusCheck()
    fgEmail.style.opacity = 0.3
    fgFone.style.opacity = 0.3
})
emailContainer.addEventListener('click', () => {
    focusCheck()
    fgName.style.opacity = 0.3
    fgFone.style.opacity = 0.3
})
foneContainer.addEventListener('click', () => {
    focusCheck()
    fgEmail.style.opacity = 0.3
    fgName.style.opacity = 0.3
})

function focusCheck(){
    let focused = document.activeElement
    let father = focused.parentElement
    if (father.style.opacity != 1){
        father.style.opacity = 1
    }
}

nameContainer.addEventListener("keyup", (event) => {
    if (nameContainer.value.length > 1){
        Object.assign(nameBtn.style,{backgroundColor: "rgba(53,80,160,1)", color: "white"})
        press.style.opacity = 1
        if (event.key == 'Enter'){
            ChildFocus(nameContainer)
            fgEmail.style.opacity = 0.3
            fgName.style.opacity = 0.3
            focusCheck()
        }
    }
    else{
        Object.assign(nameBtn.style,{backgroundColor: "rgba(233,233,233,1)", color: "rgba(53,80,160,0.5)"})
        press.style.opacity = 0
    }
})
emailContainer.addEventListener("keyup", (event) => {
    if (emailContainer.value.length > 1){
        Object.assign(emailBtn.style,{backgroundColor: "rgba(53,80,160,1)", color: "white"})
        if (event.key == 'Enter'){
            ChildFocus(emailContainer)
            fgEmail.style.opacity = 0.3
            fgFone.style.opacity = 0.3
            focusCheck()
        }
    }
    else
        Object.assign(emailBtn.style,{backgroundColor: "rgba(233,233,233,1)", color: "rgba(53,80,160,0.5)"})
})
document.addEventListener("keyup", (event) => {
    if (foneContainer.value.length > 1 && nameContainer.value.length > 1 && emailContainer.value.length > 1){
        Object.assign(sendBtn.style,{backgroundColor: "rgba(53,80,160,1)", color: "white"})
        if (event.key == 'Enter'){
            focusCheck()
        }
    }
    else
        Object.assign(sendBtn.style,{backgroundColor: "rgba(233,233,233,1)", color: "rgba(53,80,160,0.5)"})
})
*/