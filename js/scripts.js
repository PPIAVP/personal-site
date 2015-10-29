$( document).ready(function() {

  // Scrollspy
  $('body').scrollspy({ target: '#navbar-main', offset: 70 });

  // Form
  $('#contact-form').submit(function(event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form
    } else { 
      // cancels the form submission
      event.preventDefault();
      submitForm();
    }

  });

  function submitForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
      type: 'POST',
      url: 'php/contact.php',
      data: 'name=' + name + "email=" + email + '$message=' + message,
      success: function(text) {
        if (text == 'success') {
          formSuccess();
        } else if(text == 'invalid') {

        }
      }
    });
  }
  function formSuccess() {
    $('#form-submit').addClass('hidden');
    $('#msgSubmit').removeClass('hidden');
  }

});

