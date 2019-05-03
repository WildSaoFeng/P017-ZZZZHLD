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

import img31 from './pics--selected/031.jpg';
import img32 from './pics--selected/032.jpg';
import img33 from './pics--selected/033.jpg';
import img34 from './pics--selected/034.jpg';
import img35 from './pics--selected/035.jpg';

const styles = theme => ({
    gjy:{
        paddingLeft:theme.spacing.unit * 3,
        paddingTop:theme.spacing.unit * 3,
    },
    title:{
        marginBottom:theme.spacing.unit * 2,
    },
    card: {
        width: 400,
        height: 300,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
    buttonGroup: {
        marginTop: theme.spacing.unit * 3,
    },
    media:{
        width:400,
        height:300,
    },
    cardGroup:{
        marginLeft: theme.spacing.unit * 30 ,
        marginTop: theme.spacing.unit * 20 ,
    },
    button1:{
        length:100,
    },
    hahtitle:{
        fontSize:20,
    },
    grid_check_small:{
        // marginRight:  theme.spacing.unit * 20,
        width: 150,
    }
});

// const correctAnswersT = [[true,true,false],[true,true,true],[true,true,true],[true,true,false],[true,true,true],]
const correctAnswersT = [
    true,
    true,
    true,
]

const hzMap = ['1','2','3','4','5','6','6','7','8','9','10','11','11','12','13','14','15','16','16','17','18','19','20','21','21','22','23','24','25','26','26','27','28','29','30']
const imgMap = {
    "1":img31,
    "2":img32,
    "3":img33,
    "4":img34,
    "5":img35,  
}
const tipMap = {
    1:'图中植物为核桃楸（局部），属于落叶乔木，高可达20m。叶呈奇数羽状，核果呈卵形，果长2.5-5cm。图中包含的元素有叶、茎、树皮/树枝、果实。',
    2:'图中植物为稠李（局部），属于落叶乔木，高可达13m。树皮灰褐色或黑褐色，叶呈椭圆形或倒卵形。腋生总状花序，花朵呈白色。图中包含的元素有叶、茎、花（含花朵和花苞，花苞指含苞待放的花）、树皮/树枝。',
    3:'图中植物为卫矛（局部），属于灌木，高约2-3m。叶对生，呈倒卵形至椭圆形。花朵呈黄绿色，蒴果呈棕紫色。图中包含的元素有叶、茎、花（大部分花朵开放，有几个花苞）、树皮/树枝、果实。',
    4:'图中植物为油松（局部及全貌），属于常绿乔木，高可达30m。针叶两针一束，暗绿色，长10-15cm。雄球花圆柱形，长1.2-1.8cm，聚生于新枝下部呈穗状。球果卵形或卵圆形，黄褐色。图中包含的元素有叶、茎、树皮/树枝、球果、植物全貌。',
    5:'图中植物为小红菊（全貌），属于菊科。叶片呈半圆形或宽卵形，花为白色。图中包含的元素有叶、茎、花（大部分花朵开放，有几个花苞）、植物全貌。'
}


class TrainingQuestion extends Component {
    state = {
        A: false,
        B: false,
        C: false,
    };
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleNB(){
        this.setState({
            A: false,
            B: false,
            C: false,
        });
    }

    
    selectButton = () => {
        const { classes } = this.props;
        if(this.props.trainingCurrent == 1){
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={this.props.classes.button1} onClick={() => {
                                   this.props.onButtonClickNextT([this.state.A, this.state.B, this.state.C],correctAnswersT);
                                   this.handleNB();
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        } else if (this.props.trainingCurrent == 5) {
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                    this.props.onButtonClickNextT([this.state.A, this.state.B, this.state.C], correctAnswersT)
                                    this.handleNB();
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                this.props.onButtonClickBackT()
                                this.handleNB();
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                    this.props.onButtonClickNextT([this.state.A, this.state.B, this.state.C], correctAnswersT);
                                    this.handleNB();
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                    this.props.onButtonClickBackT()
                                    this.handleNB();
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    render(){
        const { classes } = this.props;
        const {A,B,C} = this.state;
        const handleChange = this.handleChange;

        console.log(this.props.trainingCurrent);
        return (
             
            <Grid container spacing={8} className={classes.cardGroup} >
                <Grid item xs={12} >
                    <Typography variant="display1" className={classes.hahtitle} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您现在做的题目为训练题目，不计入最终得分。</Typography>
                    <Typography variant="display1" className={classes.hahtitle} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;训练题目每张图片下方有文字提示，有助于您更好的完成正式任务。</Typography>
                </Grid>
                <Grid item xs={4} >
                    <Card className={classes.card} >
                    <CardMedia
                        className={classes.media}
                        image={imgMap[this.props.trainingCurrent]}
                        title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} >
                        <Card className={classes.card}>
                        <div className={classes.gjy} >
                            <Typography variant="h6" className={classes.title} >{hzMap[this.props.trainingCurrent - 1]}. 图片中含有以下哪些元素？</Typography>
                            <Divider className={classes.divider} />
                            <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <Grid container spacing={40} >
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={A}
                                            onChange={handleChange("A")}
                                            value="A"
                                            />
                                        }
                                        label="叶"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={B}
                                            onChange={handleChange("B")}
                                            value="B"
                                            />
                                        }
                                        label="茎"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={C}
                                            onChange={handleChange("C")}
                                            value="C"
                                            />
                                        }
                                        label="花"
                                        className={classes.grid_check_small}
                                        /> 
                                    </Grid>
                                </Grid>
                            </FormGroup>
                            </FormControl>
                            {this.selectButton()}
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={6} >
                    <Typography variant="display1" className={classes.hahtitle} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tipMap[this.props.trainingCurrent]}</Typography>
                </Grid>
            </Grid>
        );
    }
}

TrainingQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainingQuestion);
