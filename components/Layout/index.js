import Header from './Header'
import style from '../../styles/style.scss';
import classnames from 'classnames'

const Layout = ({ children }) => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: style }} /> {/* Loading Bulma framework */}
        <Header/>
        <main className={classnames('section')}>
            <div className={classnames('container')}>
                {children}
            </div>
        </main>
    </div>
)

export default Layout
