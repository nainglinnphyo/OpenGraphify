# GraphQL NestJS Server with Client-Side Playground 🚀

This repository provides a powerful GraphQL server built with NestJS, along with a client-side playground for easy API exploration and testing. Whether you're developing a new GraphQL-based application or just want to experiment with GraphQL queries and mutations, this project offers a convenient setup.

## 📦 Features

- GraphQL Server using NestJS for building robust, maintainable APIs.
- A client-side GraphQL playground powered by Apollo Client for testing queries and mutations.
- Scalable folder structure for organizing your GraphQL schema, resolvers, and services.
- JWT-based authentication system for securing your API endpoints (currently not implement).
- Sample GraphQL schema and resolvers to get you started quickly.
- Docker containerization for easy deployment and development environment consistency.

## 🔧 Getting Started

1. Clone this repository.
2. Install the necessary dependencies using `pnpm i`.
3. Configure your environment variables using  `cp .env.example .env` and update your `DATABASE_URL` and `NODE_ENV` mode .
4. Generate prisma types and seed data using using `npx prisma generate` && `npx prisma db seed`
5. Start the server using `pnpm run:dev` or use Docker for containerized development.
6. Access the client-side playground at `http://localhost:3000/graphql` and begin exploring your API.
7. For more about documentation [here](https://opengraphify.vercel.app/guide)

## 🧩 Customize and Extend

Feel free to modify and extend this project to suit your specific needs. You can add new GraphQL types, resolvers, and services to build out your API, or integrate it into your existing NestJS project.

## 📄 Documentation

For detailed information on how to use and extend this GraphQL NestJS server, check out the documentation `cd docs && pnpm i && pnpm dev`.

## 🙏 Contributions

Contributions, bug reports, and feature requests are welcome! Please open an issue or create a pull request to collaborate with the community.

## 📜 License

This project is licensed under the MIT License.

## 👥 Maintainers

- [Naing Linn Phyo](https://nainglinnphyo.vercel.app)

Happy GraphQL coding!🔥
