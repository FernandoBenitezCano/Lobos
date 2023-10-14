
dropWolf();


function createWolf() {
  let wolf = document.createElement('img');
  wolf.classList.add('wolf');

  wolf.src= 'img/lobo.png';
  wolf.style.width = '300px';
  wolf.style.height = '200px';
  wolf.style.left = Math.random() * 100 + "vw";
  wolf.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(wolf);

  setTimeout(() => {
    wolf.remove();
  }, 4000);
};

function dropWolf() {
  setInterval(createWolf,500);
};
