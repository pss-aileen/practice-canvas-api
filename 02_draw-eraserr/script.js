'use strict';
{
  const canvas = document.getElementById('canvas');

  // canvasがあるかチェック
  // あったらcontext用意、操作

  /*
    [PROBLEM] よくよく考えたら lineTo で書いた線ってどうやって消すの？
    - lineToでかかれる線が何かを理解する必要があるよね？ -> notoにメモ
    [PROBLEM] x, ylineto,strokeあたりを関数化するとなぜか動かなかった
    - drawごとにやらないとだめかも
    - たぶん、関数宣言位置がmousedownの中身で、おかしなことになってたのかも。
    [PROBLEM] マウスがcanvasから出ると線ストップ
    - 将来的に: canvasの外に出て、描画していたとして、それが戻ってきた時に出た時の線と、入ってきた時の線が繋がるのはやめたい。
  */

  /* 
    - 現在使われているパスの配列
    - 戻るボタンが押された時の、切り出されたパスを格納する配列
    - 戻るボタン
      - 
    - 次へボタン
      - 次配列から、戻るボタンに追加していく
    - 戻るボタン or 次へボタン後 -> 新しく書く -> 次配列を削除する
    */

  if (canvas.getContext) {
    console.log('aru');
    // context準備
    const ctx = canvas.getContext('2d');

    // canvas内でのカーソル一を取得
    const canvasElementInfo = canvas.getBoundingClientRect();
    const canvasX = canvasElementInfo.x;
    const canvasY = canvasElementInfo.y;

    let isDrawing = false;

    const pathHistory = [];
    let currentPaths = [];
    let nextPaths = [];

    canvas.addEventListener('mousedown', (e) => {
      const mouseX = e.clientX - canvasX;
      const mouseY = e.clientY - canvasY;
      isDrawing = true;

      // ペンの設定
      ctx.strokeStyle = '#ff1493';
      ctx.lineWidth = 8;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      // 線の描画の開始
      ctx.beginPath();

      // クリック開始時に描画
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      currentPaths.push({ x: mouseX, y: mouseY });

      // マウスを動かすと描画
      canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
          const mouseX = e.clientX - canvasX;
          const mouseY = e.clientY - canvasY;
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          currentPaths.push({ x: mouseX, y: mouseY });
        }
      });
    });
    // マウスアップすると線ストップ
    canvas.addEventListener('mouseup', (e) => {
      if (isDrawing) {
        isDrawing = false;
        pathHistory.push(currentPaths);
        currentPaths = [];
        console.table(pathHistory);
      }
    });

    canvas.addEventListener('mouseout', (e) => {
      if (isDrawing) {
        isDrawing = false;
        pathHistory.push(currentPaths);
        currentPaths = [];
        console.table(pathHistory);
      }
    });
  } else {
    console.warn('There is no support.');
  }
}
