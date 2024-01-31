import React from 'react'

interface ProductPageProps {
    params : {
        id: string
    }
}


const page = ({params} :ProductPageProps) => {

    const id = params.id
  return (
    <div>
    <div>{id}</div>
    <h1>TETSTTTSDVSHDJ</h1>
    <div>{id}</div>
    </div>
  )
}

export default page