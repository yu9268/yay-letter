const text = "いけめん";
for (let i = 0; i < 10; i++) {
    let letter = document.body.querySelector('a[class = "Button Button--orange Button--icon-letter-white"]');
    letter.click();
    let textarea = document.body.querySelector('textarea[class = "Letter__textarea"]');
    textarea.value = text;
    let btn = document.body.querySelector('button[class = "Button Button--green Button--icon-chat-send"]');
    btn.click();
}