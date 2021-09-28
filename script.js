
function time(){
    var today = new Date();
    var hour = today.getHours();
    hour=hour%12;
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var date = today.getDate();
    var month = today.getMonth();
    var greeting;
    var session;
    var months =['Jan' , 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
    month= months[month];
    var year = today.getFullYear();



    if( hour < 12 ){
        greeting='Good Morning';
        session = 'AM';
    }else if( hour > 12 && hour < 20  ){
        greeting='Good Evening';
        session = 'PM';
    }else{
        greeting ='Good Night';
        session = 'PM';
    }


    
    if (hour==0){
        hour = 12;
    }

    if (hour < 10) {
		hour = '0' + hour;
	}
	if (min < 10) {
		min = '0' + min;
	}
	if (sec < 10) {
		sec = '0' + sec;
	}


    var time = hour + ':' + min + ':' + sec + ':' + session;
	var fullDate = date + ' ' + month + ' ' + year;

	document.querySelector('.greeting').innerHTML = greeting;
	document.querySelector('.time').innerHTML = time;
	document.querySelector('.date').innerHTML = fullDate;
}

time();

