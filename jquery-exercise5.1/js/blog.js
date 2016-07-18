function Blog(blogId, textId){
  "use strict"
  this.blogId = blogId;
  this.textId = textId;
}
Blog.prototype = {
  showContent : function() {
    var _this = this;
    this.blogId.click(function() {
      var index = $(this).index();
      for(var i = 0; i < _this.blogId.length; i++){
        if(i == index){
          _this.textId.eq(i).slideDown("slow");
        }
        else{
          _this.textId.eq(i).slideUp();
        }
      }
      return false;
    });
  }
}
$(document).ready(function(){
  var blogData = new Blog($('#blog li'), $('.excerpt'));
  blogData.showContent();
});