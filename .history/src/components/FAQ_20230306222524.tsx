import React from "react";

const data = [
  {
    title: "How much time does it take?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "What is your class naming convention?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "How do you communicate?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "I have a bigger project. Can you handle it?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "What is your class naming convention?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQ = () => {
  return (
    <article>
      <div>
        <h1>Frequently asked questions</h1>
        <a href="/">Contact us for more info</a>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={item.title}>
            <span>0{index + 1}</span>
            <div>
              <h2>{item.title}+</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default FAQ;
