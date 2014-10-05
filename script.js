
$(function(){
  Parse.initialize("0qD3LLZIOwLOPRwbwLia9GJXTEUnEsSlBCufqDvr", "TcteeVBhtJEERxRtaavJtFznsXrh84WvOlE6hMag");
  $('#btn_email_signup_bottom').click(function(){
    doEmailSignup(true);
  });
  $('#email_bottom').keypress(function(e) {
    if(e.keyCode === 13) doEmailSignup(true);
  });
});
function doEmailSignup(isBottom) {
  var $container = $('#bottom_signup');
  var $emailBtn = $('#btn_email_signup_bottom');
  var $fields = $('.email_fields');
  var $email = $('#email_bottom');
  var email = $email.val();

  $container.find('.error').remove();
  $container.find('.success').remove();
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if(email==='') {
  } else if (!emailReg.test(email)) {
    $emailBtn.after('<div class="error">Please use a valid email</div>');
  } else {
    $emailBtn.hide();
    Parse.Cloud.run("subscribe",{email:email,"growthhack":true},{
      success:function(result,error){
        $emailBtn.show();
        $emailBtn.after('<div class="success">Thank you very much! I\'ll keep you posted!</div>');
        $email.val("");
      },
      error:function(error){
        console.log(error);
        $emailBtn.show();
        $emailBtn.after('<div class="success">Thank you very much! I\'ll keep you posted!</div>');
        $email.val("");
      }
    });
  }
}

