// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  return $('.store .entry > img').click(function() {
    return $(this).parent().find(':submit').click();
  });
});