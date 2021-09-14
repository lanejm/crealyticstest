import React from 'react'
import ItemList from '../components/itemList'
import SearchForm from '../components/searchForm'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <ItemList />
    </main>
  )
}