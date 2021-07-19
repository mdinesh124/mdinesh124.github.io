$(document).ready(function() 
{

    $(window).scroll(function() 
	{
        if (this.scrollY > 20) 
		{
            		$('.navbar').addClass("sticky");
        	} 
	else 
		{
            		$('.navbar').removeClass("sticky");
        	}
    	});

    $('.menu-btn').click(function() 
		{
        		$('.navbar .menu').toggleClass("active");
        		$('.menu-btn i').toggleClass("active");
    		});

//scroll text
var typed = new Typed(".type", {
        strings: ["Student", "Code enthusiast", "Web Developer", "Melomaniac"],
        typeSpeed: 70,
        backSpeed: 75,
        loop: true
    });


});










function openNav() {
	document.getElementById("mySidebar").style.width = "50%";
	document.getElementById("main").style.marginRight = "50%";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginRight= "0";
  }




  










