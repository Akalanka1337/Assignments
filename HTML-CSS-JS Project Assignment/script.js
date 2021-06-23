$(function() {
	alert("Done For NIBM Student!");//Remove IT
  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "https://akalanka.uk";

      var messageAlert = "alert-success";
      var messageText =
        "Hello! "+ $('#form_name').val()+", your registration has been successful, thank you. I will get back to you soon.";

      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText +
        "</div>";

      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});