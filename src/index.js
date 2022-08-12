import generateJokes from './generateJokes'
import './styles/main.scss'
import smileSvg from './assets/smile.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = smileSvg

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJokes)

generateJokes()
