'use strict';
{
  function draw() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const canvasContext = canvas.getContext('2d');
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }
  window.addEventListener('load', draw);
}
