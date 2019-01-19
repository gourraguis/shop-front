const ShopCard = ({ details }) => {
    const { name, distance, image } = details

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Shop Image"/>
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">
                    {name}
                </p>
                <p className="subtitle is-6">
                    {distance}km away...
                </p>
            </div>
            <footer className="card-footer">
                <a href="" className="card-footer-item">Like</a>
                <a href="" className="card-footer-item">Dislike</a>
            </footer>
        </div>
    )
}

export default ShopCard
