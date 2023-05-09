import React, {useState, memo} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statictics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css'


 // onClickOpiniaBtn = (option) => {
  //  this.setState((prevState) => {
  //    return {
   //     [option]: prevState[option] + 1,
   //   };
  //  });
 // };

 // totalFeedback = () => {
 //   const { good, bad, neutral } = this.state;
  //  const sum = good + bad + neutral;
  //  return sum;
 // }
  
  //positiveFeedbackPart = () => {
   // const { good } = this.state;
  //  const part = Math.round((good * 100) / this.totalFeedback());
  //  return part;
  //}


  function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onClickOpiniaBtn = (option) => {
      switch (option) {
        case 'good':
          setGood(prevGood => prevGood + 1);
          break;
        
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1);
          break;
        
        case 'bad': setBad(prevBad => prevBad + 1);
          break;
        
        default:
          return;
      };
    };
  
    const sum = good + bad + neutral;
    const part = Math.round((good * 100) / sum) || 0;

    return (
      <div className={css.container}>
        <Section title="Please, leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onClickOpiniaBtn} />
        </Section>

        {sum !== 0 ? (
          <Section title="Statistics">
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={sum}
              positivePart={part} />
          </Section>) : (
            <Notification message="There is no feedback" />
          )
        }
      </div>
    );
  }


export default memo(App);