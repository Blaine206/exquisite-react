import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
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

  const inputFields = props.fields.map(field => {
    if (field.key) {
      return (
      <input 
        name={field.key}
        value={formFields[field.key]}
        onChange={onFieldChange}
        placeholder={field.placeholder}
        type="text" />);
    } else {
      return field;
    }
  });
 
  const onFormSubmit = (event) => {
    event.preventDefault();

    props.sendSubmission(formFields);
    
    
    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
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
        {inputFields}
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
