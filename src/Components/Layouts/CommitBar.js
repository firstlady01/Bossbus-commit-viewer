import React, { useState } from 'react';
import Button from '../../Utils/Button';
import Search from '../../Utils/Search';
import Validation from '../../Utils/Validation';

function CommitBar({ label }) {

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

    const handleInputChange = (e) => {
        // e.preventDefault(e);
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
        console.log(formData)

    }

    return (
        <header className="commit">
            <a href="/" className="logo">CommitViewer</a>
            <div className="header-right">
                <form>
                    <div>
                        <Search name="search" styling="btn-sm" value={formData.Search} type="text" label={label} onChange={handleInputChange} disabled />
                        {formErrors.search && <p className="error">{formErrors.search}</p>}
                    </div>
                    <div>
                        <Button label="See Commits 🚀" color="btn btn-sm" handleClick={handleSubmit} disabled />
                    </div>
                </form>
            </div>
        </header>
    );
}


export default CommitBar;