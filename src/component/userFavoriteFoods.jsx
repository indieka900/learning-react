import { createElement } from "react";
import styles from "./users.module.scss";

export function UserFavFoods (){
    return createElement('section',{},
        <span className={styles.foodsTitle}>Favorite Foods: </span>,
        <br />,
        <ul className={styles["one-food"]}>
            <li>Ugali</li>
            <li>Fish</li>
            <li>Chicken</li>
        </ul>)
}