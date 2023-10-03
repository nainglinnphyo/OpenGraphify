
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

