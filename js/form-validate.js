$("#formValidation").validate({
    rules: {
      fname: {
        required: true,
        minlength: 2,
      },
  
      email: {
        required: true,
        email: true
      },
  
      message: {
        required: true
      }
    },
    messages: {
      fname:{
        required: "please enter your full-name",
        minlength:"full-name at least 2 characters"
      },
  
      email: {
        required: "please enter your email",
        email: "Your email address must be in the format of name@domain.com"
      },
  
      message: {
        required: "please enter your message"
      }
    },
  
  
    submitHandler: function(form) {
    
    $(form).submit();
    }
  });

  $("#login-validtion").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
  
      password: {
        required: true,
        password: true
      }
    },
    messages: {
      email: {
        required: "please enter your email",
        email: "Your email address must be in the format of name@domain.com"
      },
  
      password: {
        required: "please enter your password",
      }
    },
  
  
    submitHandler: function(form) {
    
    $(form).submit();
    }
  });

  $("#sign-up-validation").validate({
    rules: {
      f_name: {
        required: true,
      },

      l_name: {
        required: true,
      },

      email: {
        required: true,
        email: true
      },

      phone: {
        required: true,
        number: true
      },
  
      password: {
        required: true,
        password: true
      },

      confirm_password: {
        required: true,
        password: true,
        equalTo: "#password"
      }
    },
    messages: {
      f_name: {
        required: "please enter your first name",
      },

      l_name: {
        required: "please enter your last name",
      },

      email: {
        required: "please enter your email",
        email: "Your email address must be in the format of name@domain.com"
      },

      phone: {
        required: "please enter your phone",
        number: "phone must be a number"
      },
  
      password: {
        required: "please enter your password",
      },

      confirm_password: {
        required: "please confirm your password",
        equalTo: "password and confirm password should be matched"
      }
    },
  
  
    submitHandler: function(form) {
    
    $(form).submit();
    }
  });