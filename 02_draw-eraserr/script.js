'use strict';
{
  const canvas = document.getElementById('canvas');

  // canvasがあるかチェック
  // あったらcontext用意、操作

  /* 
  [PROBLEM] よくよく考えたら lineTo で書いた線ってどうやって消すの？
  - lineToでかかれる線が何かを理解する必要があるよね？
  */

  if (canvas.getContext) {
    console.log('aru');

    /* 
    - 現在使われているパスの配列
    - 戻るボタンが押された時の、切り出されたパスを格納する配列
    - 戻るボタン
      - 
    - 次へボタン
      - 次配列から、戻るボタンに追加していく
    - 戻るボタン or 次へボタン後 -> 新しく書く -> 次配列を削除する
    */
  } else {
    console.warn('There is no support.');
  }
}
