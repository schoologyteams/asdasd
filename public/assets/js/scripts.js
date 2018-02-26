$(document).ready(function() {

  $('.card').click(function() {
    var id = $(this).data('id');
    var devoured = $(this).data('devoured');

    if(devoured === 0) {
      devoured++;
      $.ajax({
        url: '/burgers/' + id,
        type: 'PUT',
        data: JSON.stringify({devoured}),
        contentType: 'application/json'
      }).then(
        function() {
          console.log('Updated id: ' + id);
          location.reload();
        }
      );

    } else if(devoured === 1) { 
      $.ajax({
        url: '/burgers/' + id,
        type: 'DELETE'
      }).then(
        function() {
          console.log('Deleted id: ' + id);
          location.reload();
        }
      );
    }
  });

  $('.add').on('submit', function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $('#burger').val().trim()
    };

    $.ajax({
      url: '/burgers',
      type: 'POST',
      data: JSON.stringify(newBurger),
      contentType: 'application/json'
    }).then(
      function() {
        console.log('Added burger');
        location.reload();
      }
    );
  });
});