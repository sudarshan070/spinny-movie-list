import { ERROR_RESET } from "../action/types";

function errorMessage(state = null, action) {
    const { type, error } = action

    if (type === ERROR_RESET) {
        return null
    } else if (error) {
        return error
    }

    return state
}


export default errorMessage