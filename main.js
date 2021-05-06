$(document).ready(() => {

    $('.menu').on('mouseenter', () => {
      $('.nav-menu').show();
    });
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    });
  
    $('.btn').on('mouseover', event => {
      $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave', even => {
      $(event.currentTarget).removeClass('btn-hover');
    });
  
    $('.postText').on('keyup', event => {
      let post = $(event.currentTarget).val();
      let remaining = 140 - post.length;
      if (remaining <= 5) {
        $('.wordcount').addClass('red');
      } else {
        $('.wordcount').removeClass('red');
      } 
      $('.characters').html(remaining);
    });
  
    $('.postText').on('keydown', event => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining == 0 && event.keyCode !== 8) {
      event.preventDefault();
    }
  });
  }); 
  