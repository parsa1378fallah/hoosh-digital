let t = true
$('.lines').click(function(){
	if(t)
	{
		$('.responsive-nav-items').slideDown(1000);
		t = false;
	}
	else
	{
		$('.responsive-nav-items').slideUp(1000);
		t = true;
	}
	
})