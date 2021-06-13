import React, { useState } from 'react';
import './App.css';


function App() {

  const QA = [
    { question: 'When did you learn React?', answer: 'I watched 4 hour introduction course on the day i received the email with the task, to prepare myself :)' },
    { question: 'Why did you choose JavaScript?', answer: 'It gives me the freedom to mix my creative background with engineering, which i\'m very keen to learn.' },
    { question: 'Do you like challenges?', answer: 'I certainly do and this is a small sample :)' },
    { question: 'What is your motivation?', answer: 'I take pride in everything i do, as i\'m result driven person, that motivates me to get things done!' },
    { question: 'What do you expect from us?', answer: 'Possibilities, that will put me in a position to grow and nothing less!' },
    { question: 'Any final message for us?', answer: 'I enjoyed the process of creating this task, and i\'m looking forward to the next step :)!' }
  ];
  const [questionsAndAnswers] = useState(QA);

  let qaDOMelements, question, answer, arrowIcon;


  function revealAnswer(event) {

    qaDOMelements = Array.from(event.target.parentNode.children);
    question = event.target.classList;
    answer = event.target.nextElementSibling.classList;
    arrowIcon = event.target.children[0].classList;

    if (question.contains('expandQuestion')) {
      resetInitialState();
    } else {
      resetInitialState();
      question.add('expandQuestion');
      arrowIcon.add('arrowUp');
      answer.add('showAnswer');
    }

    function resetInitialState() {
      qaDOMelements.forEach((e, i) => {
        if (i % 2 === 0) {
          e.children[0].classList.remove('arrowUp');
        }
        e.classList = '';
      });
    }
  }

  function renderQuestions() {
    return questionsAndAnswers.map((obj, id) => {
      return (
        <React.StrictMode key={id}>
          <div onClick={revealAnswer}>{obj.question}<i className="arrow"></i></div>
          <p>{obj.answer}</p>
        </React.StrictMode>
      )
    });
  }

  function Header(props) {
    return (
      <React.StrictMode>
        <header>
          <h1>This is my first {props.title} project</h1>
          <small>I would gladly answer to all of your questions regarding the position :).</small>
        </header>
      </React.StrictMode>
    )
  }

  return (
    <React.StrictMode>
      <main>
        <Header title="React" />
        <section>
          {renderQuestions()}
        </section>
      </main>
    </React.StrictMode>
  )
}




export default App;
