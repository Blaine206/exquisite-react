import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [submissions, setSubmissions] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  // const [index, setIndex] = useState(1)
  
  const sendSubmission = (submission) => {
    // Create a new array, make submissions that array (basically always += the object the newly substantiated array??), push submission into that new array, set state to that new array????

    // submissions = empty array
    // sumission = {}
    // ...submission = guts of {}
    // ...submissions = {}, {}, {}
    // newSubmission = [{}, {}, {}]
    const verse = `The ${submission.adj1} ${submission.noun1} ${submission.adv} ${submission.verb} the ${submission.adj2} ${submission.noun2}.` 
    const newSubmissions = [...submissions, verse]
    // array of strings ^
    // newSubmissions.push(submission)
    setSubmissions(newSubmissions)
    console.log(submissions)
    console.log(newSubmissions)
    // setIndex(index + 1)
  };


  const revealPoem = () => {
    setIsSubmitted(true)
  } 


  // isSubmittd = boolean
  // submissions = Array of strings
  // `'My namy is ${}`
  // revealPoem = function



  return (
    
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      
      <RecentSubmission submissions={submissions[submissions.length - 1]}/>

      <PlayerSubmissionForm sendSubmission={sendSubmission} index={submissions.length + 1} fields={FIELDS} />

      <FinalPoem isSubmitted={isSubmitted} submissions={submissions} revealPoem={revealPoem} />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
