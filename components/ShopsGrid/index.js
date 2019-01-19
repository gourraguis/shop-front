import ShopCard from '../ShopCard'

const ShopsGrid = () => (
    <div className="columns is-multiline">
        {
            [1, 2, 3, 4, 5].map(_ => (
                <div className="column is-3">
                    <ShopCard/>
                </div>
            ))
        }
    </div>
)

export default ShopsGrid