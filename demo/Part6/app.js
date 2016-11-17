
var image1 = "http://deelay.me/1000/https://dummyimage.com/100x100/0062ff/fff&text=Image1";

var image2 = "http://deelay.me/1000/https://dummyimage.com/100x100/0062ff/fff&text=Image2";

var image3 = "http://deelay.me/1000/https://dummyimage.com/100x100/0062ff/fff&text=Image3";



function getImage(url, callback, error){
    var img = new Image()
    img.onload = function(){
        callback()
    }
    img.onerror = function(){
        error()
    }
    img.src = url
    var src = document.getElementById("container");
    src.appendChild(img);
}

function getImagePromise(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        var src = document.getElementById("container");
        src.appendChild(img);
        img.src = url
    })
}

getImagePromise(dog1).then(function(){
    return getImagePromise(dog1)
}).then(function(){
    return getImagePromise(dog2)
}).then(function(){
    return getImagePromise(dog3)
}).then(function(){
    alert("done");
})

getImage(dog1, function(){
    getImage(dog2, function(){
        getImage(dog3, function() {
            alert("done");
        })
    })
})