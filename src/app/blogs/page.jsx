import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "কথাতে ভুল হলে | Abu ubayda | lyrics",
      desc: "কথাতে ভুল হলে নিরবে যেও ভুলে, খোপার চুল খুলে এসো সেদিন। আবারো ভালোবেসো পরানো খুলে হেসো, সরমে ঘরে সুখ যেকোনো দিন। স্মরণে আসে যদি ভালোবাসার নদি, তোমাতে নিরবধির হব বিলিন।(২) কথাতে ভুল হলে নিরবে যেও ভুলে, খোপার চুল খুলে এসো সেদিন। আবারো ভালোবেসো পরানো খুলে হেসো, সরমে ঘরে সুখ যেকোনো দিন। রদেলা দুপুরে খেয়ালি নুপুরে, হেয়ালি টুপুরে পাসে রবো। ঝরা পাতার গানে, করা ধোয়ার গ্রানে, ভরা জোয়ার গাঙ্গে, ভেসে যাব। রদেলা দুপুরে খেয়ালি নুপুরে, হেয়ালি টুপুরে পাসে রবো। ঝরা পাতার গানে, করা ধোয়ার গ্রানে, ভরা জোয়ার গাঙ্গে, ভেসে যাব। পরসে রেখো পাশে, ভরসে থেকো মিশে, হরশে ",
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
        <div className="p-4 border w-72">
          <h3 className="font-bold text-lg">{blog?.title}</h3>
          <br />
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
