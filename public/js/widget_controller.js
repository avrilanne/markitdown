var WidgetController = function(view, widget) {
  this.view = view;
  this.widget = widget;
  // return this
}

WidgetController.prototype.trigger = function() {

// debugger
  var output = this.widget.edit(this.view.input());

  $(".output-span").html(output);
}



