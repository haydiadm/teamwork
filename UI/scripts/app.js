var sb = document.getElementById('sb');
if (typeof sb != 'undefined') {
    sb.addEventListener('click', function(event) {
        event.preventDefault();
        var pw = document.getElementById('pw');
        var cpw = document.getElementById('cpw');
        //alert (pw.value+cpw.value);
        if (pw.value == cpw.value) {
           // alert ("password are the same");
          //send a post request with the verified information
        }
      else {
         // alert ("not the same");
         var error = document.getElementById('error');
         error.innerText="passwords are not the same";
         error.hidden= false;
      }

    });

}


var pw = document.getElementById('pw');
if (typeof pw != 'undefined') {
    pw.addEventListener('blur' ,function() {
        if (pw.value.length>=6) {
        //    alert ("correct password length" );

        }else {
            //alert("password  is too short");
            var error = document.getElementById('error');
            error.innerText="password is too short";
            error.hidden= false;

        }
    });

    pw.addEventListener('focus' ,() =>  {
        var error = document.getElementById('error');
        error.innerText="";
    });

}
