
### **#User Model**
```js

   type User {
        email: String!
        gender: GENDER
        id: ID!
        isActive: Boolean!
        lastUpdated: DateTime!
        name: String!
        organization: Organization!
        organizationId: String!
        password: String!
    }


```
### **#Organization Model**

```js

   type Organization {
        id: ID!
        name: String!
    }

```

### **#Todo Model**

```js
   type TodoModel {
        id: ID!
        isComplete: Boolean!
        task: String!
        user: User!
        userId: String!
    }
```




