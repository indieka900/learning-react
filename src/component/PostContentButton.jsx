import { useContext } from "react";
import { UserContext } from "../utils/context/usercontext";

export function PostContentButton() {
    const {setUserData} = useContext(UserContext)

    const handleOnClick = () => {
        setUserData((current) => ({...current, id: current.id + 2}))
    }

    return(
        <div>
            <h2><button onClick={handleOnClick}>Change</button></h2>
        </div>
    );
}