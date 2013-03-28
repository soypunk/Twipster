$(document).ready(function(){

  chrome.extension.sendMessage({method: "getFontSize"}, function(response) {
    if (response.status){
      var twipsterFontSize = response.status;
    } else {
      var twipsterFontSize = 20;
    };
    //$("body").addClass("tfs-" + twipsterFontSize); // Seems really hacky, but seemed to load faster.
  
    // This may be a better method for setting font-size, but has timing issues.
    $("<style id='twipster-settings' type='text/css'>.js-tweet-text { font-size: " + twipsterFontSize + "px !important; }</style>").appendTo("head");
  });

});
