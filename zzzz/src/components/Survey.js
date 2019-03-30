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
        "1": "我认为该任务对植物学研究有贡献。",
        "2": "我认为该任务符合研究需求。",
        "3": "我认为该任务设计合理。",
        "4": "参与公众科学任务对我很重要。",
        "5": "我参与完成的任务对他人可能有重要的意义。",
        "6": "我认为参与完成任务的过程是有意义的",
        "7": "我觉得在完成任务的过程中很有趣。",
        "8": "参与完成科学研究相关的任务使我感到快乐。",
        "9": "我享受参与公众科学任务的过程。",
        "10": "我愿意继续利用业余时间完成科学任务。",
        "11": "学到新技能，并且该技能促使我进一步完成任务。",
        "12": "通过努力学习到了有趣的新知识。",
        "13": "享受学习到新知识的过程.",
        "14": "我觉得学习到新技能是一项正确的事情。",
        "15": "在完成任务时，我可以比他人做得更好。",
        "16": "我的任务完成得最出色。",
        "17": "我是完成得最好的人.",
        "18": "在完成任务时，别人会有错误，我没有。"   
}


class Survey extends Component {
    state = {
        basicInfo:[0,0,0,0],
        selectedValue: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
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
        const { classes } = this.props;
        return(
        <div className={classes.ti} >
            <Grid container spacing={16} >
                <Grid item xs={6} >
                    <span className={classes.selectTitle} >
                        {i + '. ' + quesMap[i]}
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
                <Typography variant="display1" className={classes.title} > 在参与完成任务之后，现邀请您根据参与中体验感受对下列问题进行回答，所有回答只用于统计分析，答案没有正确、错误之分。请您在百忙之中抽出一点时间填写这份调查表。衷心感谢您的支持和协助！</Typography>
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
                        <span className={classes.ba} > 年龄  </span>
                            
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
                <Typography variant="display1" className={classes.title} >二、关键心理状态测量</Typography>
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
                    {this.surveyQuestion(9)}
                    {this.surveyQuestion(10)}
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >三、当参与研究任务时，我认为自己在以下情况中最成功：</Typography>
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
                    {this.surveyQuestion(11)}
                    {this.surveyQuestion(12)}
                    {this.surveyQuestion(13)}
                    {this.surveyQuestion(14)}
                    {this.surveyQuestion(15)}
                    {this.surveyQuestion(16)}
                    {this.surveyQuestion(17)}
                    {this.surveyQuestion(18)}
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
