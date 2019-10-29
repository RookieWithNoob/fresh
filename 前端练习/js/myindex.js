$(function() {
	//弹出框
	$("[data-toggle='popover']").popover();


	$('#nav').delegate('li','click',function() {
		$(this).addClass('active').siblings().removeClass('active');
	})

	var $message = $('#message');
	if ($message.text()==0) {
		$message.hide();
	}

	else if ($message.text()>0) {
		$message.show();
	}
})