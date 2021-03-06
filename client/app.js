'use stric'

const webrtc2Images = require('webrtc2images')

const rtc = new webrtc2Images({
	width: 200,
	height: 200,
	frames: 10,
	type: 'image/jpeg',
	quality: 0.4,
	interval: 200
})

rtc.startVideo(function(err){
	if (err) {
    	console.log(err);
  	}
})

const record = document.getElementById('record')

record.addEventListener('click', function (e) {
  e.preventDefault();
  rtc.recordVideo(function (err, frames) {
    if (err) {
      console.log(err);
    } else {
      console.log(frames);
    }
  });
});