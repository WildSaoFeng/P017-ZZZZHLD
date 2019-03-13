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
        height: 0,
        paddingTop: '56.25%', 
        marginTop:'30'
    },
    cardGroup:{
        marginLeft: theme.spacing.unit * 30 ,
        marginTop: theme.spacing.unit * 20 ,
    },
    button1:{
        length:100,
    },
    head:{
        marginTop:60,
        marginLeft:100,
        marginRight:100,
    },
    tstitle: {
        fontSize: 20
    },
});

const correctAnswers = [
    true,
    true,
    true,
]

const hzMap = ['一','二','三','四','五',]
const imgMap = {
    "1":"https://i.loli.net/2019/03/12/5c8720ac317ab.jpg",
    "2":"https://i.loli.net/2019/03/12/5c8720a9e6602.jpg",
    "3":"https://i.loli.net/2019/03/12/5c871fb6cdeca.jpg",
    "4":"https://i.loli.net/2019/03/12/5c871fcbbdd57.jpg",
    "5":"https://i.loli.net/2019/03/12/5c871fc7b51e3.jpg" 
}

class Training extends Component {
    state = {
        A: false,
        B: false,
        C: false,
    };
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    selectButton = () => {
        const { classes } = this.props;
        if(this.props.current == 1){
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={this.props.classes.button1} onClick={() => {
                                if(this.isSimple()){
                                   this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C],correctAnswers)
                                }
                                else
                                   this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], correctAnswers)
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={this.props.classes.button2}>
                            结束任务
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        } else if (this.props.current == 6) {
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                if(this.isSimple())
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C], correctAnswers)
                                else
                                this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], correctAnswers)
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                this.props.onButtonClickBack()
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2}>
                            结束任务
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
                                if(this.isSimple())
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C], correctAnswers)
                                else
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], correctAnswers)
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                    this.props.onButtonClickBack()
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2}>
                            结束任务
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    render(){
        const { classes } = this.props;
        const {A,B,C,D,E,F,G} = this.state;
        const handleChange = this.handleChange;
        
        return (
            <Grid container spacing={8} className={classes.cardGroup} >
                <div className={classes.head} >
                    <Typography variant="display1" className={classes.tstitle} > 本题为训练题目不计分 </Typography>
                </div>
                <Grid item xs={4} >
                    <Card className={classes.card} >
                    <CardMedia
                        className={classes.media}
                        image={imgMap[this.props.current]}
                        title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} >
                        <Card className={classes.card}>
                        <div className={classes.gjy} >
                            <Typography variant="h6" className={classes.title} >问题{hzMap[this.props.current - 1]}：图片中是否含有以下元素？</Typography>
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
                                        label="根"
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
                                        label="叶"
                                        /> 
                                    </Grid>
                                </Grid>
                            </FormGroup>
                            </FormControl>
                            {this.selectButton()}
                        </div>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Training.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Training);
