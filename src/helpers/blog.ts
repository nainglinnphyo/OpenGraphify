
import { faker } from '@faker-js/faker';

export function generateFakePost() {
    const title = faker.lorem.sentence();
    const paragraphs: string[] = [];

    // Generate multiple paragraphs
    for (let i = 0; i < 5; i++) {
        const paragraph = faker.lorem.paragraph();
        paragraphs.push(`<p>${paragraph}</p>`);
    }

    const content = paragraphs.join('\n');

    const post = {
        title: title,
        content: content,
        author: faker.person.fullName(),
        date: faker.date.past(),
    };

    return post;
}

interface IBlog {
    title: string;
    description: string;
    author: string;
    posts: { title: string, content: string, author: string, date: Date }[];
}
export function generateFakeBlog(blogCount: number, postCount: number) {
    const blogs: IBlog[] = []

    for (let index = 0; index < blogCount; index++) {
        const blog: IBlog = {
            title: faker.lorem.words(3),
            description: faker.lorem.sentence(),
            author: faker.person.fullName(),
            posts: [],
        };

        for (let i = 0; i < postCount; i++) {
            blog.posts.push(generateFakePost());
        }

        blogs.push(blog)
    }
    return blogs;
}