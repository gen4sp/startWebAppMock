/* eslint-disable no-console */
window._puppeteerShouldSkipFrameFlag = true;
document.addEventListener('DOMContentLoaded', function(){ 
    window._puppeteerstartCapture = function(){
        window._puppeteerShouldSkipFrameFlag = false;
    }
}, false);
