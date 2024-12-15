'use strict';
{
  function draw() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }
  window.addEventListener('load', draw);
}
