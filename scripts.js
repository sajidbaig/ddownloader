var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
var Drop = document.querySelector('.Drop-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value,Drop.value);
});
function sendURL(URL,type) {

    if(type=="youtube"){

        window.location.href = `http://localhost:3000/api/youtube?url=${URL}`;
    }
    else if(type=="tiktok"){
        window.location.href = `http://localhost:3000/api/tiktok?url=${URL}`;
    }
    else if(type=="twitter"){
        window.location.href = `http://localhost:3000/api/twitter?url=${URL}`;
    }
    else if(type=="facebook"){
        window.location.href = `http://localhost:3000/api/facebook?url=${URL}`;
    }
    else if(type=="instagram"){
        window.location.href = `http://localhost:3000/api/instagram?url=${URL}`;
    }
    else if(type=="snapchat"){
        window.location.href = `http://localhost:3000/api/snapchat?url=${URL}`;
    }
    else if(type=="pinterest"){
        window.location.href = `http://localhost:3000/api/pinterest?url=${URL}`;
    }
}