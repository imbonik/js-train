var login = prompt ('Enter login','');
var pass;
	
if (login == 'admin') {
	
	pass = prompt ('Enter pass','');
	
	if (pass == 'Black Master') {
       alert ('Welcome!');
	   } else if (pass == null) {
	   alert ('Login canceled!');
	   } else {
	   alert ('Invalid password!');  
	   }
	   
} else if (login == null) {
  alert ('Login canceled!');

	   
} else {
	
  alert ('GET OFF!');
	   
}