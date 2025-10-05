import { useState } from "react";

import iconStar from "/home/mss/Desktop/faq-accordion-react/src/components-faq-accordion/assets/images/icon-star.svg";
import iconPlus from "/home/mss/Desktop/faq-accordion-react/src/components-faq-accordion/assets/images/icon-plus.svg";
import iconMinus from "/home/mss/Desktop/faq-accordion-react/src/components-faq-accordion/assets/images/icon-minus.svg";

const questionsArray = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    id: 0,
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    id: 1,
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    id: 2,
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase our skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    id: 3,
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return <MainContainer />;
}

function MainContainer() {
  return (
    <div className="main-container">
      <Purple />
      <Pink />
    </div>
  );
}

function Purple() {
  return <div className="purple-background"></div>;
}

function Pink() {
  return (
    <div className="pink-background">
      <div className="card">
        <Header />
        <Questions />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={iconStar} alt="star" />
      <p>FAQs</p>
      <hr />
    </header>
  );
}

// All the Questions
function Questions() {
  const [curOpenIndex, setCurOpenIndex] = useState(null);

  return (
    <main className="questions">
      {questionsArray.map((questObj, i) => (
        <QuestionContainer
          questObj={questObj}
          curOpenIndex={curOpenIndex}
          setCurOpenIndex={setCurOpenIndex}
          index={i}
        />
      ))}
    </main>
  );
}

// Each Question with Q,+ and A
function QuestionContainer({ questObj, curOpenIndex, setCurOpenIndex, index }) {
  const showAnswer = index === curOpenIndex;
  const toggleOpen = (index) => {
    setCurOpenIndex((curIndex) => (curIndex === index ? null : index));
  };

  return (
    <div className="question-container" onClick={() => toggleOpen(index)}>
      <h3>{questObj.question}</h3>
      <img src={showAnswer ? iconMinus : iconPlus} alt="plusMinus" />
      {showAnswer && <Answer ans={questObj.answer} />}
    </div>
  );
}

function Answer({ ans }) {
  return <p className="answer">{ans}</p>;
}
