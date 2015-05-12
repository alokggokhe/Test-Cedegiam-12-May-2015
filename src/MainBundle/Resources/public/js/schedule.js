$(document).ready(function(){
	$('span[title]').tooltip({placement:'top'});
});
$(document).click(function(event) {
	var target = $(event.target);
	$(".form_scheduledatetime").datetimepicker('hide');
});
function cancelSchedule(schdule_id) {
	$('.alert-message').html('You have already cancelled this session');
	$('#popupCommonAlert').modal('show');
	return false;
}
