module.exports = function(num){
	switch(num){
		case 0: 
			var text = "Welcome to level 0<br>";
			text += "Here is your key 'thisisthekeytozerolevel' <br>";
			text += "Always Run 'submit'";
			return text;
		case 1:
			var text = "Welcome to level 1<br>";
			text += "The key to this level  is at '/level-1'"
			return text;
		case 2:
			var text = "Welcome to level 2<br>";
			text += "at '/level-dwitiya', Abhigyan always loves it baked good."
			return text;
		default:
			return "Level " + num + " not made yet.";
	}
}