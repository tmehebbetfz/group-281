const publicKey = '7805800143fc574d264428351da94bcc'

const baseUrl = 'https://gateway.marvel.com/v1/public/characters'
const url = `${baseUrl}?apikey=${publicKey}`

async function getCharacters() {
	const res = await fetch(url)

	console.log(await res.json())
}

getCharacters()
