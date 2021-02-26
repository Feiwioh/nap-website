function getMainPath() {
  var wholePath = window.location.pathname;
  var mainPath = wholePath.split("/");
  mainPath.pop();
  mainPath.pop();
  console.log(mainPath);
  return mainPath.join("/");
}

function BrowserDetection() {
  console.log("Chrome");
  if (navigator.userAgent.search("Chrome").toLowerCase().includes("chrome")) {
    console.log("Chrome");
  }
}