const cust_li = $('.cust_tab > ul > li');
const cust_tab01 = $('#cust_tab01');
const cust_tab02 = $('#cust_tab02');
const cust_tab03 = $('#cust_tab03');

var list = cust_li.length;

cust_li.on('click', function() {
    $(this).addClass('underLine');
    cust_li.not($(this)).removeClass('underLine');
});










