import React from 'react'
import Header from '../components/header'
import groupby from 'lodash.groupby'

const StatusList = ({name, properties}) => {
  return <section>
    <h2>{name}</h2>
    {properties.map(property =>
      <PropertyTile key={property.id}
                    name={property.name}
                    location={property.location}
                    livingArea={property.livingArea}
                    price={property.price}/>
    )}
  </section>
}

const PropertyTile = ({name, location, livingArea, price}) => {
  return <article>
    <h3>{name}</h3>
    <p>
      {location}<br/>
      {livingArea} qm - {price} Eur
    </p>
  </article>
}

const Index = ({status, groupedProperties}) => {
  return <main>
    <Header/>
    {
      status.map(s => {
        const properties = groupedProperties[s.id]
        return <StatusList key={s.id} name={s.name} properties={properties}/>
      })
    }
  </main>
}

Index.getInitialProps = async () => {

  const properties = [
    {
      id: 1,
      name: 'Neue Florahoefe',
      location: 'Wollankstrasse 119, Berlin',
      livingArea: 105.3,
      price: 558000,
      statusId: 1
    },
    {
      id: 2,
      name: 'Dichtervillen',
      location: 'Regener Strasse, Berlin',
      livingArea: 94,
      price: 430000,
      statusId: 2
    },
    {
      id: 3,
      name: 'Schreibfederhoeffe',
      location: 'Weserstrasse',
      livingArea: 95,
      price: 500000,
      statusId: 0
    }
  ]

  const status = [
    {
      id: 0,
      name: 'Vorauswahl',
      weight: 100
    },
    {
      id: 2,
      name: 'Archiv',
      weight: 200
    },
    {
      id: 1,
      name: 'Beratungstermin',
      weight: 0
    }
  ].sort((a, b) => a.weight - b.weight)

  return {
    groupedProperties: groupby(properties, 'statusId'),
    status
  }
}

export default Index
