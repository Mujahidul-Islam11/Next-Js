import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development",
      desc: "Exploring the latest trends and technologies shaping the future of web development, including frameworks, libraries, and best practices.",
    },
    {
      id: 2,
      title: "Mastering JavaScript",
      desc: "A comprehensive guide to mastering JavaScript, covering everything from basic syntax to advanced concepts and tips for becoming a proficient developer.",
    },
    {
      id: 3,
      title: "React vs Angular: A Comparative Analysis",
      desc: "A detailed comparison between React and Angular, highlighting their strengths, weaknesses, and the best use cases for each framework.",
    },
    {
      id: 4,
      title: "Building a Responsive Website",
      desc: "An in-depth tutorial on building responsive websites, focusing on design principles, CSS techniques, and tools to create mobile-friendly layouts.",
    },
    {
      id: 5,
      title: "The Rise of AI in Web Development",
      desc: "An exploration of how artificial intelligence is revolutionizing web development, including AI-powered tools, automation, and the impact on future projects.",
    },
  ];

  return (
    <div className="flex justify-center p-4 gap-4 flex-wrap">
      {blogs?.map((blog) => (
        <div className="p-4 border w-60">
          <h3>{blog?.title}</h3>
          <h3>{blog?.desc}</h3>
          <Link href={`/blogs/${blog.id}`}>
            <button className="bg-red-500 px-3 py-2 text-white">
              View details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
