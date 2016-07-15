function SearchBox(targetOnEvent) {
  "use strict"
  this.targetOnEvent = targetOnEvent;
}
SearchBox.prototype = {
  /* part A = Set the value of the search input to the text of the label element*/
  changeLabel : function() {
    var _this = this;
    _this.targetOnEvent.keyup(function(){
      ($('label')).html($('.input_text').val());
    });
  },
  
  /* part B = add a class "hint" to search input*/
  addClassToSearch: function() {
    this.targetOnEvent.addClass("hint");
  },
  
  /*part C = Remove the label element*/
  removeLabel : function() {
    this.targetOnEvent.remove();
  },
  /*part D = Bind a focus event to the search input that removes the hint text and the "hint" class*/
  onFocusEvent : function() {
    this.targetOnEvent.focus(function(){
      $(this).val("");
      $(this).removeClass("hint");
    });
  },
  
  /*part E = Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered*/
  onBlurEvent : function(){
    this.targetOnEvent.blur(function(){
      var searchValue = $(this).val();
      if(searchValue == null || searchValue == ""){
        $(this).addClass("hint");
      }
    });
  }
}
$(document).ready(function(){
  //part A
  var event1 = new SearchBox($('.input_text'));
  event1.changeLabel();
  //part B
  var event2 = new SearchBox($('.input_text'));
  event2.addClassToSearch();
  //part C
  var event3 = new SearchBox($('label'));
  event3.removeLabel();
  //part D
  var event4 = new SearchBox($('.input_text'));
  event4.onFocusEvent();
  //part E
  var event5 = new SearchBox($('.input_text'));
  event5.onBlurEvent();
});
//END