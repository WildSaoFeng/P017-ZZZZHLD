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
        marginTop:20,
    },
    selectTitle:{
        fontSize:16,
        marginLeft:30,
        marginTop:20,
        width:200,
    },
    selectTitle1:{
        fontSize:20,
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
        marginTop:20,
    }
});

//这里放22+8个问题，基本信息和操作检验单独放？操作检验还不会，待会再说。  //guoguo
const quesMap = {   
        "1": "我觉得参与公众科学任务对我很重要。",
        "2": "我觉得参与公众科学任务对我个人来说是有意义的。",
        "3": "我觉得参与公众科学任务是有意义的。",

        "4": "该公众科学任务让我以一种新的方式学习植物相关的知识。",
        "5": "该公众科学任务让我提高了对植物相关知识的理解。",
        "6": "该公众科学任务让我学会标注植物的特征。",

        "7": "我认为该公众科学任务设计的很合理。",
        "8": "我认为完成此次公众科学任务的行为很明智。",
        "9": "我认为参与此次公众科学任务很有价值。",
        
        "10": "我参与公众科学任务时感觉很有趣。",
        "11": "参与公众科学任务使我感到快乐。",
        "12": "我享受参与这个公众科学任务。",
        
        "13": "在此次公众科学任务过程中，我对任务需要做什么的理解程度非常高。",
        "14": "在此次公众科学任务过程中，我的信心水平非常高。",
        "15": "在此次公众科学任务过程中，我的舒适程度非常高。",
        "16": "在此次公众科学任务过程中，我完成指定任务的技能水平非常高。",

        "17": "使用这个任务系统，提高了我在该公众科学任务中的表现水平。",
        "18": "使用这个任务系统，增强了我参与该公众科学任务的效率。" ,
        "19": "使用这个任务系统，将该公众科学任务变得更容易完成。" ,

        "20": "我愿意继续参与公众科学任务。",
        "21": "我愿意继续利用业余时间完成公众科学任务。",
        "22": "我愿意继续浏览和关注公众科学任务。",

        "23": "我愿意选择可以学到很多东西的、具有挑战性的任务。",
        "24": "我经常寻找可以提升技能和学习知识的机会。",
        "25": "我享受具有挑战性、可以学到新知识的任务。",
        "26": "当我正在完成一项困难的任务时，我会尽最大努力。",
        "27": "我愿意通过完成我能胜任的任务，而不是尝试新的任务来展示我的能力。",
        "28": "当我完成我知道不会出错的任务时，我最开心。",
        "29": "我更喜欢参与能向他人证明自己能力的任务。",
        "30": "其他人对我能把事情做得多好的看法对我很重要。"
}


