function fetchGetHttpHelper(callback) {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(data => {return data.json()})
		.then(res => {callback(res)})
}

function fetchPostHttpHelper(data, callback) {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: data,
		headers: {
			"content-type":"application/json; charset=UTF-8"
		}
	})
		.then(data => {return data.json()})
		.then(res => {callback(res)})
		.catch(error => console.warn(error))
}

function buildGetList() {
	ajaxGetList = document.querySelector('#ajax-get-list');
	
	fetchGetHttpHelper(function (data) {
		ajaxGetList.innerHTML = data.map(post => {
		return `
			<li>
				${post.title}
			</li>
		` }).join('');
	})
}

function sendDataFetch() {
	coolData = {foo: "foo", bar: "bar", baz: "baz"};
	fetchPostHttpHelper(coolData, function (response) {
		if (response) {
			document.querySelector('p#post-response-result').innerHTML = "Successful Post";
		}
	});
}