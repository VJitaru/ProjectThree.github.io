$('.postText').on('keyup', (event) => {    
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    $('.characters').html(remaining);
    if(remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    };
    $('.postText').focus();
  });