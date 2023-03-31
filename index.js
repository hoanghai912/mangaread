file_path = 'chap1\\'

for (let i = 1; i < 13; i++) {
    text = file_path + i + '.jpg'
    // console.log(text)
    var img = document.createElement("img")
    img.src = text
    $(".image").append(img)
}
