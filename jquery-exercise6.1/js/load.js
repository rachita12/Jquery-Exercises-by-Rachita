function BlogData(blogDiv){
	this.blogDiv = blogDiv;
	this.blogList = this.blogDiv.find('li');
	this.blogLength = this.blogList.length;
}
BlogData.prototype = {
  //Provide a Div after every heading elementFromPoint
  provideDiv : function() {
    for(var i = 0; i < this.blogLength; i++){
      $('<div></div>').insertAfter(this.blogDiv.find('h3').eq(i));
      this.blogDiv.find('div').eq(i).data('reference',this.blogDiv.find('h3').eq(i).text());
		}
  },
	//Loads specific content 
	loadContent : function() {
		this.blogList.click(function() {
			var index = $(this).index();
			$(this).find('div').load("blog.html div:nth-child(" + ++index + ")");
			return false;
		});
	}
}
$(document).ready(function(){
	var blog = new BlogData($('#blog'));
	blog.provideDiv();
	blog.loadContent();
});