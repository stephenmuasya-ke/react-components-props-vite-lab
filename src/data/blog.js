const blog = {
  name: "My Personal Blog",
  about:
    "Welcome to my personal blog! Here I share my thoughts on web development, React, and everything in between.",
  image: "https://via.placeholder.com/215",
  posts: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "January 10, 2024",
      preview:
        "React is a JavaScript library for building user interfaces. In this post, we explore the basics of components, props, and state.",
      minutesToRead: 5,
    },
    {
      id: 2,
      title: "Understanding Props",
      date: "February 3, 2024",
      preview:
        "Props allow you to pass data from parent components to child components. They make your components dynamic and reusable.",
      minutesToRead: 8,
    },
    {
      id: 3,
      title: "Component Hierarchy",
      date: "March 15, 2024",
      preview:
        "Designing a clean component tree is essential to building scalable React applications. Let's break down how to think about structure.",
      minutesToRead: 12,
    },
  ],
};

export default blog;
