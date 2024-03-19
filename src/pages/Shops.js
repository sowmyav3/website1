import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollections/NewCollection'

export default function Shops() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
    </div>
  )
}