import axios from "axios"
import API_DOMAIN from "./hostname"

/* Action type */
import { API as TYPE_API } from "./Action"

const apiMiddleware = ({dispatch}) => next => action => {
    next(action);

    if (action.type !== TYPE_API) return;

    const {
        url,
        method,
        data,
        onSuccess,
        onFailure
    } = action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    /* Define instance for AJAX request */
    const instance = axios.create();
    instance.defaults.baseURL = API_DOMAIN;
    instance.defaults.headers.common["Content-Type"] = "application/json";

    instance
        .request({url, method, [dataOrParams]: data})
        .then( (response) => {
            var data = response.data;
            if (data.success){
                dispatch(onSuccess(data));
            } else {
                dispatch(onFailure(data))
            }
        })
        .catch( (error) => {
            dispatch(onFailure(error));
        } )
}

export default apiMiddleware;