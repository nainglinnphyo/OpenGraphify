
### **#Find all user**

```graphql
    query {
        findAllUser{
            id
            name
            email
            organization {
                name
               }
            }
        }
```
Output 👇

```json
    {
        "data": {
            "findAllUser": [
            {
                "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                "name": "NLP",
                "email": "nlp121@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            },
            {
                "id": "a8e67c67-e0bd-440e-a26f-2632596a1198",
                "name": "NLP",
                "email": "nlp@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            }
            ]
        }
    }
```
### **#Find user by id**

```graphql
    query {
        findUserById(id: "4865eb72-4a35-4a82-99ac-a04c034e47a5") {
            id
            name
            email
            organization {
                name
            }
        }
    }
```
Output 👇

```json
    {
        "data": {
            "findUserById": {
            "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
            "name": "NLP",
            "email": "nlp121@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            }
        }
    }
```

### **#Create User**
**important:** use mutation for data insert

```graphql
    mutation {
        createUser(
                createData: {
                    name: "NLP"
                    email: "nlp@gmail.com"
                    gender: MALE
                    organization: { name: "Xsphere" }
            })
            {
                id
                name
                email
                gender
                organization {
                    name
                }
            }
    }

```
Output 👇

```json
    {
        "data": {
            "createUser": {
            "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
            "name": "NLP",
            "email": "nlp121@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            }
        }
    }
```

### **#Update User**
**important:** use mutation for data update

```graphql
    mutation {
        updateUser(
                updateData: {
                    id: "4865eb72-4a35-4a82-99ac-a04c034e47a5",
                    name: "NLP"
                    email: "nlp@gmail.com"
                    gender: MALE
                    organization: { name: "Xsphere" }
            })
            {
                id
                name
                email
                gender
                organization {
                    name
                }
            }
    }

```
Output 👇

```json
    {
        "data": {
            "updateUser": {
            "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
            "name": "NLP",
            "email": "nlp121@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            }
        }
    }
```

### **#Delete User**

```graphql
    query {
        deleteUser(id: "ff051fbf-24e5-43eb-b308-c105b2656c65") {
            id
            name
            email
            gender
            organization {
                name
            }
        }
    }


```
Output 👇

```json
    {
        "data": {
            "deleteUser": {
            "id": "4865eb72-4a35-4a82-99ac-a04c034e47a5",
            "name": "NLP",
            "email": "nlp121@gmail.com",
                "organization": {
                    "name": "Xsphere"
                }
            }
        }
    }
```