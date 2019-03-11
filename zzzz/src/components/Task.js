import React, { Component } from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';


import p2 from '../pic/2.jpg';
import p3 from '../pic/3.jpg';
import p4 from '../pic/4.jpg';
import p5 from '../pic/5.jpg';
import p6 from '../pic/6.jpg';
import p7 from '../pic/7.jpg';
import p8 from '../pic/8.jpg';
import p9 from '../pic/9.jpg';
import p10 from '../pic/10.jpg';

import '../css/Task.css';
import Question1 from './question/Question1'
import Question2 from './question/Question2';
import Question3 from './question/Question3';
import Question4 from './question/Question4';
import Question5 from './question/Question5';
import Question6 from './question/Question6';
import Question7 from './question/Question7';
import Question8 from './question/Question8';
import Question9 from './question/Question9';
import Question10 from './question/Question10';
import Question11 from './question/Question11';
import Question12 from './question/Question12';


const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function onCheckboxChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


class Task extends Component {

  state = {
    current: 1
  };

  onButtonClickNext = () => {
    this.setState({
      current: this.state.current + 1
    });
  };

  onButtonClickBack = () => {
    this.setState({
      current: this.state.current - 1
    });
  };
  
  getcurrent() {
    switch(this.state.current)
    {
      case 1:
        return(
          <Question1 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question1>
          );

      case 2:
        return(
          <Question2 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question2>
          );

      case 3:
        return(
          <Question3 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question3>
          );

      case 4:
        return(
            <Question4 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question4>
          );

      case 5:
      return(
         <Question5 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question5>
        );            

      case 6:
        return(
          <div>
            <p>您于1-5题的得分是：85分</p>
            <br/>
            <br/>

            <p>正确题目：1 3 4 5</p>
            <br/>
            <p>部分正确题目：2</p>
            <br/>
            <p>错误题目：无</p>
            <br/>
            <p>填表时间： 2019年03月01日18:45:24 （HKT online）</p>
            <br/>
            <Button
              type="primary"
              onClick={() => {
                this.setState({
                  current: this.state.current + 1
                });
              }}
            >
              进入中等难度题目
            </Button>

          </div>
          );

      case 7:
      return(
        <Question6 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question6>
        );

      case 8:
      return(
        <Question7 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question7>
        );

      case 9:
      return(
        <Question8 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question8>      
        );

      case 10:
      return(
       <Question9 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question9>
        );

      case 11:
      return(
       <Question10 
            current={this.state.current} 
            onButtonClickNext={() => this.onButtonClickNext()} 
            onButtonClickBack={() => this.onButtonClickBack()} 
            ></Question10>      
        );

      case 12:
        return(
          <div>
            <p>您于6-10题的得分是：92分</p>
            <br/>
            <br/>

            <p>正确题目：6 8 9 10</p>
            <br/>
            <p>部分正确题目：7</p>
            <br/>
            <p>错误题目：无</p>
            <br/>
            <p>填表时间： 2019年03月01日18:52:04 （HKT online）</p>

            <br/>
          <Button
            type="primary"
            onClick={() => {
              this.setState({
                current: this.state.current + 1
              });
            }}
          >
            结束问卷
          </Button>
          </div>
          );

      default:
        return(<p>问卷已完成，感谢参与!</p>);
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
