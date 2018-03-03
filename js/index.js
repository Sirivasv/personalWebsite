
var currentActive = null;



window.onload = function() {
	var contactSelector = document.getElementById('contactSelector');
		contactSelector.addEventListener(
			'click',
			function(ev) {
                document.documentElement.scrollTop = $('#contact').position().top;
            }
        );

    var homeSelector = document.getElementById('homeSelector');
		homeSelector.addEventListener(
			'click',
			function(ev) {
                document.documentElement.scrollTop = 0;        
            }
        );
  
  	var workSelector = document.getElementById('workSelector');
		workSelector.addEventListener(
			'click',
			function(ev) {
                document.documentElement.scrollTop = $('#workExperience').position().top;        
            }
        );

    var projectSelector = document.getElementById('projectSelector');
		projectSelector.addEventListener(
			'click',
			function(ev) {
                document.documentElement.scrollTop = $('#projects').position().top;        
            }
        );

}