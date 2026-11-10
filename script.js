// HTMLの「h1」タグと「p」タグをプログラムに持ってくる
const titleElement = document.querySelector("h1");
const contentElement = document.querySelector("p");

// 文字を書き換える
titleElement.textContent = "JavaScriptで書き換えました";
contentElement.textContent = "ボタンを押すなどのアクションも設定できます。";
