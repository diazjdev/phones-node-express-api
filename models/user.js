class User {

	constructor({ id, firstName, lastName, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.fullName = `${firstName} ${lastName}`;

	}

}

module.exports = User;
