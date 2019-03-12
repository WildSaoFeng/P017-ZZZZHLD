import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Question from './Question';
import Finish from './Finish';
import Response from './Response'

class Task extends Component {

  state = {
    userId:'01001',
    current: 1,
    group: '01',
    ended: false,
    userAnswers: [],
    correctAnswers: []
  };

  onButtonClickNext = (userAnswer, correctAnswer) => {
    this.setState({
      current: this.state.current + 1
    });
    this.setState((preState) => {
      userAnswers: preState.userAnswers.concat([userAnswer]);
      correctAnswers: preState.correctAnswers.concat([correctAnswer]);
    })
  };

  onButtonClickBack = () => {
    this.setState({
      current: this.state.current - 1
    });
    this.setState((preState) => {
      userAnswers: preState.userAnswers.slice(0, preState.userAnswers.length-1);
      correctAnswers: preState.correctAnswers.slice(0, preState.correctAnswers.length-1);
    });
  };

  onButtonClickEnd = () => {
    this.setState({
      ended: true
    });
  };
  
  getcurrent() {
    switch(this.state.current)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:

      case 7:
      case 8:
      case 9:
      case 10:
      case 11:

        return(
          <Question 
            current={this.state.current} 
            group={this.state.group}
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            onButtonClickEnd={() => this.onButtonClickEnd()}
            ></Question>
          );

      case 6:
      case 12:
      case 18:
      case 24:
      case 30:
      case 36:

        return(
          <Response></Response>
          );

      default:
          return(
            <Finish></Finish>
          );
    }
  }

  

  render() {
    return (
      <div className="Task">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                Botanical Classification 植物学分类任务
                </Typography>
              </Toolbar>
            </AppBar>
            {this.getcurrent()}
      </div>
    );
  }
}

export default Task;
