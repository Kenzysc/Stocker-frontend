import React from 'react'
import Table from '../../Components/Table/Table'

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Stocker Design Page</h1>
        <h2>
            This is Stocker's design page. This is where we'll house various aspects of the app
            and a wiki about various componenet.
        </h2>
        <Table />
    </>
  )
}

export default DesignPage