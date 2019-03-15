var header = '<div class="header">This is the header</div>';
var footer = '<div class="footer">This is the footer</div>';

$(document).ready(function () {
  // One way - this uses the variables above to insert the content
  $('.content').before(header);
  $('.content').after(footer);

  // Another way - this performs a network request
  $('#header').load('./partials/header.html');
  $('#footer').load('./partials/footer.html');
});
