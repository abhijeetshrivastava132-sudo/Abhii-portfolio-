document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});

document.addEventListener('copy', function(event){
    event.preventDefault();
});

document.addEventListener('cut', function(event){
    event.preventDefault();
});

document.addEventListener('selectstart', function(event){
    if(event.target.matches('input, textarea')) return;
    event.preventDefault();
});

let lastTouchEnd = 0;

document.addEventListener('touchend', function(event){
    const now = Date.now();

    if(now - lastTouchEnd <= 300){
        event.preventDefault();
    }

    lastTouchEnd = now;
}, { passive:false });

function openPortfolioFrame(url){
    const oldFrame = document.querySelector('.portfolio-frame-wrap');
    if(oldFrame) oldFrame.remove();

    const frameWrap = document.createElement('div');
    frameWrap.className = 'portfolio-frame-wrap';

    const frame = document.createElement('iframe');
    frame.className = 'portfolio-frame';
    frame.setAttribute('title', 'Portfolio page');
    frame.src = url;

    frameWrap.appendChild(frame);
    document.body.appendChild(frameWrap);

    frame.addEventListener('load', function(){
        try{
            const path = frame.contentWindow.location.pathname;
            const isHome = path.endsWith('/') || path.endsWith('/index.html');

            if(isHome){
                frameWrap.remove();
            }
        }catch(error){}
    });
}

if(document.body.classList.contains('home-body')){
    document.querySelectorAll('a[href^="pages/"]').forEach(function(link){
        link.addEventListener('click', function(event){
            event.preventDefault();
            openPortfolioFrame(link.getAttribute('href'));
        });
    });
}
