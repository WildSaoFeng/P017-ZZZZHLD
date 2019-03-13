import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";


const styles = theme => ({
    head:{
        marginTop:60,
        marginLeft:100,
        marginRight:100,
    },
    title: {
        fontSize: 20
    },
    card:{
        width: 800,
        height: 100,
    },
    content:{
        marginTop:20,
        marginLeft:20,
    }
});


const quesMap = {   
        "1": " 我觉得在完成任务的过程中很有趣",
        "2": "参与完成科学研究相关的任务使我感到快乐",
        "3": "我享受参与公众科学任务的过程",
        "4": "我觉得探知新事物的能力增强了",
        "5": "通过参与任务，我对科学任务有新的看法",
        "6": "我觉得参与科研任务促使我进一步学习到新的知识",
        "7": "我认为参与公众科学任务对我很重要",
        "8": "我参与完成的任务对他人可能有重要的意义",
        "9": "我认为参与完成任务的过程是有意义的",
        "10": "我努力完成我参与的任务。",
        "11": "我把注意力集中在完成我参与的任务上。",
        "12": "我经常思考我参与的任务。",
        "13": "我愿意继续参与公众科学项目",
        "14": "我愿意继续利用业余时间完成科学任务",
        "15": "我愿意继续浏览和关注科学任务",
        "16": "我被告知我完成得比较好",
        "17": "与标准相比，我完成得不太好",
        "18": "我对我在任务中的表现满意"   
}



class Survey extends Component {
    state = {
        selectedValue: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    };

    handleChange = i => event => {
        let selectedValue = this.state.selectedValue;
        selectedValue[i] = event.target.value;
        this.setState({
            selectedValue: selectedValue
        });
    }

    surveyQuestion = (i) => {
        i = i - 1;
        // console.log(this.state.selectedValue[i]);
        return(
            <Grid item xs={12} >
            <center>
            <Card className={this.props.classes.card} >
                <div className={this.props.classes.content} >
                    <Typography variant="h6" className={this.props.classes.title} >{i+1}. {quesMap[i+1]} </Typography>
                    <Radio
                    checked={this.state.selectedValue[i] == 1}
                    onChange={this.handleChange(i)}
                    value="1"
                    name="radio-button-demo"
                    label="A"
                    />
                    非常不赞同      
                    <Radio
                    checked={this.state.selectedValue[i] == 2}
                    onChange={this.handleChange(i)}
                    value="2"
                    name="radio-button-demo"
                    label="B"
                    />
                    不赞同
                    <Radio
                    checked={this.state.selectedValue[i] == 3}
                    onChange={this.handleChange(i)}
                    value={3}
                    name="radio-button-demo"
                    aria-label="C"
                    />
                    比较不赞同
                    <Radio
                    checked={this.state.selectedValue[i] == 4}
                    onChange={this.handleChange(i)}
                    value={4}
                    name="radio-button-demo"
                    aria-label="D"
                    />
                    一般
                    <Radio
                    checked={this.state.selectedValue[i] == 5}
                    onChange={this.handleChange(i)}
                    value={5}
                    name="radio-button-demo"
                    aria-label="E"
                    />
                    比较赞同
                    <Radio
                    checked={this.state.selectedValue[i] == 6}
                    onChange={this.handleChange(i)}
                    value={6}
                    name="radio-button-demo"
                    aria-label="E"
                    />
                    赞同
                    <Radio
                    checked={this.state.selectedValue[i] == 7}
                    onChange={this.handleChange(i)}
                    value={7}
                    name="radio-button-demo"
                    aria-label="E"
                    />
                    非常赞同
                </div>
            </Card>
            </center>
            </Grid>
        );
    }

    isCompleted = () => {
        let selectedValue = this.state.selectedValue
        const length = selectedValue.length
        let Completed = true;
        for(let i = 0; i<length;i++) {
            if(selectedValue[i] ==0){
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
                    <Button variant='contained' color='secondary' size='large' >提交问卷</Button>
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

        

        return (
            <Grid container spacing={40} >
                <Grid item xs={12} >
                <div className={classes.head} >
                <Typography variant="display1" className={classes.title} >公众科学（citizen science）是利用互联网作为媒介，将大量复杂的科研任务细分成简单的任务，交给大众参与完成。越多的人参与就能完成越多的任务，集合公众的力量以低成本、高效率的方式解决看似不可完成的难题，能够科学研究带来很大的贡献！在体验了公众科学网站并完成标注任务后，请您根据自己的感受回答下列相关的问题。</Typography>
                </div>
                </Grid>
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
                {this.surveyQuestion(13)}
                {this.surveyQuestion(14)}
                {this.surveyQuestion(15)}
                {this.surveyQuestion(16)}
                {this.surveyQuestion(17)}
                {this.surveyQuestion(18)}
                {this.selectedButton(this.isCompleted())}
            </Grid>
        );
    }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
