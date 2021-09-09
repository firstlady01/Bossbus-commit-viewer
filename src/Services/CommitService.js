import APICall from "../Utils/APICall"


export default class CommitService {
    static listCommit = async (repo) => {
        return APICall(`/repos/${repo}/commits`, "GET");
    }
}