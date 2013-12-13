function holidayMessage(){
	var holidayGreeeting=4;
	var todaysDate= new Date;

	switch(true){
		case (todaysDate.getMonth()==11 && todaysDate.getDate()==25):
			holidayGreeeting = 'Merry Christmas!';
			break;
		case (todaysDate.getMonth()==6 && todaysDate.getDate()==4):
			holidayGreeeting = 'Happy Fourth!';
			break;
		case (todaysDate.getMonth()==10 && todaysDate.getDay()==4 && todaysDate.getDate()<29 && todaysDate.getDate()>21):
			holidayGreeeting = 'Happy Thanksgiving!';
			break;
		default:
			holidayGreeeting = null;
	};

	if (holidayGreeeting){
		$('body').prepend('<div style="text-align:center;background:lightblue;padding:5px;">'+holidayGreeeting+'</div>');
	};
};

holidayMessage();