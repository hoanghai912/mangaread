var i = 1
file_path = `chap${i}\\`
// console.log(file_path)
getNewChap()
loadImage(file_path)


function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    // console.clear()
    return http.status!=404;
}

function clearContent(element) {
    div = document.getElementsByClassName(element)
    while(div[0].firstElementChild){
        div[0].removeChild(div[0].firstElementChild);
    }
}

function loadImage(file_path){
    for (let i = 1; i < 20; i++) {
        text = file_path + i
        if (UrlExists(text + '.png') == true) {
            var img = document.createElement("img")
            img.src = (text + '.png')
            $(".image").append(img)
        }
        else if (UrlExists(text + '.jpg') == true){
            var img = document.createElement("img")
            img.src = (text + '.jpg')
            $(".image").append(img)
        }
    }
    console.clear()
}

function getNewChap(){
    var i = 1
    while (UrlExists(`chap${i}`)) {
        i += 1
    }
    newChap = document.getElementsByClassName('new-chap')
    newChap[0].innerHTML = `New chap: ${i-1}`
    newChap[1].innerHTML = `New chap: ${i-1}`
}


$('.pre-chap').click(() => {
    if (i != 1){
        i -= 1
        file_path = `chap${i}\\`
    }
    clearContent('image')
    loadImage(file_path)
})

$('.next-chap').click(() => {
    i += 1
    file_path = `chap${i}\\`
    clearContent('image')
    loadImage(file_path)
})

$('.submit-to-chap').click(() => {
    i = $('.to-chap').val()
    file_path = `chap${i}\\`
    clearContent('image')
    loadImage(file_path)
})