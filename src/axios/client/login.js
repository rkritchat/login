import {HTTP} from '../axios.js'

const login = async ({email, password}) => {
    let data = JSON.stringify({
        email: email,
        password: password
    });

    return await HTTP.post("/login", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(resp => {
        return resp.data
    })
};

export default login;


