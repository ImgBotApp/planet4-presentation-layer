$(function() {
  $('li.article-mobile-view').css('cursor', 'pointer').click(function() {
    window.location.href = "#";
    return false;
    });
});

$('.topicwise-article-image, .article-headline, .article-content').hover(function(){
 $(this).parents('.topicwise-article-list-item').toggleClass('imghover');
});