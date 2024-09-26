import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs page - next hero",
  description: "Read blogs and resources",
};

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "কথাতে ভুল হলে | Abu ubayda | Lyrics",
      desc: "কথাতে ভুল হলে নিরবে যেও ভুলে, খোপার চুল খুলে এসো সেদিন। আবারো ভালোবেসো পরানো খুলে হেসো, সরমে ঘরে সুখ যেকোনো দিন। স্মরণে আসে যদি ভালোবাসার নদি, তোমাতে নিরবধির হব বিলিন।(২) কথাতে ভুল হলে নিরবে যেও ভুলে, খোপার চুল খুলে এসো সেদিন। আবারো ভালোবেসো পরানো খুলে হেসো, সরমে ঘরে সুখ যেকোনো দিন। রদেলা দুপুরে খেয়ালি নুপুরে, হেয়ালি টুপুরে পাসে রবো। ঝরা পাতার গানে, করা ধোয়ার গ্রানে, ভরা জোয়ার গাঙ্গে, ভেসে যাব। রদেলা দুপুরে খেয়ালি নুপুরে, হেয়ালি টুপুরে পাসে রবো। ঝরা পাতার গানে, করা ধোয়ার গ্রানে, ভরা জোয়ার গাঙ্গে, ভেসে যাব। পরসে রেখো পাশে, ভরসে থেকো মিশে, হরশে ",
    },
    {
      id: 2,
      title: "Badla Din | বাদলা দিন | Abu ubayda | Lyrics",
      desc: `কোনো এক বাদলা দিনে, আমি তোর ছাতা হবো। রাজি তুই থাকলে পরে, প্রণয়ের কথা কব।(২)
      রিমঝিম বৃষ্টি ফোটায়, দৃষ্টি রাখবো ধরে। কাজলে লিপটে যাবো, দু'চোখের মিষ্টি হরে। তুই যদি হাসরে আমার, 
      তুই যদি হাসরে আমার, আমি ঠিক তরী হবো। রাজি তুই থাকলে পরে, প্রণয়ের কথা কব।   
      ঠোমকা বাতাস এলে, আগলে রাখবো ঠিকই। আমি তুই হাত মিলিয়ে, হাঁটবো চারদিকে।(২)
      শ্রাবণের অঝর ধারাই, শ্রাবণের অঝর ধারাই আমি রইবো তোরই। রাজি তুই থাকলে পরে, প্রণয়ের কথা কব।`,
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
