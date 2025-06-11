(function () {
    function IsPC() {
        var userAgentInfo = window.navigator.userAgent;
        var flag = true;
        if (userAgentInfo.indexOf('Mobile') != -1 || screen.width <= 750) {
        flag = false;
        
        }
        return flag;
    }
    var dom=document.getElementById('videosid');
    var data=document.getElementById('videosid').getAttribute('data');
    if(dom){
        if(IsPC()){
            var sp=document.createElement('script');
            sp.src='daima/m_video.js';
            sp.id='videodataid';
            sp.setAttribute('data',data);
            document.body.appendChild(sp);
        }
    }
})()