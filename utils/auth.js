import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'

export const login = async (email, password) => {
    const res = await fetch(process.env.API_URL + 'login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    if (res.status !== 200) {
        console.log(await res.json())
        return {
            error: true,
            message: `Couldn't login, please try again`
        }
    } else {
        const { token } = await res.json()
        cookie.set('token', token)
        return {
            error: null,
            message: "Logged in, you will be redirected in a few seconds"
        }
    }
}

export const signup = async (email, password, passwordConfirm) => {
    if (password !== passwordConfirm) {
       return {
           error: true,
           message: `Password does not match password confirmation`
       }
    }
    const res = await fetch(process.env.API_URL + 'user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    if (res.status !== 200) {
        return {
            error: true,
            message: `Couldn't create your account, please refresh & try again`
        }
    } else {
        return {
            error: null,
            message: `Account created successfully, please login now`
        }
    }
}