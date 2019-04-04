import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Radio from "@material-ui/core/Radio";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
    head:{
        marginTop:60,
        marginLeft:100,
        marginRight:100,
    },
    title: {
        fontSize: 20
    },
    content:{
        marginTop:20,
        marginLeft:20,
    },
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        marginLeft:theme.spacing.unit * 16,
    },
    select:{
        marginRight:20,
        marginTop:10,
    },
    selectTitle:{
        fontSize:20,
        marginLeft:30,
        marginTop:10,
        width:200,
    },
    selectTitle1:{
        fontSize:22,
        marginLeft:30,
        paddingTop:15,
        paddingBottom:15,
    },
    TableCell:{
        paddingRight: - theme.spacing.unit * 3,
    },
    ti:{

    },
    ba:{
        marginLeft: 30,
        marginTop:10,
    }
});


const quesMap = {   
        "1": "我愿意选择可以学到很多东西的、具有挑战性的任务。",
        "2": "我经常寻找可以提升技能和学习知识的机会。",
        "3": "我享受具有挑战性、可以学到新知识的任务。",
        "4": "当我正在完成一项困难的任务时，我会尽最大努力。",
        "5": "我愿意通过完成我能胜任的任务，而不是尝试新的任务来展示我的能力。",
        "6": "当我完成我知道不会出错的任务时，我最开心。",
        "7": "我更喜欢参与能向他人证明自己能力的任务。",
        "8": "其他人对我能把事情做得多好的看法对我很重要。",

        "9": "我参与公众科学任务时感觉很有趣。",
        "10": "参与公众科学任务使我感到快乐",
        "11": "我享受参与这个公众科学任务。",
        "12": "通过参与公众科学任务，我觉得我探知新事物的能力增强了。",
        "13": "我觉得我对做的公众科学任务有了更全面的理解。",
        "14": "我觉得参与公众科学任务让我学习到新的知识。",
        "15": "我觉得参与公众科学任务对我很重要。",
        "16": "我觉得参与公众科学任务对我个人来说是有意义的。",
        "17": "我觉得参与公众科学任务是有意义的。",
        "18": "我对自己完成公众科学任务的能力充满信心。",
        "19":"我对于自己提供的数据很有自信。" ,
        "20":"我有能力完成公众科学任务。" ,
        "21":"该公众科学任务让我以一种新的方式学习植物相关的知识。" ,
        "22":"该公众科学任务让我学会标注植物的特征。" ,
        "23":"该公众科学任务让我提高了对植物相关知识的理解。" ,
        "24":"我很努力完成我参与的公众科学任务。" ,
        "25":"我集中注意力在完成我参与的公众科学任务。",
        "26":"我会投入很多精力完成我参与的公众科学任务。",
        "27":"我愿意继续参与公众科学项目。",
        "28":"我愿意继续利用业余时间完成公众科学任务。",
        "29":"我愿意继续浏览和关注公众科学任务。",
        "30":"我被告知完成得比较好。",
        "31":"下列哪个选项最符合你获得的反馈"
}


class Survey extends Component {
    state = {
        basicInfo:[0,0,0,0],
        selectedValue: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };

    handleChange = i => event => {
        let selectedValue = this.state.selectedValue;
        selectedValue[i] = event.target.value;
        this.setState({
            selectedValue: selectedValue
        });
    }

    handleChangeBasic = i => event => {
        let basicInfo = this.state.basicInfo;
        basicInfo[i] = event.target.value;
        this.setState({
            basicInfo: basicInfo
        });
    }

