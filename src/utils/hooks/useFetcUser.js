import { useEffect, useState } from "react";

export function useFetchUser(userId) {

    const [userdata, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController ();
        fetch(`https://jsonplaceholder.org/users/${userId}`, {signal:controller.signal})
        .then((res)=> res.json())
        .then((data) => {
            setUserData(data);
            setError(undefined);
        })
        .catch((err) => setError(err))
        .finally(() => setTimeout(() => {
            setLoading(false);
        }, 1500))
        

        //cleanUp function
        return () => {
            setLoading(false)
            controller.abort();
        };
    }, [userId]);
    return {userdata, loading, error};
}