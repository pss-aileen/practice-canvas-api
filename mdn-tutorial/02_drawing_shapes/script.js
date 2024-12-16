'use strict';
{
  function drawRect() {
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
  // window.addEventListener('load', drawRect);

  function drawTriangle() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      // パスをはじめると決める
      // ペンを持つ、描き始めるような感じだって
      ctx.beginPath();
      // 描き始めの場所を決める
      ctx.moveTo(75, 50);
      // ラインを描く
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      // 線を書くか、満たすか決める
      ctx.fill();
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }
  // window.addEventListener('load', drawTriangle);

  function drawSmile() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      // mathod: arc(x, y, radius, startAngle, endAngle, counterclockwise) clockwiseは右回りか左回りか
      ctx.arc(75, 75, 60, 0, Math.PI * 2, true);
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false);
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
      ctx.stroke();
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }

  // window.addEventListener('load', drawSmile);

  function drawTriangle2() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }

  // window.addEventListener('load', drawTriangle2);

  function drawArc() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      const x = 100;
      const y = 100;
      const radius = 50;
      // 円のスタート場所は右の中央なのね。
      const startAngle = (Math.PI / 180) * 0;
      const endAngle = (Math.PI / 180) * 90;
      const counterclockwise = false;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      ctx.stroke();
    } else {
      console.log('This browser dose not support Canvas API.');
    }
  }

  // window.addEventListener('load', drawArc);

  function drawBubble() {
    const canvas = document.getElementById('tutorial');

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }

  window.addEventListener('load', drawBubble);
}