    handleClick = () => {
        axios.post('data', {
            groupType: this.props.groupType,
            userAnswers: this.props.userAnswers,
            selectedValue: this.state.selectedValue,
            basicInfo:this.state.basicInfo
        })
        console.log(this.props.groupType);
        console.log(this.props.userAnswers);
        console.log(this.state.selectedValue);
        console.log(this.state.basicInfo);

        this.props.history.push('finish');
    }

   
    surveyQuestion = (i) => {
        let z = i;
        if(z >= 9){
            z = z - 8;
        }else{
        }
        const { classes } = this.props;
        if(i === 31){
            return(
                <div className={classes.ti} >
            <Grid container spacing={16} >
                <Grid item xs={6} >
                    <span className={classes.selectTitle} >
                        {z + '. ' + quesMap[i]}
                    </span>
                </Grid>
                <Grid item xs={6}>
                    <span className={classes.select} >
        <Radio
            checked={this.state.selectedValue[i-1] == 1}
            onChange={this.handleChange(i-1)}
            value="1"
            name="radio-button-demo"
            label="A"
            />A、关于我完成的任务情况的反馈
        </span>
        
        <span className={classes.select} >
        <Radio
            checked={this.state.selectedValue[i-1] == 2}
            onChange={this.handleChange(i-1)}
            value="2"
            name="radio-button-demo"
            label="B"
            />
            B、关于我自己前后表现变化的对比反馈
        </span>
       <span className={classes.select} >
       <Radio
                checked={this.state.selectedValue[i-1] == 3}
                onChange={this.handleChange(i-1)}
                value={3}
                name="radio-button-demo"
                aria-label="C"
                />
                C、关于我与他人表现对比的反馈
       </span>
       <span className={classes.select} >
        <Radio
                checked={this.state.selectedValue[i-1] == 4}
                onChange={this.handleChange(i-1)}
                value={4}
                name="radio-button-demo"
                aria-label="D"
                />
                D、没有收到反馈
        </span>
                </Grid>
            </Grid>
            <Divider></Divider>
        </div>
            );
        }else{ 
        return(
        <div className={classes.ti} >
            <Grid container spacing={16} >
                <Grid item xs={6} >
                    <span className={classes.selectTitle} >
                        {z + '. ' + quesMap[i]}
                    </span>
                </Grid>
                <Grid item xs={6}>
                    <span className={classes.select} >
        <Radio
            checked={this.state.selectedValue[i-1] == 1}
            onChange={this.handleChange(i-1)}
            value="1"
            name="radio-button-demo"
            label="A"
            />1
        </span>
        
        <span className={classes.select} >
        <Radio
            checked={this.state.selectedValue[i-1] == 2}
            onChange={this.handleChange(i-1)}
            value="2"
            name="radio-button-demo"
            label="B"
            />
            2
        </span>
       <span className={classes.select} >
       <Radio
                checked={this.state.selectedValue[i-1] == 3}
                onChange={this.handleChange(i-1)}
                value={3}
                name="radio-button-demo"
                aria-label="C"
                />
                3
       </span>
        <span className={classes.select} >
        <Radio
                checked={this.state.selectedValue[i-1] == 4}
                onChange={this.handleChange(i-1)}
                value={4}
                name="radio-button-demo"
                aria-label="D"
                />
                4
        </span>
        
        <span className={classes.select} >
        <Radio
                checked={this.state.selectedValue[i-1] == 5}
                onChange={this.handleChange(i-1)}
                value={5}
                name="radio-button-demo"
                aria-label="E"
                />
                5
        </span>
        
        <span className={classes.select} >
        <Radio
                checked={this.state.selectedValue[i-1] == 6}
                onChange={this.handleChange(i-1)}
                value={6}
                name="radio-button-demo"
                aria-label="E"
                />
                6
        </span>
        
        <span className={classes.select} >
        <Radio
                checked={this.state.selectedValue[i-1] == 7}
                onChange={this.handleChange(i-1)}
                value={7}
                name="radio-button-demo"
                aria-label="F"
                />
                7
        </span>
                </Grid>
            </Grid>
            <Divider></Divider>
        </div>

        );
    }
    }

    isCompleted = () => {
        let selectedValue = this.state.selectedValue
        const length = selectedValue.length
        let Completed = true;
        for(let i = 0; i<length;i++) {
            if(selectedValue[i] == 0){
                Completed = false;
                break;
            } else{}
        }
        return Completed;
    }

    selectedButton = (isCompleted) => {
        if(isCompleted){
            return(
                <Grid item xs={12} >
                    <center>
                    <Button variant='contained' color='secondary' size='large' onClick={this.handleClick} >提交问卷</Button>
                    </center>
                </Grid>
            );
        } else {
            return(
                <Grid item xs={12} >
                    <center>
                    <Button variant='contained' color='default' size='large' >请完成所有题目</Button>
                    </center>
                </Grid>
            );
        }
    }

