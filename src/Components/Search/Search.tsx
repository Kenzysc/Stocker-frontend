import React, { ChangeEvent, MouseEvent, SyntheticEvent} from 'react';

interface Props {
    // onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    // search: string | undefined;
    // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;

    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {

    return (
        //  <div>
        //     <input title="..." value={search} onChange={(e) => handleChange(e)} ></input>
        //     <button onClick={(e) => onClick(e)}>Clik me </button>
        //  </div>

        // this is a fragment coz of the <> </>
        // changed from buton submit to form submit so you can search without a search button
        <>
            <form onSubmit={onSearchSubmit}>
                <input title="..." value={search} onChange={handleSearchChange} />
            </form>
        </>
    );

}

export default Search;