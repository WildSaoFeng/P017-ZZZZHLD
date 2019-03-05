import React, { Component } from 'react';

import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import DatePicker from 'antd/lib/date-picker';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Checkbox from 'antd/lib/checkbox';
import Radio from 'antd/lib/radio';
import Icon from 'antd/lib/icon';
import Tooltip from 'antd/lib/tooltip';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';


import p1 from '../pic/1.jpg';
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

  onButtonClickA = () => {
    this.setState({
      current: this.state.current + 1
    });
  };
  
  getcurrent() {
    switch(this.state.current)
    {
      case 1:
        return(
          <div>
            <Row>
              <Col span={12}>
                <img src={p1} alt="Flowers in Chania" width="700" height="200" />
              </Col>
              <Col span={12}>
                <FormItem>
                <p>问题一：图片中是否含有以下元素？</p>
                
                <Checkbox onChange={onCheckboxChange}> 
                根
                </Checkbox>
                <Checkbox onChange={onCheckboxChange}> 
                茎
                </Checkbox>
                <Checkbox onChange={onCheckboxChange}> 
                叶
                </Checkbox>
              </FormItem>

              <FormItem>
              <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      current: this.state.current + 1
                    });
                  }}
                >
                  保存答案，下一题
                </Button>
                <p> </p>
                <Button
                  type="default"
                  onClick={() => {
                    this.setState({
                      current: this.state.current - 1
                    });
                  }}
                >
                  返回上一题
                </Button>
              </FormItem>
              </Col>
            </Row>
          </div>
          );

          case 2:
        return(
          <div>
            <Row>
              <Col span={12}>
                <img src={p2} alt="Flowers in Chania" width="700" height="200" />
              </Col>
              <Col span={12}>
                <FormItem>
                <p>问题二：图片中是否含有以下元素？</p>
                
                <Checkbox onChange={onCheckboxChange}> 
                根
                </Checkbox>
                <Checkbox onChange={onCheckboxChange}> 
                茎
                </Checkbox>
                <Checkbox onChange={onCheckboxChange}> 
                叶
                </Checkbox>
              </FormItem>

              <FormItem>
              <Button
                  type="primary"
                  onClick={() => {
                    this.setState({
                      current: this.state.current + 1
                    });
                  }}
                >
                  保存答案，下一题
                </Button>
                <p> </p>
                <Button
                  type="default"
                  onClick={() => {
                    this.setState({
                      current: this.state.current - 1
                    });
                  }}
                >
                  返回上一题
                </Button>
              </FormItem>
              </Col>
            </Row>
          </div>
          );

          case 3:
          return(
            <div>
              <Row>
                <Col span={12}>
                  <img src={p3} alt="Flowers in Chania" width="700" height="200" />
                </Col>
                <Col span={12}>
                  <FormItem>
                  <p>问题三：图片中是否含有以下元素？</p>
                  
                  <Checkbox onChange={onCheckboxChange}> 
                  根
                  </Checkbox>
                  <Checkbox onChange={onCheckboxChange}> 
                  茎
                  </Checkbox>
                  <Checkbox onChange={onCheckboxChange}> 
                  叶
                  </Checkbox>
                </FormItem>
  
                <FormItem>
                <Button
                    type="primary"
                    onClick={() => {
                      this.setState({
                        current: this.state.current + 1
                      });
                    }}
                  >
                    保存答案，下一题
                  </Button>
                  <p> </p>
                  <Button
                    type="default"
                    onClick={() => {
                      this.setState({
                        current: this.state.current - 1
                      });
                    }}
                  >
                    返回上一题
                  </Button>
                </FormItem>
                </Col>
              </Row>
            </div>
            );

            case 4:
            return(
              <div>
                <Row>
                  <Col span={12}>
                    <img src={p4} alt="Flowers in Chania" width="700" height="200" />
                  </Col>
                  <Col span={12}>
                    <FormItem>
                    <p>问题四：图片中是否含有以下元素？</p>
                    
                    <Checkbox onChange={onCheckboxChange}> 
                    根
                    </Checkbox>
                    <Checkbox onChange={onCheckboxChange}> 
                    茎
                    </Checkbox>
                    <Checkbox onChange={onCheckboxChange}> 
                    叶
                    </Checkbox>
                  </FormItem>
    
                  <FormItem>
                  <Button
                      type="primary"
                      onClick={() => {
                        this.setState({
                          current: this.state.current + 1
                        });
                      }}
                    >
                      保存答案，下一题
                    </Button>
                    <p> </p>
                    <Button
                      type="default"
                      onClick={() => {
                        this.setState({
                          current: this.state.current - 1
                        });
                      }}
                    >
                      返回上一题
                    </Button>
                  </FormItem>
                  </Col>
                </Row>
              </div>
              );

              case 5:
              return(
                <div>
                  <Row>
                    <Col span={12}>
                      <img src={p5} alt="Flowers in Chania" width="700" height="200" />
                    </Col>
                    <Col span={12}>
                      <FormItem>
                      <p>问题五：图片中是否含有以下元素？</p>
                      
                      <Checkbox onChange={onCheckboxChange}> 
                      根
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      茎
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      叶
                      </Checkbox>
                    </FormItem>
      
                    <FormItem>
                    <Button
                        type="primary"
                        onClick={() => {
                          this.setState({
                            current: this.state.current + 1
                          });
                        }}
                      >
                        保存答案，下一题
                      </Button>
                      <p> </p>
                      <Button
                        type="default"
                        onClick={() => {
                          this.setState({
                            current: this.state.current - 1
                          });
                        }}
                      >
                        返回上一题
                      </Button>
                    </FormItem>
                    </Col>
                  </Row>
                </div>
                );            

          case 6:
            return(
              <div>
                <h>您于1-5题的得分是：85分</h>
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
                <div>
                  <Row>
                    <Col span={12}>
                      <img src={p6} alt="Flowers in Chania" width="700" height="200" />
                    </Col>
                    <Col span={12}>
                      <FormItem>
                      <p>问题六：图片中是否含有以下元素？</p>
                      
                      <Checkbox onChange={onCheckboxChange}> 
                      根
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      茎
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      叶
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      嫩芽
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      花蕊
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      果实
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      种子
                      </Checkbox>
                    </FormItem>
      
                    <FormItem>
                    <Button
                        type="primary"
                        onClick={() => {
                          this.setState({
                            current: this.state.current + 1
                          });
                        }}
                      >
                        保存答案，下一题
                      </Button>
                      <p> </p>
                      <Button
                        type="default"
                        onClick={() => {
                          this.setState({
                            current: this.state.current - 1
                          });
                        }}
                      >
                        返回上一题
                      </Button>
                    </FormItem>
                    </Col>
                  </Row>
                </div>
                );

                case 8:
                return(
                  <div>
                    <Row>
                      <Col span={12}>
                        <img src={p7} alt="Flowers in Chania" width="700" height="200" />
                      </Col>
                      <Col span={12}>
                        <FormItem>
                        <p>问题七：图片中是否含有以下元素？</p>
                        
                        <Checkbox onChange={onCheckboxChange}> 
                      根
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      茎
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      叶
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      嫩芽
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      花蕊
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      果实
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      种子
                      </Checkbox>
                      </FormItem>
        
                      <FormItem>
                      <Button
                          type="primary"
                          onClick={() => {
                            this.setState({
                              current: this.state.current + 1
                            });
                          }}
                        >
                          保存答案，下一题
                        </Button>
                        <p> </p>
                        <Button
                          type="default"
                          onClick={() => {
                            this.setState({
                              current: this.state.current - 1
                            });
                          }}
                        >
                          返回上一题
                        </Button>
                      </FormItem>
                      </Col>
                    </Row>
                  </div>
                  );

                  case 9:
                  return(
                    <div>
                      <Row>
                        <Col span={12}>
                          <img src={p8} alt="Flowers in Chania" width="700" height="200" />
                        </Col>
                        <Col span={12}>
                          <FormItem>
                          <p>问题八：图片中是否含有以下元素？</p>
                          <Checkbox onChange={onCheckboxChange}> 
                      根
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      茎
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      叶
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      嫩芽
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      花蕊
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      果实
                      </Checkbox>
                      <Checkbox onChange={onCheckboxChange}> 
                      种子
                      </Checkbox>
                        </FormItem>
          
                        <FormItem>
                        <Button
                            type="primary"
                            onClick={() => {
                              this.setState({
                                current: this.state.current + 1
                              });
                            }}
                          >
                            保存答案，下一题
                          </Button>
                          <p> </p>
                          <Button
                            type="default"
                            onClick={() => {
                              this.setState({
                                current: this.state.current - 1
                              });
                            }}
                          >
                            返回上一题
                          </Button>
                        </FormItem>
                        </Col>
                      </Row>
                    </div>
                    );

                    case 10:
                    return(
                      <div>
                        <Row>
                          <Col span={12}>
                            <img src={p9} alt="Flowers in Chania" width="700" height="200" />
                          </Col>
                          <Col span={12}>
                            <FormItem>
                            <p>问题九：图片中是否含有以下元素？</p>
                            <Checkbox onChange={onCheckboxChange}> 
                        根
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        茎
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        叶
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        嫩芽
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        花蕊
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        果实
                        </Checkbox>
                        <Checkbox onChange={onCheckboxChange}> 
                        种子
                        </Checkbox>
                          </FormItem>
            
                          <FormItem>
                          <Button
                              type="primary"
                              onClick={() => {
                                this.setState({
                                  current: this.state.current + 1
                                });
                              }}
                            >
                              保存答案，下一题
                            </Button>
                            <p> </p>
                            <Button
                              type="default"
                              onClick={() => {
                                this.setState({
                                  current: this.state.current - 1
                                });
                              }}
                            >
                              返回上一题
                            </Button>
                          </FormItem>
                          </Col>
                        </Row>
                      </div>
                      );

                      case 11:
                      return(
                        <div>
                          <Row>
                            <Col span={12}>
                              <img src={p10} alt="Flowers in Chania" width="700" height="200" />
                            </Col>
                            <Col span={12}>
                              <FormItem>
                              <p>问题十：图片中是否含有以下元素？</p>
                              <Checkbox onChange={onCheckboxChange}> 
                          根
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          茎
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          叶
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          嫩芽
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          花蕊
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          果实
                          </Checkbox>
                          <Checkbox onChange={onCheckboxChange}> 
                          种子
                          </Checkbox>
                            </FormItem>
              
                            <FormItem>
                            <Button
                                type="primary"
                                onClick={() => {
                                  this.setState({
                                    current: this.state.current + 1
                                  });
                                }}
                              >
                                保存答案，下一题
                              </Button>
                              <p> </p>
                              <Button
                                type="default"
                                onClick={() => {
                                  this.setState({
                                    current: this.state.current - 1
                                  });
                                }}
                              >
                                返回上一题
                              </Button>
                            </FormItem>
                            </Col>
                          </Row>
                        </div>
                        );

            case 12:
              return(
                <div>
                  <h>您于6-10题的得分是：92分</h>
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
        <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <h>问卷填写平台 Ver 0.85</h>
            <br/>
            { this.getcurrent()}
          </Form>
        
      </div>
    );
  }
}

export default Task;
