/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	var element_props = {
		class: 'imageGallery col-xs-12 col-sm-6 col-md-4'
	}
	//create a loop to go through the images in the imageArray
	for(var pictures_index = 0; pictures_index < pictures.length; pictures_index++){
		var image_path = pictures[pictures_index];
		var style_value = 'background-image:url(' + image_path +');';
		var figure_element = $('<figure>', element_props);
		figure_element.attr('style', style_value);
		var starting_index = (image_path.indexOf('/')) + 1;
		var image_name = image_path.slice(starting_index);
		var figcaption_element = $('<figcaption>');
		figcaption_element.text(image_name);
		figure_element.append(figcaption_element);
		figure_element.click(displayImage);
		$('#gallery').append(figure_element);
	}
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.

		//append the element to the #gallery section

	// side note: make sure to remove the hard coded html in the index.html when you are done!

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$('img').click(function(){
		$('#galleryModal').modal('hide');
	})
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	var background_image_source = $(this).attr('style');

	//grab the direct url of the image by getting rid of the other pieces you don't need
	var starting_index = (background_image_source.indexOf('(')) + 1;
	var ending_index = background_image_source.indexOf(')');
	var image_url = background_image_source.slice(starting_index, ending_index);

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
	// pexels-photo-132037
	starting_index = (image_url.indexOf('/')) + 1;
	ending_index = image_url.indexOf('.');
	var image_name = image_url.slice(starting_index, ending_index);
	//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	$('.modal-title').text(image_name);
	//change the src of the image in the modal to the url of the image that was clicked on
	$('img').attr('src', image_url);

	//show the modal with JS.  Check for more info here:
	$('#galleryModal').modal('show');
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
