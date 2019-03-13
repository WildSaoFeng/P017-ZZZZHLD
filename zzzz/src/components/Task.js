import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Question from './Question';
import Response from './Response';

class Task extends Component {

  state = {
    userId:'01001',
    current: 1,
    group: '01',
    ended: false,
    userAnswers: [[]],
    correctAnswers: [[false,false,false],[false,false,false],[false,false,false],[false,false,false],[false,false,false],],
    ratio: 0,
    correctQuestions: []
  };

  onButtonClickNext = (userAnswer, correctAnswer) => {
    // console.log(userAnswer);
    this.setState(preState => ({
      current: this.state.current + 1,
      userAnswers: preState.userAnswers.concat([userAnswer]),
      correctAnswers: preState.correctAnswers.concat([correctAnswer])
    }), () => {
      if( (this.state.current  ) == 6) {
        this.calculate();
      }
    });
  };

  onButtonClickNextPure = () => {
    this.setState({
      current: this.state.current + 1,
    });
  };

  onButtonClickBack = () => {
    this.setState({
      current: this.state.current - 1
    });
    this.setState(preState => ({
      userAnswers: preState.userAnswers.slice(0, preState.userAnswers.length-1),
      correctAnswers: preState.correctAnswers.slice(0, preState.correctAnswers.length-1)
    }));
  };

  onButtonClickEnd = () => {
    this.setState({
      ended: true
    });
  };

  calculate = () => {
    let crt = 0;
    let lengthA = this.state.userAnswers.length;
    let lengthB = this.state.correctAnswers.length;
    let A = this.state.userAnswers.slice(lengthA - 5, lengthA);
    let B = this.state.correctAnswers.slice(lengthB - 5, lengthB);
    let C = [];
    // console.log("* " + A);
    // console.log("** " + B);

    for(let i = 0; i< 5; i++) {
      // console.log(i + ' A: '+ A[i] + '-' + typeof(A[i]) );
      // console.log(i + ' B: '+ B[i] + '-' + typeof(B[i]) );
      let flag = true;
      for(let j = 0; j < 3; j++) {
        if(A[i][j] != B[i][j]) {
          flag = false;
          break;
        }
      }
      if(flag) {
        crt ++;
        C.push(i);
      }
    }
    this.setState(preState => ({
      correctQuestions: C,
      ratio: crt/5
    }));
    // console.log("*** " + C);
    // console.log("*** " + crt);

  }
  
  getcurrent = () => {
    switch(this.state.current)
    {
      case 6:
      case 12:
      case 18:
      case 24:
      case 30:
      case 36:
        return(
          <Response 
            current={this.state.current} 
            ratio={this.state.ratio}
            history={this.props.history}
            correctQuestions={this.state.correctQuestions}
            onButtonClickNextPure ={() => this.onButtonClickNextPure()}
          ></Response>
          );

      default:
          return(
            <Question 
            current={this.state.current} 
            group={this.state.group}
            history={this.props.history}
            onButtonClickNext={(userAnswer, correctAnswer) => this.onButtonClickNext(userAnswer, correctAnswer)} //子组件向父组件传参
            onButtonClickBack={() => this.onButtonClickBack()} 
            onButtonClickEnd={() => this.onButtonClickEnd()}
            ></Question>
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
