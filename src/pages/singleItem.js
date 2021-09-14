import React from 'react'
import Loading from '../components/loading'
import { useParams} from 'react-router-dom'

export default function SingleItem() {
    const {title} = useParams()
    const [loading, setLoading] = React.useState(false)
    const [item, setItem] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getItem() {
            try {
                const response = await fetch(`http://localhost:3000`)
                const data = await response.json()
                if (data.items) {
                    const {
                        title: title,
                        gtin: gtin,
                        gender: gender,
                        salePrice: salePrice,
                        price: price,
                        imageLink: imageLink,
                    } = data.items[0]
                    const newItem = {
                        title,
                        gtin,
                        gender,
                        salePrice,
                        price,
                        imageLink
                    }
                    setItem(newItem)
                } else {
                    setItem(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getItem()
    }, [title])
    if (loading) {
        return <Loading />
    }
    if (!item) {
        return <h2 className="section-title">No items to display</h2>
    } else {
        const {
            title,
            gtin,
            gender,
            salePrice,
            price,
            imageLink
        } = item
        return (
            <section className="section item-section">
                <h2 className="section-title">{title}</h2>
                <div className="item">
                    <img src={imageLink} alt={title}></img>
                    <div className="item-info">
                        <p>
                            <span className="item-data">title: </span> {title}
                        </p>
                        <p>
                            <span className="item-data">gtin: </span> {gtin}
                        </p>
                        <p>
                            <span className="item-data">gender: </span> {gender}
                        </p>
                        <p>
                            <span className="item-data">sale price: </span> {salePrice}
                        </p>
                        <p>
                            <span className="item-data">price: </span> {price}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}