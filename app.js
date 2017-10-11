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
		let profile = JSON.parse(body)
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers`)
	})
//TODO: Parse the data
})

request.end()

request.on('error',(e) => {
	console.error(e)
})
