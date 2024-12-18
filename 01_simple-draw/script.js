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
      - beginPath, lineTo()
    */

    /* 
      線のデザイン: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles
    */

    /* 
    - mousedown: もちろんマウスをおろしたとき、クリックした時発動する
    - mouseenter, mouseleave, mouseout -> 画面領域に入った時、出た時まわりの動き
    - mousemove: 要素にはいって動いている間
    */
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;

      ctx.beginPath();
      ctx.strokeStyle = '#ff1493';
      ctx.lineWidth = 8;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      ctx.lineTo(e.clientX - canvasX, e.clientY - canvasY);
      ctx.stroke();

      canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
          ctx.lineTo(e.clientX - canvasX, e.clientY - canvasY);
          ctx.stroke();
        }
      });
    });

    canvas.addEventListener('mouseup', (e) => {
      isDrawing = false;
    });

    canvas.addEventListener('mouseout', (e) => {
      isDrawing = false;
    });
  } else {
    console.warn('There is no support.');
  }
}
