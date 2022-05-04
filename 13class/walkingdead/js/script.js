document.querySelector('.zombieSong1').addEventListener('click', zombie1)
document.querySelector('.zombieSong2').addEventListener('click', zombie2)
document.querySelector('.zombieSong3').addEventListener('click', zombie3)



function zombie1() {
  const liElement = document.querySelector('ul')
  const div = document.querySelector('div')
  const p = document.querySelector('div p')
  const img = document.querySelector('div img')
  img.src = 'assets/zombie.jpeg'
  liElement.style.display = 'none';
  p.innerHTML = "Angelic Zombie Sounds"
  div.classList.toggle('hidden')
  let audio = document.querySelector('audio');
  let source = document.querySelector('source');
  console.log(source)
  audio.pause()
  source.src = "assets/Zombie-Breathing-A2-www.fesliyanstudios.com.mp3"
  audio.load()
  audio.play()
};


function zombie2() {
  const liElement = document.querySelector('ul')
  const div = document.querySelector('div')
  const p = document.querySelector('div p')
  const img = document.querySelector('div img')
  img.src = 'assets/zombie1.jpeg'
  liElement.style.display = 'none';
  p.innerHTML = "Happy Go Lucky Zombies"
  div.classList.toggle('hidden')
  let audio = document.querySelector('audio');
  let source = document.querySelector('source');
  audio.pause()
  source.src = "assets/Zombie-Breathing-C2-www.fesliyanstudios.com.mp3"
  audio.load()
  audio.play()
};


function zombie3() {
  const liElement = document.querySelector('ul')
  const div = document.querySelector('div')
  const p = document.querySelector('div p')
  const img = document.querySelector('div img')
  img.src = 'assets/zombie2.jpeg'
  liElement.style.display = 'none';
  p.innerHTML = "That First Taste Of Relaxation"
  div.classList.toggle('hidden')
  let audio = document.querySelector('audio');
  let source = document.querySelector('source');
  audio.pause()
  source.src = "assets/Zombie-Breathing-D1-www.fesliyanstudios.com.mp3"
  audio.load()
  audio.play()
};




document.querySelector('i').addEventListener('click', close)

function close() {
  const div = document.querySelector('div')
  const liElement = document.querySelector('ul')
  div.classList.toggle('hidden')
  liElement.style.display = 'block'
  let audio = document.querySelector('audio');
  let source = document.querySelector('source');
  audio.pause()
  source.src = "assets/Monster-Stake-Out_Looping.mp3"
  audio.load()
  audio.play()
}