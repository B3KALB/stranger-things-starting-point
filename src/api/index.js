export const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 


export const createNewPost = async (newPost) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    const json = await response.json();
        console.log(json);
        return json;
}