//<![CDATA[
$(document).ready(function () {
    if ($("#rcredit").attr("href") != "http://saparakanca-theme.tumblr.com/") {
        window.location.href = "http://ridhan.tumblr.com";
    }
});
//]]>
$('[rel=tooltip]').tooltip(); 
$('.photoset-grid').photosetGrid({
    gutter: '5px',
    
    onInit: function(){},
    onComplete: function(){
        $('.photoset-grid');
    }
});
