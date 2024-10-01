import { createSlice } from '@reduxjs/toolkit';

//name is alias for the selector methods

const homeVideosSlice = createSlice({
    name: 'homeVideosGrid',
    initialState: {
        videoData: [
            {
                id: 1,
                title: "Understanding React Hooks",
                description:
                    "Learn how to use React Hooks to manage state and lifecycle in functional components.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "Tech Academy",
                views: "1.2M views",
                uploadDate: "2 days ago",
            },
            {
                id: 2,
                title: "CSS Flexbox Tutorial",
                description:
                    "A comprehensive guide to CSS Flexbox, including examples and best practices.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "CSS Master",
                views: "500K views",
                uploadDate: "1 week ago",
            },
            {
                id: 3,
                title: "JavaScript ES6 Features",
                description:
                    "Explore the new features of JavaScript ES6 and how to use them in your projects.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "JavaScript Guru",
                views: "800K views",
                uploadDate: "3 weeks ago",
            },
            {
                id: 4,
                title: "Building a RESTful API with Node.js",
                description:
                    "Step-by-step tutorial on how to create a RESTful API using Node.js and Express.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "Backend Mastery",
                views: "300K views",
                uploadDate: "1 month ago",
            },
            {
                id: 5,
                title: "Introduction to TypeScript",
                description:
                    "Learn the basics of TypeScript and how it enhances JavaScript development.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "TypeScript Academy",
                views: "450K views",
                uploadDate: "2 months ago",
            },
            {
                id: 6,
                title: "Golang for Beginners",
                description:
                    "An introductory guide to the Go programming language for new developers.",
                thumbnail:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxg0r-zn5UZJz-DqhdKqosRHLIuRYez1CWg&s",
                channel: "Programming Hub",
                views: "320K views",
                uploadDate: "3 weeks ago",
            },
        ]
    },
    reducers: {
        
    }
});

export default homeVideosSlice.reducer;