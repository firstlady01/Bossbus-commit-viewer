import React from "react";


function Search({ label, name, type, onChange, styling, disabled }) {
    return (
        <>
            <input name={name} type={type} placeholder={label} onChange={onChange} className={styling} disabled={disabled} />
        </>
    );
}
export default Search;

