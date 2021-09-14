import React from 'react'
import Item from './items'
import Loading from './loading'
import { useGlobalContext } from '../context'

export default function ItemList() {
    const {items, loading} = useGlobalContext()
    console.log(items)
    if (loading) {
        return <Loading />
    }
    if (items.length < 1) {
        return (
            <h2 className="section-title">
                No items matched your search criteria
            </h2>
        )
    }
    return (
        <section className="section">
            <h2 className="section-title">Items</h2>
            <div className="items-center">
                {items.slice(0,100).map((item) => {
                    return <Item key={item.gtin} {...item} />
                })}
            </div>
        </section>
    )
}