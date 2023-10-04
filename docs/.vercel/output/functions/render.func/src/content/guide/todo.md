### **#Find all todo**

```graphql
    query {
        findAllTodo {
            task
            isComplete
            user {
                id
                name
                email
                organization {
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
            "findAllTodo": [
                {
                    "task": "task two",
                    "isComplete": false,
                    "user": {
                    "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    "name": "NLP",
                    "email": "nlp121@gmail.com",
                        "organization": {
                            "name": "Xsphere"
                        }
                    }
                },
                {
                    "task": "task one",
                    "isComplete": false,
                    "user": {
                    "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    "name": "NLP",
                    "email": "nlp121@gmail.com",
                        "organization": {
                            "name": "Xsphere"
                        }
                    }
                }
            ]
        }
    }   
```

### **#Find all todo by userId**

```graphql
    query {
        findAllTodo(userId: "4865eb72-4a35-4a82-99ac-a04c034e47a5") {
            task
            isComplete
            user {
                id
                name
                email
                organization {
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
            "findAllTodo": [
                {
                    "task": "task two",
                    "isComplete": false,
                    "user": {
                    "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    "name": "NLP",
                    "email": "nlp121@gmail.com",
                        "organization": {
                            "name": "Xsphere"
                        }
                    }
                },
                {
                    "task": "task one",
                    "isComplete": false,
                    "user": {
                    "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    "name": "NLP",
                    "email": "nlp121@gmail.com",
                        "organization": {
                            "name": "Xsphere"
                        }
                    }
                }
            ]
        }
    }   
```

### **#Create todo**

```graphql
    mutation {
    createTodo(
        dto: { task: "task one", userId: "4865eb72-4a35-4a82-99ac-a04c034e47a5" }
        ){
            task
            isComplete
            user {
                id
                name
                email
                organization {
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
        "createTodo": {
        "task": "task two",
        "isComplete": false,
        "user": {
            "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
            "name": "NLP",
            "email": "nlp121@gmail.com",
            "organization": {
                "name": "Xsphere"
                }
            }
          }
        }
    } 
```