    render(){
        const { classes } = this.props;
        console.log(this.state.selectedValue);
        return (
            <Grid container spacing={40} >
                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请根据您刚刚参与的公众科学任务，完成下面的调查问卷。此次调查采用非实名制，所得数据仅用于统计分析，研究结果将为公众科学项目设计提供指导建议，十分感谢您的支持与协助！</Typography>
                </div>
                </Grid>
                
                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >一、基本信息</Typography>
                </div>
                </Grid>

                <Paper className={classes.root} >
                    <Grid container spacing={16} >
                        <Grid item xs={12} className={classes.selectTitle1} >
                            <span > 基本信息 </span>
                        </Grid>
                        <Divider/>
                        <Grid item xs={6} >
                        <span className={classes.ba} > 性别  </span>
                            
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[0] == 1}
                                    onChange={this.handleChangeBasic(0)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    男
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[0] == 2}
                                    onChange={this.handleChangeBasic(0)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    女
                            </span>
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.ba} > 年龄  </span>
                            
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[1] == 1}
                                    onChange={this.handleChangeBasic(1)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    20岁以下
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[1] == 2}
                                    onChange={this.handleChangeBasic(1)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    20-39岁
                            </span>
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[1] == 3}
                                    onChange={this.handleChangeBasic(1)}
                                    value={3}
                                    name="radio-button-demo"
                                    />
                                    40-59岁
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[1] == 4}
                                    onChange={this.handleChangeBasic(1)}
                                    value={4}
                                    name="radio-button-demo"
                                    />
                                    60岁及以上
                            </span>
                        </Grid>
                        <Grid item xs={6} >
                        <span className={classes.ba} > 受教育程度  </span>
                            
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[2] == 1}
                                    onChange={this.handleChangeBasic(2)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    高中
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[2] == 2}
                                    onChange={this.handleChangeBasic(2)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    专科
                            </span>
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[2] == 3}
                                    onChange={this.handleChangeBasic(2)}
                                    value={3}
                                    name="radio-button-demo"
                                    />
                                    本科
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[2] == 4}
                                    onChange={this.handleChangeBasic(2)}
                                    value={4}
                                    name="radio-button-demo"
                                    />
                                    研究生
                            </span>
                        </Grid>
                        <Grid item xs={6} >
                        <span className={classes.ba} > 您对植物学的感兴趣程度  </span>
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[3] == 1}
                                    onChange={this.handleChangeBasic(3)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    感兴趣
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.basicInfo[3] == 2}
                                    onChange={this.handleChangeBasic(3)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    一般
                            </span>
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.basicInfo[3] == 3}
                                    onChange={this.handleChangeBasic(3)}
                                    value={3}
                                    name="radio-button-demo"
                                    />
                                    不感兴趣
                            </span>
                        </Grid>
                        
                    </Grid>
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >二、在日常的学习工作中：</Typography>
                </div>
                </Grid>

                <Paper className={classes.root}>
                    <Grid container spacing={16} className={classes.selectTitle1} >
                        <Grid item xs={7} >
                            <span > 题目 </span>
                        </Grid>
                        <Grid item xs={5} >
                            <span className={classes.manyi}> 非常不赞同 ---> 非常赞同 </span>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                        
                        
                    {this.surveyQuestion(1)}
                    {this.surveyQuestion(2)}
                    {this.surveyQuestion(3)}
                    {this.surveyQuestion(4)}
                    {this.surveyQuestion(5)}
                    {this.surveyQuestion(6)}
                    {this.surveyQuestion(7)}
                    {this.surveyQuestion(8)}
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >三、通过参与公众科学任务：</Typography>
                </div>
                </Grid>
                <Paper className={classes.root}>
                    <Grid container spacing={16} className={classes.selectTitle1} >
                        <Grid item xs={7} >
                            <span > 题目 </span>
                        </Grid>
                        <Grid item xs={5} >
                            <span className={classes.manyi}> 非常不赞同 ---> 非常赞同 </span>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                        
                    {this.surveyQuestion(9)}
                    {this.surveyQuestion(10)}
                    {this.surveyQuestion(11)}
                    {this.surveyQuestion(12)}
                    {this.surveyQuestion(13)}
                    {this.surveyQuestion(14)}
                    {this.surveyQuestion(15)}
                    {this.surveyQuestion(16)}
                    {this.surveyQuestion(17)}
                    {this.surveyQuestion(18)}
                    {this.surveyQuestion(19)}
                    {this.surveyQuestion(20)}
                    {this.surveyQuestion(21)}
                    {this.surveyQuestion(22)}
                    {this.surveyQuestion(23)}
                    {this.surveyQuestion(24)}
                    {this.surveyQuestion(25)}
                    {this.surveyQuestion(26)}
                    {this.surveyQuestion(27)}
                    {this.surveyQuestion(28)}
                    {this.surveyQuestion(29)}
                    {this.surveyQuestion(30)}
                    {this.surveyQuestion(31)}
                </Paper>
                {this.selectedButton(this.isCompleted())}
            </Grid>
        );
    }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
