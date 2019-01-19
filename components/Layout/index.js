import Header from './Header'

const Layout = ({ children }) => (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <style jsx>{`
                main {
                        max-width: 1080px;
                        margin: 3rem auto
                }
        `}
        </style>
    </div>
)

export default Layout