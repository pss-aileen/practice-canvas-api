'use strict';
{
  /* 
    [仕様]
    - ペイントの色は黒でOK
    - とにかくベーシックに線がかければOK
  */

  // カンバスの背景の指定方法は？
  // カンバスを枠でくくるには
  const canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillRect(10, 10, 100, 100);

    let isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = !isDrawing;

      canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
          console.log(e.clientX, e.clientY);
          ctx.fillRect(e.clientX, e.clientY, 5, 5);
        }
      });
    });
  } else {
    console.warn('There is no support.');
  }
}
