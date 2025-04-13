import {getPosts} from "./get-post";
import { setPosts } from "./set-post";

let page = 1

getPosts().then(({hits}) =>
    {console.log(hits)})

document.querySelector("load-btn").addEventListener("click", () => {
    page += 1;
    getPosts(page).then(({hits}) => {
        setPosts(hits)
    })
})