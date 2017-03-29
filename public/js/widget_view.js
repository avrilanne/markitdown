var WidgetView = function() {
// this.input = $('.textarea').val();
this.output = $('.output-span');
}

WidgetView.prototype.input = function(){
  return $('.textarea').val();
}
