// $('.pull-down').each(function() {
// 		$(this).css('margin-top', $(this).parent().height()-$(this).height())
// 	});
$(document).ready(function () {


	$('#contactButton').on('click',function(){
            $('html, body').animate({scrollTop: $("#emailForm").offset().top});
        });
});

