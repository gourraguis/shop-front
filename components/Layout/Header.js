
const Header = () => (
    <div>
        <nav>
            <a href="/">Nearby Shops</a>
            <a href="/favorites">My preferred Shops</a>
        </nav>
        <style jsx>{`
            div {
                margin-top: 1rem
            }
            nav {
                display: flex;
                justify-content: flex-end
            }
            a {
                padding-left: .5rem;
                padding-right: .5rem;
                text-decoration: none
            }
      }
    `}</style>
    </div>

)

export default Header