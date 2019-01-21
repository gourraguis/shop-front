import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { login, signup } from '../utils/auth'

class Login extends React.Component {

    state = {
        notificationError: null,
        notificationMessage: '',
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

    handleSubmit = form => async e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        const { email, currentPassword, newPassword, newPasswordConfirm } = this.state
        try {
            if (form === 'signup') {
            const { error, message } = await signup(email, newPassword, newPasswordConfirm)
            this.setState({
                notificationError: error,
                notificationMessage: message,
                currentTab: error ? 'signup' : 'login', // we redirect to login there was no error
                loading: false,
                newPasswordConfirm: "",
                newPassword: ""
            })
            } else if (form === 'login') {
                const { error, message } = await login(email, currentPassword)
                this.setState({
                    notificationError: error,
                    notificationMessage: message,
                    loading: false,
                    password: ""
                })
                if (!error) {
                    // redirect to home page
                }
            }
        }
        catch (e) {
            console.error(e.message)
            this.setState({
                notificationMessage: `Unknown error, please refresh and try again`,
                notificationError: true,
                loading: false
            })
        }
    }

    render() {
        const {email, currentPassword, newPassword, newPasswordConfirm,
            loading, currentTab, notificationError, notificationMessage} = this.state
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
                        {notificationMessage && (
                            <div className={classnames('notification', {'is-success': !notificationError, 'is-danger': notificationError})}>
                            {notificationMessage}
                            </div>
                        )}
                        <div className="box">
                            {currentTab === 'login' && (
                                <LoginForm email={email} currentPassword={currentPassword} loading={loading}
                                       onChange={this.onChange} handleSubmit={this.handleSubmit('login')}/>
                            )}
                            {currentTab === 'signup' && (
                                <SignupForm email={email} newPassword={newPassword} newPasswordConfirm={newPasswordConfirm}
                                        loading={loading} onChange={this.onChange} handleSubmit={this.handleSubmit('signup')}/>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Login
