export const setPosts = (posts)=> {
    posts.forEach(element => {
        document.querySelector("#list").insertAdjacentElement(
            "beforeend",
             `<li class="list__item">
            <img class="list__img" src="" alt="">
        </li>`
        )
        
    });
    
}