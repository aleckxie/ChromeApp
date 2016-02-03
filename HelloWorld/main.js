//chrome launched the app first time
chrome.app.runtime.onLaunched.addListener(function (launchData){

  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height= 300;
  // create window
  chrome.app.window.create("index.html",  {
  	id : "myWindow1",
  	outerBounds :{
  		width : width,
  		height : height,
        maxWidth : screenWidth,
        maxHeight : screenHeight
  	}
  });
});