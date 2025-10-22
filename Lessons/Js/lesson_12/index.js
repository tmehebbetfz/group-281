const nameInp = document.querySelector('#name')
const surnameInp = document.querySelector('#surname')
const emailInp = document.querySelector('#email')
const passwordInp = document.querySelector('#password')
const createUserBtn = document.querySelector('#create-user')

createUserBtn.addEventListener('click', () => {
	const existedUser = localStorage.getItem(`user_${emailInp.value}`)

	if (existedUser) {
		alert('User existed!')
	} else {
		const user = {
			name: nameInp.value,
			surname: surnameInp.value,
			email: emailInp.value,
			password: passwordInp.value,
		}

		localStorage.setItem(`user_${emailInp.value}`, JSON.stringify(user))
	}
})
