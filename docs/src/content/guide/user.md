
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