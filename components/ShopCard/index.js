import React from 'react'


class ShopCard extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://source.unsplash.com/random" alt="Shop Image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">
                        Awesome Shop Name 1
                    </p>
                    <p className="subtitle is-6">
                        1km away...
                    </p>
                </div>
                <footer className="card-footer">
                    <a href="" className="card-footer-item">Like</a>
                    <a href="" className="card-footer-item">Dislike</a>
                </footer>
            </div>
        )
    }
}

export default ShopCard
