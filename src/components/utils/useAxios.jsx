import axios from "axios";

const useAxios = () => {
    return async (url, state, loading, prevValue = null) => {
        return axios.get(url)
            .then((res) => {
                state(res.data)
                return res
            })
            .catch((error) => {
                state(prevValue)
                console.error('Invalid query name')
                return error
            })
            .finally(() => {
                loading(false)
            })
        }
}

export { useAxios }