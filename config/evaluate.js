module.exports = function(key, user){
	switch(user.local.level){
		case 0:
			if(key === 'thisisthekeytozerolevel'){
				return 1;
			}
			else return 0;
		case 1:
			if(key === user.local.password){
				return 1;
			}
			else return 0;
		case 2:
			if(key === "india"){
				return 1;
			}
			else return 0;
		case 3:
			if(key === "abhigyanrocks"){
				return 1;
			}
			else return 0;
		case 4:
			if(key === "harry@iit"){
				return 1;
			}
			else return 0;
		case 5:
			if(key === "programmingisnojoke"){
				return 1;
			}
			else return 0;
		default:
			return 0;
	}
}
