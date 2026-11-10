// HTMLのパーツをJavaScriptで扱えるように用意する
const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

// ボタンがクリックされたときの動きを設定
submitBtn.addEventListener("click", () => {
    // 入力された文字をゲットする
    const inputValue = nameInput.value;

    // もし何も入力されていなかったら
    if (inputValue === "") {
        title.textContent = "何か入力してね！";
    } else {
        // 入力された文字を使ってタイトルを書き換える
        title.textContent = `こんにちは、${inputValue}さん！`;
    }
});
