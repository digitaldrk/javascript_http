function axiosGet(requestUrl, callback, requestParams=null) {
	let queryParams = { params: requestParams };
	axios.get(requestUrl, queryParams)
		.then(data => callback(data))
		.catch(error => console.log(`Axios error: ${error}`))
}

function axiosPost(requestUrl, callback, postData) {
	axios({
		method: 'post',
		url: requestUrl,
		data: {
			postData
		}
	})
		.then(data => callback(data))
		.catch(error => console.warn(error))
}

function buildGetList(requestUrl, params=null) {
	axiosGet(requestUrl, (responseData) => {
		axiosGetList.innerHTML = responseData.data.map(post => {
			return `
			<li>
				${post.title}
			</li>
		` }).join('');
	}, params)
}

function sendSomething(requestUrl, postData) {
	axiosPost(requestUrl, function(postResponse) {
		if (postResponse) {
debugger
			postResponseResult.innerHTML = `You have sent ${JSON.stringify(postResponse.data.postData)} and the response code is ${postResponse.status}`
		}
	}, postData)
}