// Promise
// async/await


function showUsers() {
	console.log("Users rendered!");
}

function getUsersFromDb() {
	console.log('Loading users!');

	setTimeout(() => {
		console.log("Users loaded! Count 10");
	}, 10000);
}


async function users() {
	await getUsersFromDb();
	await showUsers()
}

users();

// try, catch, finally

function mathFunc() {
	try {
		throw new Error("Error")
	} catch(error) {
		console.log("Warning sistem error");
	} finally {
		console.log("Sistem stable!");
		console.log("Status: Active");
	}
}

mathFunc();