$(document).ready(function() {
  $("form#stress-survey").submit(function(event) {
    let stressTotal = 0;
    let healthTotal = 0;
    let copingTotal = 0;
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      stressTotal += parseInt($(this).val());
    });  
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      healthTotal += parseInt($(this).val());
    });
    $("input:checkbox[name=coping]:checked").each(function() {
      copingTotal += parseInt($(this).val());
    });
    if (stressTotal >= 3 && healthTotal >= 3) {
      $("#make-changes").show();
    } else if (copingTotal >= 3 && stressTotal == 0 && healthTotal == 0) {
      $("#doing-great").show();
    } else if (copingTotal >=3 && stressTotal <=3 && healthTotal <= 3) {
      $("#doing-okay").show();
    }
    $("#stress-survey").hide();
    event.preventDefault();
  });
});