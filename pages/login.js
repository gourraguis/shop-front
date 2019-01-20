import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

class Login extends React.Component {

    state = {
        currentTab: 'login',
        email: '',
        currentPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
        loading: false
    }

    onChange = field => e => {
        this.setState({
            [field]: e.target.value
        })
    }

    switchTab = tab => () => {
        this.setState({
            currentTab: tab
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        console.log(this.state)
    }

    render() {
        const {email, currentPassword, newPassword, newPasswordConfirm, loading, currentTab} = this.state
        return (
            <Layout>
                <div className="columns is-centered">
                    <div className="column is-6">
                        <div className="tabs is-toggle is-fullwidth is-centered">
                            <ul>
                                <li className={classnames({'is-active': currentTab === 'login'})}>
                                    <a onClick={this.switchTab('login')}>
                                        Login
                                    </a>
                                </li>
                                <li className={classnames({'is-active': currentTab === 'signup'})}>
                                    <a onClick={this.switchTab('signup')}>
                                        Signup
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="box">
                            {currentTab === 'login' && (
                                <LoginForm email={email} currentPassword={currentPassword} loading={loading}
                                       onChange={this.onChange} handleSubmit={this.handleSubmit}/>
                            )}
                            {currentTab === 'signup' && (
                                <SignupForm email={email} newPassword={newPassword} newPasswordConfirm={newPasswordConfirm}
                                        loading={loading} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Login
