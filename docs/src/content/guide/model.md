
# **User Model**
<br>

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
<br>

# **Organization Model**
<br>

```js

   type Organization {
        id: ID!
        name: String!
    }


```
<br>

