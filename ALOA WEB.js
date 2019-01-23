layout('fr');			// FR keyboard layout
typingSpeed(0,0)	// Wait 100ms between key strokes + an additional random value between 0ms and 150ms (natural)

//waitLEDRepeat(NUM);		// Wait till NUM LED of target changes frequently multiple times (doesn't work on OSX)
press("GUI r");
delay(500);
type("http://172.16.0.1:8000/\n")
