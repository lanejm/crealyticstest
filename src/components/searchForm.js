import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchItems() {
        setSearchTerm(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search for items</label>
                    <input
                    type='text'
                    name='name'
                    id='name'
                    ref={searchValue}
                    onChange={searchItems}
                    />
                </div>
            </form>
        </section>
    )
}