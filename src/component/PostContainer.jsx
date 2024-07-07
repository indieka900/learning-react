import { useContext } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/context/usercontext";

export function PostContainer(){
    const userContextDate = useContext(UserContext)
    return (
        <div>
            <PostContent/>
            <div>
                <h2>{userContextDate.username}</h2>
            </div>
        </div>
    )
}