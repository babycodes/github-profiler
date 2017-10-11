let https = require('https')

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: '/users/babycodes',
	method: 'GET',
	headers:{
		'user-agent': 'nodejs'
	}
}

//TODO : [x] Read the data
let request = https.get(options,(response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		console.log(typeof body)
	})
//TODO: Parse error
})

request.end()

request.on('error',(e) => {
	console.error(e)
})
