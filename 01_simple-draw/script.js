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

    // canvasのサイズ、位置情報を取得
    const canvasElementInfo = canvas.getBoundingClientRect();
    console.log(canvasElementInfo);

    // x、yを定義、のちにマウスの位置との計算に使用
    const canvasX = canvasElementInfo.x;
    const canvasY = canvasElementInfo.y;
    console.log(canvasX, canvasY);

    let isDrawing = false;

    /* 
      [PROBLEM] 絵をかけるようになったけど、マウスをはやく動かすと線が途切れる
    */

    /* 
    - mousedown: もちろんマウスをおろしたとき、クリックした時発動する
    - mouseenter, mouseleave, mouseout -> 画面領域に入った時、出た時まわりの動き
    - mousemove: 要素にはいって動いている間
    */
    window.addEventListener('mousedown', (e) => {
      isDrawing = true;
      console.log('mouse down');
      // console.log(e.clientX - canvasX, e.clientY - canvasY);
      // ctx.fillRect(e.clientX - canvasX, e.clientY - canvasY, 5, 5);

      ctx.beginPath();

      canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
          // console.log(e.clientX, e.clientY);
          // ctx.fillRect(e.clientX - canvasX, e.clientY - canvasY, 5, 5);
          ctx.lineTo(e.clientX - canvasX, e.clientY - canvasY);
          ctx.stroke();
        }
      });
    });

    window.addEventListener('mouseup', (e) => {
      isDrawing = false;
      console.log('mouse up');
    });
  } else {
    console.warn('There is no support.');
  }
}
