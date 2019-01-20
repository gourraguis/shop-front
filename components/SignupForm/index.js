import classnames from 'classnames'

const SignupForm = ({email, newPassword, newPasswordConfirm, onChange, handleSubmit, loading}) => (
    <form onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input type="email" className="input" required
                       value={email} onChange={onChange('email')}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input type="password" className="input" required
                       value={newPassword} onChange={onChange('newPassword')}/>
            </div>
        </div>

        <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
                <input type="password" className="input" required
                       value={newPasswordConfirm} onChange={onChange('newPasswordConfirm')}/>
            </div>
        </div>

        <div className="field">
            <div className="control">
                <button className={classnames('button', 'is-link', {'is-loading': loading})}
                        type="submit" disabled={loading}>Sign up</button>
            </div>
        </div>
    </form>
)

export default SignupForm