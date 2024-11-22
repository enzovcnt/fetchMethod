//GET ALL

fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

//GET ONE

fetch ('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data));


//POST

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'POST',
        body: 'fbhebfuefbebfue',
        userId: 19,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(response => response.json())
.then(data => console.log(data));

//POST WITH LET


let lesHeaders = {'content-type': 'application/json; charset=UTF-8'};
let leBodyJS = {
    title : 'POST LET',
    body: 'fbhebfefefefuefbebfue',
    userId: 30,
};
let leBodyJSON = JSON.stringify(leBodyJS);

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: lesHeaders,
    body: leBodyJSON,
})
    .then(response => response.json())
    .then(data => console.log(data));

//PUT > is used to replace the entire resource with a new representation, meaning that all the fields of the resource are sent in the request body, even if they are not modified.

fetch ('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PUT',
    body: JSON.stringify({
        id: 2,
        title: 'test PUT',
        body: 'PUTPUTPUT',
        userId: 19,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));


//PATCH > is used to apply partial updates to a resource, meaning that only the fields that need to be changed are sent in the request body.

fetch ('https://jsonplaceholder.typicode.com/posts/3', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'test PATCH',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));

//DELETE

fetch ('https://jsonplaceholder.typicode.com/posts/4', {
    method: 'DELETE',
})
    .then(response => response.json())
    .then(data => console.log(data));