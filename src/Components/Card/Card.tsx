//import logo from "../../logo.svg";
import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css";

interface Props {
  companyName?: string;
  ticker?: string;
  price?: number;
  id?: string;
  searchResult?: CompanySearch;
  onPortfolioCreate?: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({companyName, ticker, price, searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    // <img src={logo} />
    <div className='card'>
        <div className='details'>
            <h2>
              {searchResult?.name} ({searchResult?.symbol}) 
              {/* without the ? in searchResult?.name, it gives an undefined error coz I guess TS isnt sure of the type */}
            </h2>
            <p>${searchResult?.currency}</p>
        </div>
        <div className='info'>
            {searchResult?.exchangeShortName} - {searchResult?.stockExchange}
        </div>
        <p>
          <AddPortfolio 
            onPortfolioCreate={onPortfolioCreate} 
            symbol={searchResult?.symbol} />
        </p>
    </div>
  )
}

export default Card;