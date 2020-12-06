// This service object was adapted from here:
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const auth = {
    isAuthenticated: false,
    authenticate(email, password) {
        return fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Login Failed');
                }

                return response.json();
            })
            .then((body) => {
                this.isAuthenticated = true;
                return body;
            });
    },
    signup(username, email, password) {
        return fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Signup Failed');
                }

                return response.json();
            })
            .then((body) => {
                this.isAuthenticated = true;
                return body;
            });

    },
    signout(cb) {
        return fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Logout Failed');
                }

                return response.json();
            })
            .then((body) => {
                this.isAuthenticated = false;
                return body;
            });
    },
    isEmailRegistered(email) {
        return fetch('/api/auth/email/' + email)
            .then(res => {
                return res.json();
            })
            .then(user => {
                return (user.length === 1) ? true : false;
            })
            .catch(err => {
                console.log(err);
            });
    },
    isUsernameRegistered(username) {
        return fetch('/api/auth/username/' + username)
            .then(res => {
                return res.json();
            })
            .then(user => {
                return (user.length === 1) ? true : false;
            })
            .catch(err => {
                console.log(err);
            });
    },
}

export default auth;