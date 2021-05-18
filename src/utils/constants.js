import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'packages',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our main priority is to provide different holiday packages that include diffferent flight plans and hotel. Our website is also recommending some popular tourist attractions for each countries.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Explorify is a free, flexible and user-friendly website that holiday packages that can simplify the travel planning process for our customers. ',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Explorify is a brand new website that offer pre-bundled travel packages unlike any other companies. ',
  },
]

export const products_url =
  'https://explorifyapi.netlify.app/.netlify/functions/airtable'

export const single_product_url = `https://explorifyapi.netlify.app/.netlify/functions/products?id=
`
