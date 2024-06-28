import { createElement } from "react";

export function UserFavFoods (){
    return createElement('section',{},
        <span>Favorite Foods: </span>,
        <br />,
        <ul>
            <li>Ugali</li>
            <li>Fish</li>
            <li>Chicken</li>
        </ul>)
}