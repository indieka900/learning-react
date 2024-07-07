import { useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/context/usercontext";

export function PostContainer(){
    const userContextDate = useContext(UserContext)
    return (
        <div>
            <PostContent/>
            <div>
                <h1>{userContextDate.firstname + " - " +userContextDate.lastname}</h1>
                <i>{userContextDate.email}</i>
                <h2>{userContextDate.id}</h2>
            </div>
        </div>
    )
}