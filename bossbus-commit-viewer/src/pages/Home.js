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
    const training = async (repo = "/github/training-kit") => {
        await CommitService.listCommit(repo);
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
                        <Button label="microsoft/vscode" color="btn-blue" />
                    </div>
                </>
            }
        </>
    );

}

export default Home;