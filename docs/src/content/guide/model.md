
### **#User Model**
```graphql
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

```graphql
type Organization {
    id: ID!
    name: String!
}
```

### **#Todo Model**

```graphql
type TodoModel {
    id: ID!
    isComplete: Boolean!
    task: String!
    user: User!
    userId: String!
}
```

### **#Post Model**

```graphql
type Post {
    body: String!
    comment: [Comment!]
    id: ID!
    title: String!
    user: User!
    userId: String!
}
```
### **#Comment Model**

```graphql
type Comment {
    body: String!
    id: ID!
    user: User!
    userId: String!
}
```




