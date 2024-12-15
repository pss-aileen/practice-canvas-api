'use strict';
{
  function draw() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }
  window.addEventListener('load', draw);
}
