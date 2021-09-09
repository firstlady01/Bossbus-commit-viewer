import React from "react";
import CommitBar from "../Components/Layouts/CommitBar";

function Loader(props) {
    return (
        <>
            <CommitBar />
            <div className="loader">
                <div>
                    <h3>{props.repo}</h3>
                </div>
                <p>Loading....</p>
            </div>
        </>
    )
}

export default Loader;