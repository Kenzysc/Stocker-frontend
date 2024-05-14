import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData';

interface Props {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
];

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Stocker Design Page</h1>
        <h2>
            This is Stocker's design page. This is where we'll house various aspects of the app
            and a wiki about various componenet.
        </h2>
        <RatioList data={testIncomeStatementData} config={tableConfig} />
        <h3>RationList - </h3>
        <Table />
        <h3>
            Table- Table takes in a configuration object and company data as pareams. 
            Use the config to style your data. 
        </h3>
    </>
  )
}

export default DesignPage