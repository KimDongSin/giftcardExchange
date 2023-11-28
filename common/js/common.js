(function () {

    function headerPopup() {
        // 헤더 팝업 닫기
        // pc
        if (window.innerWidth >= 768) {
            $('#closeBtn').on('click', function () {
                $('.header_popup').hide();
                $('.wrap').css({
                    'padding-top': '0'
                });
            });
        } else {
            $('#closeBtn').on('click', function () {
                $('.header_popup').hide();
                $('.wrap').css({
                    'padding-top': '55px'
                });
                $('header').css({
                    'top': '0',
                });
            });
        }

    }

    function init() {
        headerPopup();
    }

    // 모바일 삼단바 버튼 클릭
    $('#mBarBtn').on('click', function () {
        $(this).hide();
        $('#mCloseBtn').show();

        $('header').css({
            'height': '100vh'
        })
    });

    // 모바일 삼단바 버튼 클릭
    $('#mCloseBtn').on('click', function () {
        $(this).hide();
        $('#mBarBtn').show();

        $('header').css({
            'height': '55px'
        })
    });

    init();

})()