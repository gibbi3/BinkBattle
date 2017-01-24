clickcount1 = 0;
clickcount2 = 0;

$('#click-cat1').click(function() {
  clickcount1 += 1;
  $('#click-count1').text("Clicks: " + clickcount1);
});

$('#click-cat2').click(function() {
  clickcount2 += 1;
  $('#click-count2').text("Clicks: " + clickcount2);
});

$('#click-count1').text(clickcount1);
$('#click-count2').text(clickcount2);
