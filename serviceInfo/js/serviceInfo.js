const svcinfo_li = $('.svcinfo_tab > ul > li');
const svcinfo_tab01 = $('#svcinfo_tab01');
const svcinfo_tab02 = $('#svcinfo_tab02');
const svcinfo_tab03 = $('#svcinfo_tab03');

var list = svcinfo_li.length;



svcinfo_li.on('click', function() {
    $(this).addClass('underLine');
    svcinfo_li.not($(this)).removeClass('underLine');
});

svcinfo_tab01.on('click', function() {
    if(window.innerWidth > 767){
        $('.serviceInfo_tab01').css({'display':'block'});
        $('.serviceInfo_tab02').css({'display':'none'});
        $('.serviceInfo_tab03').css({'display':'none'});

    }else{
        $('.serviceInfo_tab01_m').css({'display':'block'});
        $('.serviceInfo_tab02_m').css({'display':'none'});
        $('.serviceInfo_tab03_m').css({'display':'none'});
    }
});

$('#svcinfo_tab02').on('click', function() {
    if(window.innerWidth > 767){
        $('.serviceInfo_tab01').css({'display':'none'});
        $('.serviceInfo_tab02').css({'display':'block'});
        $('.serviceInfo_tab03').css({'display':'none'});
    }else{
        $('.serviceInfo_tab01_m').css({'display':'none'});
        $('.serviceInfo_tab02_m').css({'display':'block'});
        $('.serviceInfo_tab03_m').css({'display':'none'});
    }
});

$('#svcinfo_tab03').on('click', function() {
    if(window.innerWidth > 767){
        $('.serviceInfo_tab01').css({'display':'none'});
        $('.serviceInfo_tab02').css({'display':'none'});
        $('.serviceInfo_tab03').css({'display':'block'});
    }else{
        $('.serviceInfo_tab01_m').css({'display':'none'});
        $('.serviceInfo_tab02_m').css({'display':'none'});
        $('.serviceInfo_tab03_m').css({'display':'block'});
    }
});







