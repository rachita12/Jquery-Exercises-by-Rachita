function Manipulator(targetElement) {
  "use strict"
  this.targetElement = targetElement;
}
Manipulator.prototype = {
  /*part A = Add 5 new items to list "#myList"*/
  newItemsToList: function (){  
    this.targetElement.append("<li>Class Section - E</li>");
    this.targetElement.append("<li>Class Section - F</li>");
    this.targetElement.append("<li>Class Section - G</li>");
    this.targetElement.append("<li>Class Section - H</li>");
    this.targetElement.append("<li>Class Section - I</li>");
  },
  
  /*part B = Removing odd items from unordered lists.*/
  removeOddItems: function(){ 
    this.targetElement.remove();
  },

  /*part C = Finds the list elements with class "current" and removes class from those elements and set class 
    of the next element as "current". To check whether the class was assigned or not, we turn the background 
    to orange.*/
  appendContent: function() {
    var count = this.targetElement.length;
    this.targetElement.eq(count-1).append("<h2>Above are the subjects available</h2>" + "<p>School has experienced teachers for every stream </p>");
  },
  
  /*part D = Adding option "wednesday" to select list.*/
  addOption: function(){
    this.targetElement.append("<option>Wednesday</option>");
  },

 /*part E*/
  addDiv: function(){
    var count = this.targetElement.length;
    this.targetElement.eq(count-1).after('<div></div>');
    var newCount = this.targetElement.length;
    $("#bbps").clone().appendTo(this.targetElement.eq(count-1));
  }
}


$(document).ready(function(){
  //part A
  var manipulate1 = new Manipulator($('#myList'));
  manipulate1.newItemsToList();
  //part B
  var manipulate2 = new Manipulator($("ul li:nth-child(even)"));
  manipulate2.removeOddItems();
  //part C
  var manipulate3 = new Manipulator($('.module'));
  manipulate3.appendContent();
  //part D
  var manipulate4 = new Manipulator($('#days'));
  manipulate4.addOption();
  //part E
  var manipulate5 = new Manipulator($('.module'));
  manipulate5.addDiv();
});