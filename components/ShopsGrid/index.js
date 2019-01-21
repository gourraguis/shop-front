import ShopCard from '../ShopCard'

const ShopsGrid = ({shops}) => (
    <div className="columns is-multiline">
        {
            shops.map((details, i) => (
                <div key={i} className="column is-3">
                    <ShopCard details={details}/>
                </div>
            ))
        }
    </div>
)

export default ShopsGrid