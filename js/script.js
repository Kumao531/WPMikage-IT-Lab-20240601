document.addEventListener("DOMContentLoaded", function () {
    var textContainer = document.getElementById("textContainer");

    // コンテナの計算された高さを取得
    var computedHeight = textContainer.scrollHeight;

    // 計算された高さを表示
    console.log("Computed Height: " + computedHeight + "px");

    // 計算した高さをコンテナに設定（必要に応じて）
    textContainer.style.height = computedHeight + "px";
});
