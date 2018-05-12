$(document).ready(function() {
	function jqueryAjaxHttpGetHelper(endpoint, method, callback, data = null) {
		$.ajax({
			url: endpoint,
			type: method,
			success: function (result) {
				return callback(result)
			},
			error: function (error) {
				console.warn(`JQuery ajax error: ${JSON.stringify(error)}`)
			}
		})
	}

	$('#get-helper-function-button').click(function() {
		jqueryAjaxHttpGetHelper("https://jsonplaceholder.typicode.com/posts", 'GET', function(httpResult) {
			for (var i = 0, l = httpResult.length; i < l; ++i) {
				$('#ajax-get-list').append("<li>" + httpResult[i].title + "</li>");
			}
		})
	})

	$('#post-helper-function-button').click(function () {
		const data = { foo: "foo", bar: "bar", baz: "baz" }
		jqueryAjaxHttpGetHelper("https://jsonplaceholder.typicode.com/posts", 'POST', function (httpResult) {
			if (httpResult) {
				$('p#post-response-result').append('Successful Post');
			}
		}, data)
	})

	$('#get-function-button').click(function () {
		$.get("https://jsonplaceholder.typicode.com/posts", function(data, status) {
			for (var i = 0, l = data.length; i < l; ++i) {
				$('#ajax-get-list').append("<li>" + data[i].title + "</li>");
			}
		})
	});

	$('#get-json-function-button').click(function () {
		$.getJSON("https://jsonplaceholder.typicode.com/posts", function (result) {
			for (var i = 0, l = result.length; i < l; ++i) {
				$('#ajax-get-list').append("<li>" + result[i].title + "</li>");
			}
		})
	});

	$('#post-function-button').click(function () {
		const data = {foo: "foo", bar: "bar", baz: "baz"}
		$.post("https://jsonplaceholder.typicode.com/posts", data, function (data, status) {
			if(status == "success") {
				$('p#post-response-result').append('Successful Post');
			}
		})
	});
})