class Survey extends Component {
    state = {
        selectedValue: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        basicInfo:[0,0,0,0],
        manipuCheck:[0,0]  //guoguo
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

    handleChangeManipu = i => event => {
        let manipuCheck = this.state.manipuCheck;
        manipuCheck[i] = event.target.value;
        this.setState({
            manipuCheck: manipuCheck
        });
    }

    handleClick = () => {
        axios.post('data', {
            groupType: this.props.groupType,
            userAnswers: this.props.userAnswers,
            selectedValue: this.state.selectedValue,
            basicInfo: this.state.basicInfo,
            manipuCheck: this.state.manipuCheck
        })
        console.log(this.props.groupType);
        console.log(this.props.userAnswers);
        console.log(this.state.selectedValue);
        console.log(this.state.basicInfo);
        console.log(this.state.manipuCheck);

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
                <Typography variant="display1" className={classes.title} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请根据您刚刚参与的公众科学任务，完成下面的调查问卷。此次调查采用非实名制，所得数据仅用于统计分析，研究结果将为公众科学项目设计提供指导建议，十分感谢您的支持与协助！</Typography>
                </div>
                </Grid>

                <Divider/>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >一、基于您本次参加的公众科学任务，下面哪项描述最符合您的体验：
</Typography>
                </div>
                </Grid>
                <Paper className={classes.root}>
                    <Grid container spacing={16} className={classes.selectTitle1} >
                        <Grid item xs={7} >
                            {/* <span > 题目 </span> */}
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
                    {this.surveyQuestion(11)}
                    {this.surveyQuestion(12)}
                </Paper>

                <Paper className={classes.root}>
                    <Grid container spacing={16} className={classes.selectTitle1} >
                        <Grid item xs={7} >
                            {/* <span > 题目 </span> */}
                        </Grid>
                        <Grid item xs={5} >
                            <span className={classes.manyi}> 非常不赞同 ---> 非常赞同 </span>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                        
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
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >二、在日常的学习工作中：</Typography>
                </div>
                </Grid>
                <Paper className={classes.root}>
                    <Grid container spacing={16} className={classes.selectTitle1} >
                        <Grid item xs={7} >
                            {/* <span > 题目 </span> */}
                        </Grid>
                        <Grid item xs={5} >
                            <span className={classes.manyi}> 非常不赞同 ---> 非常赞同 </span>
                        </Grid>
                    </Grid>
                    <Divider></Divider>
                    {this.surveyQuestion(23)}
                    {this.surveyQuestion(24)}
                    {this.surveyQuestion(25)}
                    {this.surveyQuestion(26)}
                    {this.surveyQuestion(27)}
                    {this.surveyQuestion(28)}
                    {this.surveyQuestion(29)}
                    {this.surveyQuestion(30)}
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >三、基于您本次参加的公众科学任务，下面哪项描述最符合您的经历：</Typography>
                </div>
                </Grid>
                <Paper className={classes.root} >
                    <Grid container spacing={16} >
                        {/* <Grid item xs={12} className={classes.selectTitle1} >
                            <span > 基本信息 </span>
                        </Grid> */}
                        <Divider/>
                        <Grid item xs={6} >
                        <span className={classes.ba} > 我认为这个植物学分类任务的难度水平为：</span>   
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.manipuCheck[0] == 1}
                                    onChange={this.handleChangeManipu(0)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    A、复杂
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.manipuCheck[0] == 2}
                                    onChange={this.handleChangeManipu(0)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    B、简单
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.manipuCheck[0] == 3}
                                    onChange={this.handleChangeManipu(0)}
                                    value={3}
                                    name="radio-button-demo"
                                    />
                                    C、不确定
                            </span>
                        </Grid>
                        
                        <Grid item xs={6} >   
                        <span className={classes.ba} > 在参与任务之前：</span>
                        </Grid>
                        <Grid item xs={6} >
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.manipuCheck[1] == 1}
                                    onChange={this.handleChangeManipu(1)}
                                    value={1}
                                    name="radio-button-demo"
                                    />
                                    A、我接受了训练
                            </span>
                            <span className={classes.select} >
                            <Radio
                                    checked={this.state.manipuCheck[1] == 2}
                                    onChange={this.handleChangeManipu(1)}
                                    value={2}
                                    name="radio-button-demo"
                                    />
                                    B、没有接受训练
                            </span>
                            <span className={classes.select}  >
                                <Radio
                                    checked={this.state.manipuCheck[1] == 3}
                                    onChange={this.handleChangeManipu(1)}
                                    value={3}
                                    name="radio-button-demo"
                                    />
                                    C、不确定
                            </span>
                        </Grid>
                        
                    </Grid>
                </Paper>

                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >四、请如实填写您的基本信息: </Typography>
                </div>
                </Grid>
                <Paper className={classes.root} >
                    <Grid container spacing={16} >
                        {/* <Grid item xs={12} className={classes.selectTitle1} >
                            <span > 基本信息 </span>
                        </Grid> */}
                        <Divider/>
                        <Grid item xs={6} >
                        <span className={classes.ba} > 性别：  </span>   
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
                            <span className={classes.ba} > 年龄：  </span>
                            
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
                        <span className={classes.ba} > 受教育程度：  </span>
                            
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
                        <span className={classes.ba} > 您对植物学的感兴趣程度：  </span>
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
                
                {this.selectedButton(this.isCompleted())}
            </Grid>

            
        );
    }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
