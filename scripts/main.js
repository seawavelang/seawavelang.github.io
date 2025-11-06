// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world!'

// document.querySelector('html').addEventListener('click', function () {
//   alert('别戳我，我怕疼')
// })

// myHeading.addEventListener('click', () => {
//   alert('我是标题')
// })

const myImage = document.querySelector('img')
myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/beach.jpg') {
    myImage.setAttribute('src', 'images/sea.jpg')
  } else {
    myImage.setAttribute('src', 'images/beach.jpg')
  }
}

let myHeading = document.querySelector('h1')
let myButton = document.querySelector('button')

function setUserName() {
  const myName = prompt('Please enter your name.')

  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `You are so cool, ${myName}`
  }
}

if (!localStorage.getItem) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `You are so cool, ${storedName}`
}

myButton.onclick = function () {
  setUserName()
}
