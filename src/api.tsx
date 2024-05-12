import axios from 'axios';
import { CompanySearch } from './company';

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message; // before I added this, I got an error in the App.tsx type narrowing in the if-else(return.data) BCOZ this particular conditional had only console.log and returned undefined. i.e undefined would cause an error elsewhere
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occured";
        }
    }
}