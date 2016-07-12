function Navigator(navigateThrough){
  "use strict"
  this.navigateAround = $('.module');
  this.navigateThrough = navigateThrough;
}
Navigator.prototype = {
  /*Hide all the ".modules"*/
  hideModules : function() {
    this.navigateThrough.each(function(){
      $(this).hide();
    });
  },
  
  /*Creating unordered list before first "div.module"*/
  createNavigationList : function() {
    this.navigateThrough.eq(0).before('<h2>Click your desired option</h2>');
    this.navigateThrough.eq(0).before('<ul id = "navNew"></ul>');
  },
  
  /*Adding elements to Navigation List*/
  addNavigationListItem : function(){
    var _this = this;
    this.navigateAround.each(function() {
      var heading = $(this).find('h2').text();
      _this.navigateThrough.append("<li>" + heading + "</li>");
    });
  },
  
  /*Show divs when corresponding list item is clicked*/
  showWhenClicked : function() {
    var _this = this;
    this.navigateThrough.click(function(){
      var index = $(this).index();
      var countModule = _this.navigateAround.length;
      for(var i = 0; i < countModule; i++ ){
        if(i == index){
          for(var j = 0; j < countModule; j++ ){
            if(j == index){
              _this.navigateThrough.eq(j).addClass("current");
            }
            else{
              _this.navigateThrough.eq(j).removeClass("current");
            }
          }
          _this.navigateAround.eq(i).show();
        }
        else{
          _this.navigateAround.eq(i).hide();
        }
      }
    });
  },
  
  /*Show the first tab*/
  showFirstTAb : function() {
    this.navigateAround.eq(0).show();
    this.navigateThrough.eq(0).addClass("current");
  }
}
$(document).ready(function(){
  var step1 = new Navigator($('.module'));
  step1.hideModules();
  var step2 = new Navigator($('.module'));
  step2.createNavigationList();
  var step3 = new Navigator($('#navNew'));
  step3.addNavigationListItem();
  var step4 = new Navigator($('#navNew li'));
  step4.showWhenClicked();
  var step5 = new Navigator($('#navNew li'));
  step5.showFirstTAb();
});