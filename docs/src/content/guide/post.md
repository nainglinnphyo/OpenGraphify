### **#Find all post**

```graphql
query {
    posts{
        id
        title
        body
        user{
            id
            name
        }
    }
}
```
Output 👇

```json
{
    "data": {
        "posts": [
            {
                "id": "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
                "title": "post one",
                "body": "body one",
                "user": {
                    "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    "name": "NLP"
                }
            }
        ]
    }
}

```
### **#Create post**

```graphql
mutation {
    createPost(dto:{
            title: "post one",
            body: "body one",
            userId: "4865eb72-4a35-4a82-99ac-a04c034e47a5"
        })  
        {
            id,
            body,
            title,
            user {
                id
                name
        }
    }
}
```
Output 👇

```json
{
"data": {
    "createPost": {
    "id": "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
    "body": "body one",
    "title": "post one",
    "user": {
        "id" : "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
        "name": "NLP"
            }
        }
    }
}
```

### **#Create comment**

```graphql
mutation {
    createComment(dto:{
            body: "comment one",
            postId: "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
            userId: "4865eb72-4a35-4a82-99ac-a04c034e47a5"
        })
        {
            id
            body
        }
}
```
Output 👇

```json
{
    "data": {
        "createComment": {
        "id": "6d28697c-eee6-4eca-a3ef-36843f25c48a",
        "body": "comment one"
        }
    }   
}
```

### **#Post with Comment**

```graphql
        mutation {
            query {
                postWithComment(
                    postId: "def7e7ad-1a4f-4475-84e7-d3c10a777c4c"
                ){
                    id
                    title
                    body
                    comment{
                        body
                    }
                    user{
                        id
                        name
                    }
                }
            }
        }
```
Output 👇

```json
    {
        "data": {
            "postWithComment": {
            "id": "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
            "title": "post one",
            "body": "body one",
            "comment": [
                {
                "body": "comment one"
                }
            ],
            "user": {
                "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                "name": "NLP"
                }
            }
        }
    }
```

### **#Post with Comment**

```graphql
    mutation {
        updatePost(dto:{
                title: "title one edit",
                body: "post one edit",
                postId: "def7e7ad-1a4f-4475-84e7-d3c10a777c4c"
            })
            {
                id
                title
                body
            }
    }
```
Output 👇

```json
    {
        "data": {
            "updatePost": {
                "id": "def7e7ad-1a4f-4475-84e7-d3c10a777c4c",
                "title": "title one edit",
                "body": "post one edit"
            }
        }
    }
```
