$(document).ready(function() {
  $("form#stress-survey").submit(function(event) {
    event.preventDefault();
    $("#health-advice").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      const stressSymptoms = $(this).val();
      $("#health-advice").append(stressSymptoms + "<br>");

    });
    $("#stress-survey").hide();
  });
});