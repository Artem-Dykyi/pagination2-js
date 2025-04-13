export const getPost = () => fetch(
    `https://pixabay.com/api/?key=`
).then((response) => response.json())