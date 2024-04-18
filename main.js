document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}
function showbb() {
    document.getElementById('fig').src = 'https://github.com/euuni/website/blob/main/img/baseball.png?raw=true'
    document.getElementById('desc').innerHTML =
      '⚾︎야구 시청하기⚾︎'
  }
  
  function showmv() {
    document.getElementById('fig').src = 'https://github.com/euuni/website/blob/main/img/movie.png?raw=true'
    document.getElementById('desc').innerHTML =
      '👀영화 보는거 좋아해요.👀'
  }
  
  function showms() {
    document.getElementById('fig').src = 'https://github.com/euuni/website/blob/main/img/music.png?raw=true'
    document.getElementById('desc').innerHTML =
      '🎧︎음악듣기 좋아해요.🎧︎ '
  }
function hide() {
    document.getElementById('fig').src = ''
    document.getElementById('desc').innerHTML = ''
  }
