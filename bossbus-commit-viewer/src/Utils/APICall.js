import axios from "axios";
import Constants from "./Constants";

export default async function APICall(Url, Method, Data = null, timeoutOverride, silent) {


    let baseUrl = Constants.apiBaseUrl;
    // if (!baseUrl.endsWith("/")) {
    //     baseUrl = baseUrl + "/";
    // }

    // if (Url.startsWith("/")) {
    //     Url = Url.substring(1);
    // }

    let response = await axios({
        method: Method,
        url: baseUrl + Url,
        data: Data,
        timeout: timeoutOverride || process.env.REACT_APP_REQUEST_TIMEOUT,
    })

    if (response) {
        if (!response.status || response.status === 0) {
            if (!silent) window.alert("error", "Sorry it seems you are not connected to internet. Please check you network connection and try again");
            return null;
        }

        if (response.status == 400 || response.status == 404) {
            let message = "Sorry your request is invalid. please check your request and try again";
            window.location.href = "/"
            if (!silent) window.alert("warning", message);
            return null;
        }
        if (response.status >= 500) {
            let message = "Sorry your request cannot be processed at this moment please try again later";

            if (!silent) window.alert("error", message);
            return null;
        }

    }
    else {
        if (!silent) {
            window.alert(
                "error",
                "Your request generated an error. Please check your network connection"
            );
        }
    }


    return !response ? null : response.data ? response.data : { status: "success" };
}
