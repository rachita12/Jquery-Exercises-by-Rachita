function SlideShow(slideDiv, slideList,width,animationSpeed,pause){
  this.slideDiv = slideDiv;
  this.slideList = slideList;
  this.width = width;
  this.animationSpeed = animationSpeed;
  this.pause = pause;
  this.currentSlide=1;
  this.interval;
}
SlideShow.prototype = {
  //Bring '#slideshow' to the top and add a Div to it
  toTheTop : function() {
    this.slideList.insertBefore('#header');
    this.slideList.wrap( "<div class=" + this.slideDiv + "></div>" );
  },
  startSlider : function() {
    var _this = this;
    this.interval = setInterval(function() {
      _this.slideList.animate({'margin-left': '-='+_this.width}, _this.animationSpeed,function(){
        if(_this.currentSlide >= _this.slideList.find('li').length ){
          _this.currentSlide =1;
          _this.slideList.css('margin-left',0);
        }
        _this.currentSlide++;
      });
    },_this.pause);
  },
  navigation : function(){
    var listLength = this.slideList.find('li').length;
    for(var i =0; i < listLength; i++){
      this.slideList.find('li').eq(i).append("<span>Total images = " + listLength  + " Now viewing = " + this.slideList.find('h2').eq(i).text() + "</span>" );
    }
  },
  startAgain: function(){
    var _this = this;
    this.slideList.mouseleave(function() {
      _this.startSlider();
    });
  },
  pauseSlider: function() {
    var _this = this;
    this.slideList.hover(function(){
      clearInterval(_this.interval);
    });
  }
}

$(document).ready(function(){
  var slide = new SlideShow('slideContainer',$('#slideshow'),600,1000,3000);
  slide.toTheTop();
  slide.navigation();
  slide.pauseSlider();
  slide.startAgain();
  slide.startSlider();
});
