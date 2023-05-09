import PropTypes from 'prop-types';
import React from 'react';
import css from './Feedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.buttonsContainer}>
            {options.map(option => (
                <button
                    type="button"
                    className={css.btn}
                    name={option}
                    key={option}
                    onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))
            }
        </div>
    );
};
    

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}
