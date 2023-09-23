import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import NoReviews from './NoReviews/NoReviews';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };
  positivePercentage = () =>
    Math.round((this.state.good / this.totalCounter()) * 100);

  totalCounter = () => this.state.good + this.state.neutral + this.state.bad;

  render() {
    console.log(this.totalCounter() === 0)
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <Buttons keys={keys} onClickButton={this.onClickButton}></Buttons>
        <div>
          {this.totalCounter === 0 ?(
            <NoReviews text="There are no reviews yet"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCounter()}
              positivePercentage={
                this.totalCounter() ? this.positivePercentage() : 0
              }
            />
          )}
        </div>
      </div>
    );
  }
}
