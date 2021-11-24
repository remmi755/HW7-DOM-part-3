let inputUser = document.querySelector('input');
const ul = document.querySelector('ul')
let elem = document.getElementsByTagName('li')
const body = document.getElementsByTagName('body')[0]

function createItem(value) {

    return `<li class="li">${value}<button class="newBtn">${'Удалить'}</button></li>`
}
function createText(value) {

    let list = ''
    list = createItem(value)
    return list
}
function clear(el){
    el.remove()
}

function creatElement(){
    elem = inputUser.value
    ul.innerHTML += createText(elem)
}

body.addEventListener('click', function (event) {
    let target = event.target

        if(target.tagName === 'BUTTON' && target.className === 'add-new-str' && inputUser.value !== '') {
            creatElement()
            inputUser.value = ''
        }

        if(target.tagName === 'LI')  {
            target.classList.toggle('active')
        }

       if(target.tagName === 'BUTTON' &&  target.className ==='newBtn') {

           clear(target.closest('li'))
        }
  }
)



