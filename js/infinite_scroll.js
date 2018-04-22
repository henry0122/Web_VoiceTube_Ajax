function getRequestString()
{
		// Get current page number from infinite scroll api
		var nextPage = this.pageIndex+1;
		return 'ajax_response_thumb.php?page=' + nextPage;
}

var $thumb = $('#thumb').infiniteScroll({
  path: getRequestString,
  status: '.page-load-status',
  history: false,
  // load page as text, becauz we get JSON string
  responseType: 'text' 
});

// When next page is loaded , Parse JSON string into object and put into HTML
$thumb.on( 'load.infiniteScroll', function( event, response ) {
  // prase response text into JSON data
  var data = JSON.parse( response );
  // put that data into HTML, in ajax_thumb.js
  renderThumbHTML(data);
});