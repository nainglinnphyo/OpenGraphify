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
        findAllTodoByUserId(userId: "4865eb72-4a35-4a82-99ac-a04c034e47a5") {
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
            "findAllTodoByUserId": [
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
### **#Find todo by id**

```graphql
    query {
        findAllTodoById(id: "4865eb72-4a35-4a82-99ac-a04c034e47a5") {
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
            "findAllTodoById":{
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

### **#Complete todo**

```graphql
    query {
        completeTask(
            id: "4865eb72-4a35-4a82-99ac-a04c034e47a5"
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
        "completeTask": {
        "task": "task two",
        "isComplete": true,
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
### **#Delete todo**

```graphql
    query {
        deleteTodo(
            id: "4865eb72-4a35-4a82-99ac-a04c034e47a5"
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
        "deleteTodo": {
            "task": "task two",
            "isComplete": true,
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