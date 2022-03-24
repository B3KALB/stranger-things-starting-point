const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT';
// const token = ;

export const getPosts = async () => {
    const url = `${baseUrl}/posts`;
    const token = localStorage.getItem('stranger_things_JWT')
    console.log(token)
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } 
    })
    const json = await response.json()
    return json;
} 

export const testAutentication = async () => {

    const url = `${baseUrl}/test/me`;
    const token = localStorage.getItem('stranger_things_JWT');
    const response = await fetch(url, {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } 
    });
    console.log(response)

    const json = await response.json();
        console.log(json);
        return json;
};

export const registerUser = async (username, password) => {

    const url = `${baseUrl}/users/register`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {username: username,
            password: password}
        })

    });

    const json = await response.json();
        console.log(json);
        localStorage.setItem('stranger_things_JWT', json.data.token);
        return json;
}

export const createNewPost = async (newPost) => {
    console.log(newPost)
    //auth tell who makes post , if alowed
    const token = localStorage.getItem('stranger_things_JWT');
    const url = `${baseUrl}/posts`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: newPost 
            })
    
    });
    const json = await response.json();
        console.log(json);
        return json;
}

// export const updateNewPost = async (postId,newPost) => {
//     const url = `${baseUrl}/posts/${postId}`;
//     const response = await fetch(url, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//     });
//         const json = await response.json();
//         console.log(json);
//         return json;
// };
export const deletePostById = async (postId) => {
    const token = localStorage.getItem('stranger_things_JWT');
    const url = `${baseUrl}/posts/${postId}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } 
    });
    
    const json = await response.json();
    console.log(json);
    return json;
}

