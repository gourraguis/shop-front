import ShopCard from '../ShopCard'

const ShopsGrid = ({shops}) => (
    <div className="columns is-multiline">
        {
            shops.map(details => (
                <div className="column is-3">
                    <ShopCard details={details}/>
                </div>
            ))
        }
    </div>
)

export default ShopsGrid