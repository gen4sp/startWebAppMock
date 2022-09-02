/* eslint-disable no-console */
window._puppeteerShouldSkipFrameFlag = true;
document.addEventListener('DOMContentLoaded', function(){ 
    document.body.startCapture = function(){
        window._puppeteerShouldSkipFrameFlag = false;
    }
}, false);
