import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statictics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css'

class App extends Component {

  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  }

  onClickOpiniaBtn = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const sum = good + bad + neutral;

    return sum;
  }
  
  positiveFeedbackPart = () => {
    const { good } = this.state;
    const part = Math.round((good * 100) / this.totalFeedback());

    return part;
  }


  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className={css.container}>
        <Section title="Please, leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onClickOpiniaBtn} />
        </Section>

        {this.totalFeedback() ? (
          <Section title="Statistics">
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePart={this.positiveFeedbackPart()} />
          </Section>) : (
            <Notification message="There is no feedback" />
          )
        }
      </div>
    );
  }
}

export default App;