var fbdbReference = new Firebase('https://eventguestlisting.firebaseio.com/');
function addGuest(){
	var name = $('#name').val();
	var organization = $('#org').val();
	var contactNumber = $('#contact').val();

	fbdbReference.push({name: name, organization: organization, contactNumber: contactNumber});
	
	fbdbReference.on('child_added', function(snapshot) {
    	var message = snapshot.val();
    	newGuestPopup(message.name, message.organization, message.contactNumber);
    });
}
    function appendGuest(name, organization, contactNumber) {
      	const newGuest = 
      	'<li><h4>' + name + '</h4>' +
      	'<h5>' + organization + '</h5>' +
      	'<i class = "contact">' + contactNumber + '</i></li>';
      	$('#guests').append(newGuest);
	}
	function newGuestPopup((name, organization, contactNumber) {
      	alert(
      	'Name:' + name + 'Organization: ' + organization + 'Contact Number:' + contactNumber;
    }