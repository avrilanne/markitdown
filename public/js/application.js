$(document).ready(function() {
  init();
});



var init = function(){
  var widgetView = new WidgetView();
  var widget = new Widget();
  // debugger
  var widgetController = new WidgetController(widgetView, widget);


  $(".textarea").keyup(widgetController.trigger.bind(widgetController));
}


