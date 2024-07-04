import { useState } from "react";

export function PostData() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });
  return (
    <div>
      <form action="" method="post" onSubmit={(e) => {
        e.preventDefault();
        if (blogPostData.body && blogPostData.title){ 
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    userId: 12,
                    title: blogPostData.title,
                    body: blogPostData.body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then((res) => res.json()).then((data) => {
                console.log(data);
            }).catch((e) => {
                console.log(e);
            })
        }
      }}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogPostData.title}
          onChange={(e) => {
            setBlogPostData((current) => ({
              ...current,
              title: e.target.value,
            }));
          }}
        />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={blogPostData.body}
          onChange={(e) => {
            setBlogPostData((current) => ({
              ...current,
              body: e.target.value,
            }));
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
