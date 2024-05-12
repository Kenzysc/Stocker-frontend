import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    // a fragment   <></>
    <>     
       <h4>{portfolioValue}</h4>
       {/* <button>X</button> */}
       <DeletePortfolio 
        onPortfolioDelete={onPortfolioDelete} 
        portfolioValue={portfolioValue} 
    />
    </>
  )
}

export default CardPortfolio