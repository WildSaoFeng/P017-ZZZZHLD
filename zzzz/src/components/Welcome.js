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

import '../css/Welcome.css';


const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

function onCheckboxChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class Welcome extends Component {
  
  render() {
    return (
      <div className="Welcome">
        这是欢迎页面
      </div>
    );
  }
}

export default Welcome;
