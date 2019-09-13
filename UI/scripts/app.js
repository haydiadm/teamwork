var sb = document.getElementById('sb');
if (sb != null) {
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
if (pw != null) {
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

const comment_btn = document.getElementById('comment_btn');

if (comment_btn != null)
{
  comment_btn.addEventListener('click', (event) => {
    event.preventDefault();
    const comment_field = document.getElementById('comment_field');
    const comments = document.getElementById('comments');
    const text = comment_field.value;
    const author = 'Lenny A';
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerHTML = `<div class="comment-text">${text}</div><div class="comment-author">${author}</div>`;
    comments.appendChild(comment);
  });
}
