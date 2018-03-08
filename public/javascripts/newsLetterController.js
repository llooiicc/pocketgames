document.querySelector('body').focus();
document.querySelector('#email-input').addEventListener('focus', setFooterPosition());


function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

function setFooterPosition(){

    if(detectmob()){
        console.log('[news letter controller] focus detected on mobile device');
        document.querySelector('.footer').style.display = 'none';

    }
}

