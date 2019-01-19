import React from 'react'
import Layout from '../components/Layout'
import ShopsGrid from '../components/ShopsGrid'
import fetch from 'isomorphic-fetch'

class Index extends React.Component {

    static async getInitialProps() {
        const apiUrl = process.env.API_URL
        const res = await fetch(apiUrl + 'shop')
        if (res.status !== 200)
        {
            console.error(res.status + '===>' + res.statusText + '===>' + res.url)
            return { shops: [] }
        }
        return {
            shops: await res.json()
        }
    }

    render() {
        const { shops } = this.props
        return (
            <Layout>
                <ShopsGrid shops={shops}/>
            </Layout>
        )
    }
}

export default Index
