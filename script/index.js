 $(document).ready(function(){
    $('#login-nav').on('click', function(e){
      e.preventDefault();
      $('.pop-up').slideDown(400);
      $('.body-overlay').fadeIn(200);
      $('html').css('overflow', 'hidden');
      if ($(window).width() > 1024) {
        $('html').css('margin-right', '17px')
        $('.body-overlay').css('left','0');
        $('.body-overlay').css('width','101%');
    }
    });
    $(document).mouseup(function (e) {
      let container = $(".pop-up");
      if (container.has(e.target).length === 0){
          container.hide("slow");
          $('.body-overlay').fadeOut(200);
          $('html').css('overflow', 'auto')
          $('html').css('margin-right', '0px')
      }
  });

  //  Opening sub menu function.

    $(".home,#home").click(function(){
       $(".sub-menu").addClass("sub-menu-position");
    });

    // FB/TW follower counter.

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });  
});
  // Implemented function for switching between follow and following state.
  $('#f-b-foll').click(function(){
  if ($(this).hasClass('follow')) {
    $(this).find('img').attr('src', 'style/img/main-content/social-media/follow-icon.png');
    $(this).find('span').text("Follow")
   
      $(this).removeClass('follow')
  } else  {
    $(this).find('img').attr('src', 'style/img/main-content/social-media/following-icon.png');
    $(this).find('span').text("Following")
      $(this).addClass('follow')
  }
  });
    $('#tw-foll').click(function(){
    if ($(this).hasClass('following')) {
        $(this).find('img').attr('src', 'style/img/main-content/social-media/following-icon.png');
        $(this).find('span').text("Following")
        $(this).removeClass('following')
    } else  {
        $(this).find('img').attr('src', 'style/img/main-content/social-media/follow-icon.png');
        $(this).find('span').text("Follow")
        $(this).addClass('following')
    }
    });
    });

    //  Form validate function what catch errors and put result in an array.
    function makeValidate() {
          let formValidationButton = document.getElementById('registration')
               formValidationButton.addEventListener('submit', validateForm);

      function validateForm(e) {
          let errors = [];
          let allInputs = document.forms[0].elements;
          for (let i = 0; i < allInputs.length; i++) {
              if (allInputs[i].value.match(/^[#.0-9a-zA-Z\s,-]+$/)||allInputs[i].value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ) {
                  allInputs[i].style.borderColor = 'green';
              } else if (allInputs[i].name == 'question') {
                  allInputs[i].style.borderColor = 'green';
              } else if (allInputs[i].value == '') {
                  allInputs[i].style.borderColor = 'red';
                  errors.push({
                      name: allInputs[i].name,
                      error: 'empty value'
                  });
              }
          }
          if (errors.length <= 1) {
            for (let i = 0; i < allInputs.length; i++) {
              if(allInputs[i].type !='submit')
              allInputs[i].value = '';
              allInputs[i].style.borderColor ='grey';
            }
              alert('Your question has been sent successfully!');
          } else {
              e.preventDefault();
          }
      }
  }
  makeValidate();
