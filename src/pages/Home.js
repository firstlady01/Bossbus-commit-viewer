import React, { useState } from 'react';
import Button from '../Utils/Button';
import NavBar from './../Components/Layouts/NavBar';
import Search from '../Utils/Search';
import Validation from './../Utils/Validation';
import Loader from '../Utils/Loader';
import CommitService from './../Services/CommitService';
import async from './../Utils/APICall';


const Home = () => {
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Search: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormErrors(Validation(formData));
        let errors = Validation(formData).isValidated;
        if (!errors) {
            setTimeout(async () => {
                window.location.reload();
            }, 300);
        } else if (errors) {
            setLoading(true);
            let newData = formData.Search;
            console.log(newData);
            window.location.href = "/commit?repo=" + newData;
        }
    }
    const training = async () => {
        setLoading(true);
        let repo = "github/training-kit";
        window.location.href = "/commit?repo=" + repo;
        setLoading(false);
    }

    const microsoft = async () => {
        setLoading(true);
        let repo = "microsoft/vscode";
        window.location.href = "/commit?repo=" + repo;
        setLoading(false);
    }
    const styleguidist = async () => {
        setLoading(true);
        let repo = "styleguidist/react-styleguidist";
        window.location.href = "/commit?repo=" + repo;
        setLoading(false);
    }
    const firstlady = async () => {
        setLoading(true);
        let repo = "firstlady01/bossbus-commit-viewer";
        window.location.href = "/commit?repo=" + repo;
        setLoading(false);
    }
    const handleInputChange = (e) => {
        // e.preventDefault(e);
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
        console.log(formData)

    }
    return (
        <>
            {loading ? <Loader /> :
                <>
                    <NavBar />
                    <div className="welcome">
                        <div>
                            <h1>Discover the<br /> world of Code</h1>
                        </div>
                        <p>Explore open source projects from GitHub, and read their commit history to see the story of how they were built.</p>
                    </div>
                    {/* Input fields */}
                    <div className="form-group">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Search name="Search" type="text" value={formData.Search} label={"🔍 E.g. facebook/react"} onChange={handleInputChange} />
                                {formErrors.search && <p className="error">{formErrors.search}</p>}
                            </div>
                            <div>
                                <Button label="See Commits🚀" color="btn" handleClick={handleSubmit} ></Button>
                            </div>
                        </form>
                        <div><p>Or pick one of this suggested repos</p></div>
                    </div>
                    {/* Repos suggestions */}
                    <div className="suggestions">
                        <Button label="github/training-kit" color="btn-blue" handleClick={training} />
                        <Button label="microsoft/vscode" color="btn-blue" handleClick={microsoft} />
                        <Button label="styleguidist/react-styleguidist" color="btn-blue" handleClick={styleguidist} />
                        <Button label="firstlady01/bossbus-commit-viewer" color="btn-blue" handleClick={firstlady} />
                    </div>
                </>
            }
        </>
    );

}

export default Home;