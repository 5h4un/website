
var i = 0;

$(function() {
	var loginCreds;
	var $input = $('#input');
	$.ajax({
		type: 'POST',
		url: 'https://api.yelp.com/oauth2/token',
		data: 'grant_type=client_credentials&client_id=84hr4D-l9E_j5JdcN18S3Q&client_secret=r4W8OOSG2kJYNReONJUQ8MMextIv63mASYvuF1bBVepdEg8QmJ0BSucx3S3t1mlD',
		success: function(data) {
			loginCreds = data;
			getBusinessImage(loginCreds);
			newSearch(loginCreds);
		},
		error: function() {
			console.log('failure');
		}
	});
});


/*Made this AJAX request it's own function so that the POST call above can get the credentials needed first
So this can be called on the success of the AJAX request above */
function getBusinessImage(loginCreds) {
	console.log('i is: ' + i);
	$.ajax({
		type: 'GET',
		url: 'https://api.yelp.com/v3/businesses/search',
		data: 'term=chinese&location=seattle&limit=3',
		beforeSend: function(xhr) {
			/*xhr.setRequestHeader uses the "Authorization" type parameter since the next parameter
			is "Bearer " + loginCreds.access_token which sets the required Authorization HTTP header
			for using the Yelp! API*/
			xhr.setRequestHeader("Authorization", "Bearer " + loginCreds.access_token);
		},
		success: function(data) {
			populateRow(data);
			console.log('after first populateRow i is: ' + i);
		},
		error: function() {
			console.log('failure2');
		}
	});
};


function newSearch(loginCreds) {
	var $input = $('.form-control');
	$('.btn').click(function() {
		i = i + 1;
		var search = {
			term: 'chinese',
			location: $input.val(),
			limit: 3
		};
		$.ajax({
			type: 'GET',
			url: 'https://api.yelp.com/v3/businesses/search',
			data: search,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + loginCreds.access_token);
			},
			success: function(data) {
				console.log(data);
				createRow(data);
				populateRow(data);
			}
		});
	});
};

function createRow(data) {
	var $row = "<div class='row search" + i + "'></div>";
	var $col = "<div class='col-sm-4'></div>";
	var $panel = "<div class='panel panel-primary'></div>";
	var $panel_heading = "<div class='panel-heading'></div>";
	var $panel_body = "<div class='panel-body'><img src=''><h5 class='rating'></h5><h5 class='telephone'></h5><a href='' class='yelpLink hidden'><h5>Yelp profile</h5></a></div>";
	$(".container").append($row);
	var $newRow = $('.search' + i);
	/*left column*/
	var $firstCol = createFirstCol($newRow, $col, $panel, $panel_heading, $panel_body);
	/*middle column*/
	var $secondCol = createOtherCols($newRow, $firstCol, $col, $panel, $panel_heading, $panel_body);
	/*right column*/
	createOtherCols($newRow, $secondCol, $col, $panel, $panel_heading, $panel_body);
}

/*createCol($row, $col, $panel, $panel_heading, $panel_body))*/
function createFirstCol(row, col, panel, panel_heading, panel_body) {
	row.append(col);
	var $newCol = row.find('.col-sm-4');
	$newCol.append(panel);
	$newCol.find('.panel').append(panel_heading);
	$newCol.find('.panel').append(panel_body);
	return $newCol;
}

function createOtherCols(row, prevCol, col, panel, panel_heading, panel_body) {
	row.append(col);
	var $newCol = prevCol.next();
	$newCol.append(panel);
	$newCol.find('.panel').append(panel_heading);
	$newCol.find('.panel').append(panel_body);
	return $newCol;
}

function populateRow(data) {
	console.log('populateRow i is: ' + i); 
	var $chinese = $('.search' + i);
	var $firstCol = $chinese.find('.col-sm-4');
	var $secondCol = $firstCol.next();
	var $thirdCol = $secondCol.next();
	populateCol(data, $firstCol, 0);
	populateCol(data, $secondCol, 1);
	populateCol(data, $thirdCol, 2);
}

function populateCol(data, col, business) {
	col.find('.panel-heading').text(data.businesses[business].name);
	col.find('img').attr('src', data.businesses[business].image_url);
	col.find('.rating').text('Rating: ' + data.businesses[business].rating + '/5');
	col.find('.telephone').text('Phone Number: ' + data.businesses[business].phone);
	col.find('.yelpLink').attr('href', data.businesses[business].url).removeClass('hidden');
}










