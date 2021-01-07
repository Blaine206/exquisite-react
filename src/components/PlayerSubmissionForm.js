import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

  const onFieldChange = (event) => {
    console.log(`Field updated ${ event.target.value }`);

    const newOnFieldChange = {
      ...formFields,
    }

    newOnFieldChange[event.target.name] = event.target.value;
    setFormFields(newOnFieldChange);

  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(formFields);
    
    
    setFormFields({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form onSubmit={onFormSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
        The
        <input
          name="adj1"
          value={formFields.adj1}
          onChange={onFieldChange}
          placeholder="adjective"
          type="text" />
        <input
          name="noun1"
          value={formFields.noun1}
          onChange={onFieldChange}
          placeholder="noun"
          type="text" />
        <input
          name="adverb"
          value={formFields.adverb}
          onChange={onFieldChange}
          placeholder="adverb"
          type="text" />
        <input
          name="verb"
          value={formFields.verb}
          onChange={onFieldChange}
          placeholder="verb"
          type="text" />
          the
        <input
          name="adj2"
          value={formFields.adj2}
          onChange={onFieldChange}
          placeholder="adjective"
          type="text" />
        <input
          name="noun2"
          value={formFields.noun2}
          onChange={onFieldChange}
          placeholder="noun"
          type="text" />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
