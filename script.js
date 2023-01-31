const climber = document.querySelector('img:nth-of-type(3)');
const flag = document.querySelector('img:nth-of-type(2)');
let counter = 0;
const rope = document.querySelector('.rope');
const bungee = document.querySelector('.bungee');
let mountainsCounter = 0;

function descent(event) {
  if (event.key === 'ArrowRight') {
    flag.style.display = 'none';
    rope.style.display = 'block';
    bungee.style.display = 'block';
    let pos = 1744;
    let verticalPose = 810;
    function frame() {
      if (pos === 544) {
        if (verticalPose === 0) {
          counter = 0;
          climber.className = 'position0';
          rope.style.display = 'none';
          bungee.style.display = 'none';
          climber.style.left = '';
          climber.style.bottom = '';
          bungee.style.bottom = '939px';
          rope.style.bottom = '939px';
          document.addEventListener('keydown', climbFunction);
          clearInterval(interval);
        } else {
          rope.style.bottom = verticalPose + 128 + 'px';
          bungee.style.bottom = verticalPose + 128 + 'px';
          climber.style.bottom = verticalPose + 'px';
          verticalPose -= 2;
        }
      } else {
        pos -= 2;
        rope.style.left = pos + 59 + 'px';
        bungee.style.left = pos + 33 + 'px';
        climber.style.left = pos + 'px';
      }
    }
    const interval = setInterval(frame, 10);
    document.removeEventListener('keydown', descent);
  }
}

function climbFunction(event) {
  if (event.key === 'ArrowRight') {
    counter += 1;
    climber.className = `position${counter}`;
  }
  if (event.key === 'ArrowLeft' && counter !== 0) {
    counter -= 1;
    climber.className = `position${counter}`;
  }
  if (counter === 10) {
    mountainsCounter += 1;
    document.querySelector(
      'span',
    ).innerText = `Гор покорено - ${mountainsCounter}`;
    flag.style.display = 'block';
    document.removeEventListener('keydown', climbFunction);
    document.addEventListener('keydown', descent);
  }
}

document.addEventListener('keydown', climbFunction);
