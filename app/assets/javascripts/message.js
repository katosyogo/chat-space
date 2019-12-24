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
      url: url,  
      type: 'POST',  
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
    .fail(function () {
      alert("エラー");
      $('.form__submit').prop('disabled', false);
    });
  });

    var reloadMessages = function () {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
        var last_message_id = $('.main_chat__contents__content:last').data("message-id");
        $.ajax({ 
          url: "api/messages", 
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id} 
        })
        .done(function (messages) { 
          var insertHTML = '';
          messages.forEach(function (message) {
            insertHTML = buildHTML(message);
            $('.main_chat__contents').append(insertHTML);
          })
          if ( insertHTML ) {
            $('.main_chat__contents').animate({scrollTop: $('.main_chat__contents')[0].scrollHeight}, 'fast');
          }
        })
        .fail(function () {
          alert('自動更新に失敗しました');
        });
      }
    };
  setInterval(reloadMessages, 7000);
});