$(document).ready(function(){

var Person = {
	firstName: 'Ben',
	lastName: 'Hunt',
	parents: ['Doug','Sharon'],
	siblings: {
		Type: 'Brother',
		Name: 'Dylan'
	}
};

var source = $('#entry-template').html();
var template = Handlebars.compile(source);

$('.person').html(template(Person));

});