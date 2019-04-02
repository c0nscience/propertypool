import React from 'react'
import Header from '../components/header'

const Index = ({properties}) => {
  return <main>
    <Header/>
    <section>
      {properties.map(property =>
        <article key={property.id}>
          <h2>{property.name}</h2>
          <p>
            {property.location}<br/>
            {property.livingArea}m^2 - {property.price} Eur
          </p>
        </article>
      )}
    </section>
  </main>
}

Index.getInitialProps = async () => {
  return {
    properties: [
      {
        id: 1,
        name: 'Neue Florahoefe',
        location: 'Wollankstrasse 119, Berlin',
        livingArea: 105.3,
        price: 558000
      },
      {
        id: 2,
        name: 'Dichtervillen',
        location: 'Regener Strasse, Berlin',
        livingArea: 94,
        price: 430000
      }
    ]
  }
}

export default Index
