$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = 
       `<div class="main_chat__contents__content" data-message-id=${message.id}>
          <div class="main_chat__contents__content__list">
            <div class="main_chat__contents__content__list__name">
              ${message.user_name}
            </div>
            <div class="main_chat__contents__content__list__date">
              ${message.date}
            </div>
          </div>
          <div class="main_chat__contents__content__text__message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image}>
        </div>`
      return html;
    } else {
      var html =
       `<div class="main_chat__contents__content" data-message-id=${message.id}>
          <div class="main_chat__contents__content__list">
            <div class="main_chat__contents__content__list__name">
              ${message.user_name}
            </div>
            <div class="main_chat__contents__content__list__date">
              ${message.date}
            </div>
          </div>
          <div class="main_chat__contents__content__text__message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__contents').append(html);
      $('.main_chat__contents').animate({ scrollTop: $('.main_chat__contents')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
});