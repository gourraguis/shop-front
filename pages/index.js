import React from 'react'
import Layout from '../components/Layout'
import ShopsGrid from '../components/ShopsGrid'
import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'
import Router from 'next/router'

class Index extends React.Component {

    state = {
        shops: []
    }

    componentDidMount = async () => {
        const apiUrl = process.env.API_URL
        const token = cookie.get('token')
        if (!token) {
            Router.push('/login')
            return
        }
        const res = await fetch(apiUrl + 'shop', {
            headers: {
                authorization: token
            }
        })
        console.log(res)
        if (res.status !== 200)
        {
            console.error(res.status + '===>' + res.statusText + '===>' + res.url)
        }
        this.setState({
            shops: await res.json()
        })
    }

    render() {
        const { shops } = this.state
        return (
            <Layout>
                <ShopsGrid shops={shops}/>
            </Layout>
        )
    }
}

export default Index
