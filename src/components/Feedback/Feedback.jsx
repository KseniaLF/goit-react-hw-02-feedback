import { type } from '@testing-library/user-event/dist/type';
import { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import { FeedbackContainer } from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    //   return console.log(this.state);
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      this.countTotalFeedback() &&
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
    // return 0 && true; // return 0
  };

  render() {
    return (
      <FeedbackContainer>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={{
              handleGood: this.handleGood,
              handleNeutral: this.handleNeutral,
              handleBad: this.handleBad,
            }}
          ></FeedbackOptions>
        </Section>

        {this.countTotalFeedback() ? (
          <Section title={'Statisticks'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </FeedbackContainer>
    );
  }
}
