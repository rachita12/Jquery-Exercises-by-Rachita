function Items(btnId,containerDiv) {
  "use strict"
  this.btnId = btnId;
  this.containerDiv = containerDiv;
  this.count = 0;
}
Items.prototype = {
  addDiv : function() {
    var _this = this;
    this.btnId.click(function(){
      _this.containerDiv.append("<div>"+ _this.count + "</div>");
      _this.count++;
    });
  },
  highlightDiv : function() {
  var _this = this;
    this.containerDiv.delegate("div","click",function() {
      var __this = $(this);
      __this.addClass("itemDiv");
      var index = __this.index();
      if(index == _this.count-1){
        __this.remove();
        _this.count--;
      }
    });
  },
  bindEvents : function() {
    this.addDiv();
    this.highlightDiv();
  }
}
$(document).ready(function(){
  var newItem = new Items($('.btn'),$('.container'));
  newItem.bindEvents();
});