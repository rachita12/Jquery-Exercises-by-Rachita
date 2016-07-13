function Traversal(traverseThrough) {
  "use strict"
  this.traverseThrough = traverseThrough;
}
Traversal.prototype = {
  /*part A = Stores all the "alt" value of all the images and displays it in an alert box*/
  displayAlternateImageValues: function (){
    var altNum = [];
    var i = 0;
    while( i < $('img[alt]').length){
      this.traverseThrough.each(function(){
        if($(this).attr("alt")){
          altNum[i] = $(this).attr("alt");
          i++;
        }
      });
    }
    alert("Alt attributes' value for all the images having 'alt' are = " + altNum);
  },

  /*part B = This does to the "#search" input box then traverse up till it finds "form" and then adds a class to form
  which we check by giving the class a background color of pink.*/
  addClassToForm: function(){
    this.traverseThrough.addClass("firstForm");
  },

  /*part C = Finds the list elements with class "current" and removes class from those elements and set class
  of the next element as "current". To check whether the class was assigned or not, we turn the background
  to orange.*/
  removeAndAddClass: function() {
    var _this = this;
    var list = this.traverseThrough.find('li');
    this.traverseThrough.find('li.current').each(function(){
      var itemIndex = list.index(this);
      console.log(itemIndex);
      list.eq(itemIndex).removeClass("current");
      list.eq(itemIndex+1).addClass("current");
    });
  },

  /*part D = We go to the selected item of the list. Then to its closest('p') then to its sibling "submit" button. We provide
  a border to check the traversing.*/
  traverseToSubmit: function(){
    this.traverseThrough.addClass("submitBtn");
  },

  /*part E = Finds the first element of the list "#slideshow" and add a class "current" to its frist item and
  a class "disabled" to the next. We set the backgroundColor to check proper traversing*/
  addClassToNext: function(){
    var index = 0;
    this.traverseThrough.eq(index).addClass("current");
    this.traverseThrough.eq(index+1).addClass("disabled");
  }
}

$(document).ready(function(){
  //part A
  var traverse1 = new Traversal($('.bbps'));
  traverse1.displayAlternateImageValues();
  //part B
  var traverse2 = new Traversal($('#search').closest("form"));
  traverse2.addClassToForm();
  //part C
  var traverse3 = new Traversal($('#myList'));
  traverse3.removeAndAddClass();
  //part D
  var traverse4 = new Traversal($('#specials').find(":selected").closest('p').siblings(":submit"));
  traverse4.traverseToSubmit();
  //part E
  var traverse5 = new Traversal($('#slideshow li'));
  traverse5.addClassToNext();
});