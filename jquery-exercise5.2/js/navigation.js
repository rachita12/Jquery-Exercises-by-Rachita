function Navigator(navId){
	"use strict"
	this.navId = navId;
}
Navigator.prototype = {
	dropDown : function() {
		var _this = this;
		this.navId.hover(function(){
			$('ul', this).stop().addClass("dropDownMenu");
		},
		function() {
			$('ul',this).stop().removeClass("dropDownMenu");
    });
	}
}
$(document).ready(function(){
	var dropMenu = new Navigator($('#nav li'));
	dropMenu.dropDown();
});