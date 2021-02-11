


  $(document).ready(function()
  {

	$(".notif-scroll").niceScroll({
		cursorcolor:"#748a96",
		cursorwidth:"7px",
		cursorheight:"7px",
		cursorborder:"none",
		cursorborderradius: "25px"
	  });

  })

  $(".fa-eye").on("mouseenter",function()
  {
	$(this).prev().attr("type","text");
  })

  $(".fa-eye").on("mouseleave",function()
  {
	$(this).prev().attr("type","password");
  })