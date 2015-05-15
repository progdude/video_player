var vid = document.getElementById("vid"); 
vid.pause();

var vids = ["http://www.quirksmode.org/html5/videos/big_buck_bunny.webm", "http://www.w3schools.com/tags/mov_bbb.webm"];
var count=0;

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'play': function() {
      vid.play();
    },
	  
	 'stop': function() {
      vid.pause();
    },
	  
	  'sound': function(){
		  vid.muted =false;
	  },
	  
	  'no sound': function(){
		  vid.muted =true;
	  },
	  
	  'change movie': function(){
		  if(count==0){
			  count = count+1;
			  vid.src = vids[count];
		  }
		  else if(count==1){
			  count = count-1;
			  vid.src = vids[count];
		  }
	  },

	  
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}

else{
	alert('not possible');
}
