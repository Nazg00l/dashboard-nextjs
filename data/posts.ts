import { Post } from "@/types/posts";

const posts: Post[] = [
    {
        id: "1",
        title: "Understanding TypeScript",
        body: "TypeScript extends JavaScript by adding types.",
        author: "John Doe",
        date: "2024-01-01",
        comments: [
            { id: "1", text: "Great article!", username: "alice" },
            { id: "2", text: "Very informative.", username: "bob" }
        ]
    },
    {
        id: "2",
        title: "Introduction to React",
        body: "React is a JavaScript library for building user interfaces.",
        author: "Jane Smith",
        date: "2024-01-02",
        comments: [
            { id: "1", text: "This is so helpful.", username: "charlie" },
            { id: "2", text: "Thanks for sharing.", username: "dave" }
        ]
    },
    {
        id: "3",
        title: "Advanced Node.js",
        body: "Node.js allows you to run JavaScript on the server.",
        author: "Mike Brown",
        date: "2024-01-03",
        comments: [
            { id: "1", text: "I learned a lot.", username: "eve" },
            { id: "2", text: "Well explained.", username: "frank" }
        ]
    },
    {
        id: "4",
        title: "CSS Grid Layout",
        body: "CSS Grid Layout is a two-dimensional layout system for the web.",
        author: "Lisa White",
        date: "2024-01-04",
        comments: [
            { id: "1", text: "This made grids easy.", username: "grace" },
            { id: "2", text: "Clear and concise.", username: "henry" }
        ]
    },
    {
        id: "5",
        title: "Getting Started with Python",
        body: "Python is a versatile programming language.",
        author: "Chris Green",
        date: "2024-01-05",
        comments: [
            { id: "1", text: "Nice introduction.", username: "irene" },
            { id: "2", text: "Very beginner-friendly.", username: "jack" }
        ]
    },
    {
        id: "6",
        title: "Building REST APIs",
        body: "REST APIs are a way to provide data to clients.",
        author: "Sarah Black",
        date: "2024-01-06",
        comments: [
            { id: "1", text: "Just what I needed.", username: "karen" },
            { id: "2", text: "Clear examples.", username: "leo" }
        ]
    },
    {
        id: "7",
        title: "Mastering Git",
        body: "Git is a distributed version control system.",
        author: "Robert Grey",
        date: "2024-01-07",
        comments: [
            { id: "1", text: "Helpful tips.", username: "mike" },
            { id: "2", text: "Well written.", username: "nina" }
        ]
    },
    {
        id: "8",
        title: "Understanding Docker",
        body: "Docker allows you to containerize applications.",
        author: "Anna Blue",
        date: "2024-01-08",
        comments: [
            { id: "1", text: "Very useful.", username: "oliver" },
            { id: "2", text: "Thanks for the info.", username: "peter" }
        ]
    },
    {
        id: "9",
        title: "Introduction to Kubernetes",
        body: "Kubernetes is an open-source container orchestration system.",
        author: "Tom Red",
        date: "2024-01-09",
        comments: [
            { id: "1", text: "Great overview.", username: "quincy" },
            { id: "2", text: "Really helpful.", username: "rachel" }
        ]
    },
    {
        id: "10",
        title: "Learning Vue.js",
        body: "Vue.js is a progressive JavaScript framework.",
        author: "Emily White",
        date: "2024-01-10",
        comments: [
            { id: "1", text: "Fantastic guide.", username: "steve" },
            { id: "2", text: "Very insightful.", username: "tina" }
        ]
    }
];

export default posts;