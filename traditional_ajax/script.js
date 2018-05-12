const ajaxGetList = document.querySelector('#ajax-get-list');

const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

Http.open("Get", url);
Http.send();
Http.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		ajaxGetList.innerHTML = JSON.parse(Http.responseText).map(post => {
				return `
			<li>
				${post.title}
			</li>
		`
		}).join('');
	}
}