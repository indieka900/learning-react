import { useResizeWindow } from "../utils/hooks/useResizeWindow";

export function LoginForm() {
    //custom hook
    useResizeWindow();
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target)
            console.log(formData);
            const username = formData.get("username");
            const password = formData.get("password");
            console.log(`Username: ${username}. Password: ${password}`);
        }} style={{ padding: "25px" }}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" style={{ margin: "20px" }} onChange={(e) => {
                console.log(`Username: ${e.target.value}`);
            }}
            />
            <br />
            <label htmlFor="password">password: </label>
            <input type="password" name="password" id="password" style={{ margin: "20px" }} onChange={(e) => {
                console.log(`Password: ${e.target.value}`);
            }} />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}