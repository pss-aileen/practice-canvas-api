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

  // マウスダウンしてる間は？？
  let isDrawing = false;

  window.addEventListener('mousedown', (e) => {
    isDrawing = !isDrawing;

    window.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        console.log(e.clientX, e.clientY);
      }
    });
  });
}
