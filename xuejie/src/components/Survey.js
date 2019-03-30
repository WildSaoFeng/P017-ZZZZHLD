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
        "1": " 我能学到的新技能，并且该技能让我想进一步完成任务",
        "2": "通过努力我能学习到新知识",
        "3": "我享受学习到新知识的过程",
        "4": "我觉得学习到新技能是一项正确的事情",
        "5": "在完成任务时，我可以比他人做得更好",
        "6": "我在任务中表现得最出色",
        "7": "我是完成得最好的人",
        "8": "在完成任务时，别人会有错误，我没有",

        "9": "我参与公众科学任务时感觉很有趣",
        "10": "参与公众科学任务使我感到快乐",
        "11": "我享受参与这个公众科学任务",
        "12": "通过参与任务，我觉得探知新事物的能力增强了",
        "13": "我觉得我探知新事物的能力增强了",
        "14": "我觉得我对做的科学任务有了更全面的理解",
        "15": "我觉得参与公众任务让我学习到新的知识",
        "16": "我觉得参与公众科学任务对我很重要",
        "17": "我觉得参与公众科学任务对我个人来说是有意义的",
        "18": "我觉得参与公众科学任务是有意义的",
        "19":"我很努力完成我参与的公众科学任务。" ,
        "20":"我集中注意力在完成我参与的公众科学任务。" ,
        "21":"我会投入很多精力完成我参与的公众科学任务" ,
        "22":"我愿意继续参与公众科学项目" ,
        "23":"我愿意继续利用业余时间完成科学任务" ,
        "24":"我愿意继续浏览和关注科学任务" ,
        "25":"在参与任务过程中我被告知完成得比较好",
        "26":"在参与任务过程中，我获得以下类型的反馈",
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
        let z = i;
        if(z >= 9){
            z = z - 8;
        }else{
        }
        const { classes } = this.props;
        if(i === 26){
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
            />A、关于任务完成的表现情况
        </span>
        
        <span className={classes.select} >
        <Radio
            checked={this.state.selectedValue[i-1] == 2}
            onChange={this.handleChange(i-1)}
            value="2"
            name="radio-button-demo"
            label="B"
            />
            B、关于我前后表现情况变化的对比
        </span>
       <span className={classes.select} >
       <Radio
                checked={this.state.selectedValue[i-1] == 3}
                onChange={this.handleChange(i-1)}
                value={3}
                name="radio-button-demo"
                aria-label="C"
                />
                C、关于我与他人表现情况的对比
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
                <Typography variant="display1" className={classes.title} >二、当……时，我认为我参与公众科学任务(活动)很成功。</Typography>
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
