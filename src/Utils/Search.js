import React from "react";


function Search({ label, name, type, onChange, styling }) {
    return (
        <>
            <input name={name} type={type} placeholder={label} onChange={onChange} className={styling} />
        </>
    );
}
export default Search;

