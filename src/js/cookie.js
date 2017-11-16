function createCookie(name,value,days) {
  console.log('in create cookie method');
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;';
}

function readCookie(name) {
  console.log('in read cookie method');  
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

$(function() {
  cookie = readCookie('greenpeace');
  if (cookie == null) {
    console.log('cookie is not present')
    $(".cookie-block").show();
  } else {
    console.log('cookie is present, cookie banner hidden!');
  }
});

$("#hidecookie").click(function () {
  $(".cookie-block").slideUp("slow");
  createCookie('greenpeace', 'policy-accepted');
});
