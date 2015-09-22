// Question 1
function q1(){
		document.write(" mobile number: +97798********");
		var cellNum = prompt("Enter mobile number to check:");
		var check = /^(\+97798)([0-9]{8})$/; 		// Regular Expression that checks number starting with +97798 and eight numbers behind it.
		document.write("<br>You entered <b>"+cellNum+"</b>");
		if(cellNum.match(check)){
			document.write("<br><br>Entered phone number is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered phone number is <b>INVALID.</b>");
		}
	}
	
// Question 2
function q2(){
		document.write("Sample domain name: <br><br>www.domainname.com<br>www.domainname.net<br>www.domainname.edu<br>domainname.com<br>domainname.net<br>domainname.edu<br>");
		var domainName = prompt("Enter domain name:");
		var domainCheck = /((w{3}).)?([a-z0-9\-])+((.com)|(.net)|(.edu))$/; 		// Regular Expression that checks domain name starting either with www. or without it and has name with alphanumeric characters and - which then ends with either .com, .net, .edu.
		document.write("<br>You entered <b>"+domainName+"</b>");
		if(domainCheck.test(domainName)){
			document.write("<br><br>Entered domain name is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered domain name is <b>INVALID.</b>");
		}
	}
	
// Question 3	
function q3(){
		document.write("Sample string (must have A-Z, a-z, - or _):<br>");
		var stringName = prompt("Enter string to check containing A-Z, a-z, -, _:");
		var stringCheck = /((a-zA-Z)|_|-)/;  // Regular Expression that checks whether the string consists of A-Z, a-z, - or _.
		document.write("<br>You entered <b>"+stringName+"</b>");
		if(stringCheck.test(stringName)){
			document.write("<br><br>Entered string is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered string is <b>INVALID.</b>");
		}
	}
	
// Question 4	
function q4(){
		document.write("Sample date: <br>mm/dd/yyyy<br>m/dd/yyyy<br>mm/d/yyyy<br>m/d/yyyy<br>");
		var dateEntered = prompt("Enter date to check:");
		var dateCheck = /^(1[0-2]|[1-9])\/([1-9]|[1-2][0-9]|3[0-2])\/([0-9]{4})$/;	  // Regular Expression that checks date with patterns mm/dd/yyyy, m/dd/yyyy, mm/d/yyyy, m/d/yyyy.
		document.write("<br>You entered <b>"+dateEntered+"</b>");
		if(dateCheck.test(dateEntered)){
			document.write("<br><br>Entered date is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered date is <b>INVALID.</b>");
		}
	}
	
// Question 5	
function q5(){
		document.write(" date: <br>hh:mm:ss<br>h:mm:ss");
		var timeEntered = prompt("Enter time to check:");
		var timeCheck = /^(2[0-3]|1[0-9]|[0-9]):([0-9]|[1-5][0-9]):([0-9]|[1-5][0-9])$/;	// Regular Expression that checks time with patterns hh:mm:ss, h:mm:ss.
		document.write("<br>You entered <b>"+timeEntered+"</b>");
		if(timeCheck.test(timeEntered)){
			document.write("<br><br>Entered time is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered time is <b>INVALID.</b>");
		}
	}
	
// Question 6	
function q6(){
		document.write("Sample hex color: <br>#123456<br>#ABCDE<br>#abcd<br>#A1d<br>#12ABcd");
		var hexEntered = prompt("Enter hex color value to check:");
		var hexCheck = /^#([0-9]|[a-f]|[A-F]){1,6}$/;	// Regular Expression that checks hex color with first character starting with # and then consists of hex value of atleast 1 to 6 characters.
		document.write("<br>You entered <b>"+hexEntered+"</b>");
		if(hexCheck.test(hexEntered)){
			document.write("<br><br>Entered hex color value is <b>VALID.</b>");
		}
		else{
			document.write("<br><br>Entered hex color value is <b>INVALID.</b>");
		}
	}