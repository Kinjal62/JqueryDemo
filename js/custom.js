// 1st effect index.html
$(document).ready(function(){
	$(".button").click(function() {
		$(".box")
		.animate({ top: 0 })
		.delay(500)
		.fadeOut();
	});
})
// 2nd effect index.html
$(document).ready(function(){
	$(document).on('mousemove', function(e){
		if ( $('.circle:active').length ) {
			$('.circle').css('top', e.pageY - 100);
			$('.circle').css('left', e.pageX - 100);
		} 
	});
})
// 3rd effect ball moving indexball.html
$(document).ready(function(){
	$('#circle-ball').on("click", function(){
		$('.ball').animate({
			'left':400
		}, 2000, function(){
			$('.ball').animate({
				'left':0,
				'top':0
			})
		})
	})
})

// 4th effect dropdown demo.html
$(document).ready(function(){
	$('.dropdown_content .selected a span').click(function(){
		$('.dropdown_content .dropdown ul').toggle();
	});
	$('.dropdown_content .dropdown ul li  a').click(function(){
		var text = $(this).html();
		$('.dropdown_content .selected a span').html(text);
		$('.dropdown_content .dropdown ul').hide();
	});
	$('document').bind("click",function(e){
		var $clicked = $(e.target);
		if(! $clicked.parents().hasClass("dropdown_content")){
			$('.dropdown_content .dropdown ul').hide();
		}

	})
})

// 5th effect hide content demo.html
$(document).ready(function(){
	$('p').click(function(){
		$(this).hide();	
	})
	$('#btn1').click(function(){
		$('#p1').show();
	})
	$('#btn2').click(function(){
		$('#p2').css("color", "navyblue").slideUp(2000).slideDown(2000);
	});
})

// 6th hover effect & alert message demo.html
$(document).ready(function(){
	$('h4').hover(function(){
		alert("you entered h4");
	})
})


// 7th effect demo.html
$(document).ready(function(){
	$('#btn3').click(function(){
		$('#div1').animate({ height: '200px', width: '200px'});
	})
})

// remove content in div demo.html
$(document).ready(function(){
	$('#btn4').click(function(){
		$('#div2').remove();
	})
})

// custom checkbox indexball.html
$(document).ready(function(){
	var checkboxs = $('input[type=checkbox]');
	checkboxs.each(function(){
		$(this).wrap('<div class="customcheckbox"></div>');
		$(this).before('<span>&#10004;</span>');
	});

	checkboxs.change(function(){
		if($(this).is(':checked')){
			$(this).parent().addClass('customcheckboxchecked');
		} else {
			$(this).parent().removeClass('customcheckboxchecked');
		}
	});
})

// 8th effect custom select menu indexball.html
$(document).ready(function(){
	$('#selectmenu').change(function(){
		$('.colors').hide();
		$('#' + $(this).val()).show();
	});
});

// 9th effect set content
$(document).ready(function(){
	$('#btn5').click(function(){
		$('#p3').text("p1");
		$('#p3').append("Paragraph 1")
	});
	$('#btn6').click(function(){
		$('#p4').html("<b>p2</b>");
	})
	$('#btn7').click(function(){
		$('#p5').val("hi Kinjal");
	})
})

// custom loader
$(document).ready(function(){
	$(window).load(function(){
		$('.loader').fadeout('slow');
	})
})
// loader witn content
var myVar;

function myFunction() {
	myVar = setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "block";
}

// image change on hover effect index.html
$(document).ready(function(){
	$('.img_change').hover(function(){
		$(this).attr("src","./image/p4.jpeg");
	},function(){
		$(this).attr("src","./image/p6.jpeg")
	})
})
$(document).ready(function(){
	$('.drop_content').hover(function(){
		$('.drop').show();
	})
})

// background image parallax plugin
// $(document).ready(function() {
// 	$('.parallax-background').hover(parallaxBackground())
// });