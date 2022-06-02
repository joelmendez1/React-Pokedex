import axios from "axios";

const useAxios = () => {
    return async (url, state, loading) => {
        return axios.get(url)
            .then((res) => {
                state(res.data)
            })
            .catch((error) => {
                 console.error(error.mesagge)
            })
            .finally(() => {
                loading(false)
            })
        }
}

export { useAxios }