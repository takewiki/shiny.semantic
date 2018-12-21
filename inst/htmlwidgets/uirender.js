HTMLWidgets.widget({
  name: 'uirender',
  type: 'output',

  factory: function(el, width, height) {
    return {
      renderValue: function(x) {
        var tag_js = "<script src='https://d335w9rbwpvuxm.cloudfront.net/semantic.min.js'></script>"
        var tag_css = "<link href='https://d335w9rbwpvuxm.cloudfront.net/semantic.min.css' rel='stylesheet'>"
        el.innerHTML = tag_js + tag_css + x.ui;
        },

      resize: function(width, height) {
        // TODO: code to re-render the widget with a new size
      }
    };
  }
});
