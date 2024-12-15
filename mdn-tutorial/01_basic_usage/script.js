'use strict';
{
  function draw() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200 0 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgb(0 0 200 / 50%)';
      ctx.fillRect(30, 30, 50, 50);
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }
  window.addEventListener('load', draw);
}
