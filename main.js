var $aContainer = document.getElementById("animation-container");
var aContainerRect = $aContainer.getBoundingClientRect();
var start = aContainerRect.top;
var length = aContainerRect.height + 1000; //Height of the container plus a offset for better presentation
scrollAnimate({
  frames: {
    path: "frames/",
    prefix: "frame_",
    extension: "jpg",
    amount: 128,
    pad: "000"
  },
  parent: $aContainer,
  scroll: {
    start: start,
    length: length
  }
});
