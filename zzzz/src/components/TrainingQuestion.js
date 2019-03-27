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
        fontSize:25,
        marginLeft:240,
    },
    grid_check_small:{
        // marginRight:  theme.spacing.unit * 20,
        width: 150,
    }
});

const correctAnswersT = [
    true,
    true,
    true,
]

const hzMap = ['一','二','三','四','五','六','六','七','八','九','十','十一','十一','十二','十三','十四','十五','十六','十六','十七','十八','十九','二十','二十一','二十一','二十二','二十三','二十四','二十五','二十六','二十六','二十七','二十八','二十九','三十']
const imgMap = {
    "1":"https://i.loli.net/2019/03/12/5c8720ac317ab.jpg",
    "2":"https://i.loli.net/2019/03/12/5c8720a9e6602.jpg",
    "3":"https://i.loli.net/2019/03/12/5c871fb6cdeca.jpg",
    "4":"https://i.loli.net/2019/03/12/5c871fcbbdd57.jpg",
    "5":"https://i.loli.net/2019/03/12/5c871fc7b51e3.jpg",

    "7":"https://i.loli.net/2019/03/12/5c871fb6b5c07.jpg",
    "8":"https://i.loli.net/2019/03/12/5c871fb2debcf.jpg",
    "9":"https://i.loli.net/2019/03/12/5c871fb63ec7a.jpg",
    "10":"https://i.loli.net/2019/03/12/5c871fb4e604c.jpg",
    "11":"https://i.loli.net/2019/03/12/5c871fb0d5cbe.jpg",

    "13":"https://i.loli.net/2019/03/12/5c8721fbe8b43.jpg",
    "14":"https://i.loli.net/2019/03/12/5c8721f792347.jpg",
    "15":"https://i.loli.net/2019/03/12/5c8721fa1574d.jpg",
    "16":"https://i.loli.net/2019/03/12/5c8721fc1d4a3.jpg",
    "17":"https://i.loli.net/2019/03/12/5c8721f814e20.jpg",

    "19":"https://i.loli.net/2019/03/12/5c8721fa790b6.jpg",
    "20":"https://i.loli.net/2019/03/12/5c8721fbd2096.jpg",
    "21":"https://i.loli.net/2019/03/12/5c8721f778ccf.jpg",
    "22":"https://i.loli.net/2019/03/12/5c8721fa02692.jpg",
    "23":"https://i.loli.net/2019/03/12/5c8721fb95790.jpg",

    "25":"https://i.loli.net/2019/03/12/5c87229918d79.jpg",
    "26":"https://i.loli.net/2019/03/12/5c872294c1df8.jpg",
    "27":"https://i.loli.net/2019/03/12/5c8722a06415e.jpg",
    "28":"https://i.loli.net/2019/03/12/5c8722a0b66c3.jpg",
    "29":"https://i.loli.net/2019/03/12/5c8722a632e0f.jpg",

    "31":"https://i.loli.net/2019/03/12/5c8722a33bdc9.jpg",
    "32":"https://i.loli.net/2019/03/12/5c8722a3b8fe8.jpg",
    "33":"https://i.loli.net/2019/03/12/5c8722a1bdf60.jpg",
    "34":"https://i.loli.net/2019/03/12/5c8722a1e7f4e.jpg",
    "35":"https://i.loli.net/2019/03/12/5c8722a5ec8f3.jpg"    
}
const tipMap = {
    1:'提示1',
    2:'提示2',
    3:'提示3',
    4:'提示4',
    5:'提示5'
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
                    <Typography variant="display1" className={classes.hahtitle} >此题目为训练题目，不计入最后分数</Typography>
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
                            <Typography variant="h6" className={classes.title} >问题{hzMap[this.props.trainingCurrent - 1]}：图片中是否含有以下元素？</Typography>
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
                                        label="花蕾"
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
                <Grid item xs={12} >
                    <Typography variant="display1" className={classes.hahtitle} >{tipMap[this.props.trainingCurrent]}</Typography>
                </Grid>
            </Grid>
        );
    }
}

TrainingQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrainingQuestion);
