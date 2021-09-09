import React, { useState, useEffect } from 'react';
import CommitBar from '../Components/Layouts/CommitBar';
import CommitService from './../Services/CommitService';

const Commits = (props) => {

    const [allCommit, setAllCommit] = useState([]);
    const [loading, setLoading] = useState(false);
    const [repo, setRepo] = useState("");



    const allCommitsList = async (repo) => {

        var listAllCommit = await CommitService.listCommit(repo);
        if (listAllCommit) {
            console.log(listAllCommit);
            setAllCommit(listAllCommit);

        }
    };
    const convertDatetoReadable = (date) => {
        if (date) {
            console.log(date);
            return new Date(date).toISOString().split('T')[0];
        }
        return "";

    };
    useEffect(() => {
        const fetchData = async () => {
            var repo = new URLSearchParams(props.location.search).get("repo");
            await allCommitsList(repo);
            await setRepo(repo);
        }

        fetchData();
    }, [])

    return (
        <>
            <CommitBar label={repo} />
            <div className="commit-list">
                <h3>{repo}</h3>
                {allCommit.slice(1, 11).map((commitList, index) => (
                    <div className="commit" key={index}>
                        <div className="name">
                            <div className="circle"></div>
                            <div className="repo"> <p>{commitList.commit.author.name}</p></div>

                        </div>
                        <div className="default">{commitList.url}</div>
                        <div className="date">{convertDatetoReadable(commitList.commit.author.date)}</div>
                    </div>
                ))}


            </div>
        </>
    );
}


export default Commits;