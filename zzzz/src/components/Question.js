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
    }
});

const correctAnswers = [
    true,
    true,
    true,
]

const hzMap = ['一','二','三','四']

class Question extends Component {
    state = {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    isSimple = () => {
        if( Number(this.props.group) <=4 ){
            return true;
        } else {
            return false;
        }
    }

    render(){
        const { classes } = this.props;
        const {A,B,C,D,E,F,G} = this.state;
        const handleChange = this.handleChange;
        const current = this.props.current;
        const isSimple = this.isSimple;
        const onButtonClickNext = this.props.onButtonClickNext;
        const onButtonClickBack = this.props.onButtonClickBack;
        

        function selectContent(isSimple) {
            if(isSimple){
                return(
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
                );
                
            } else {
                return(
                     <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <Grid container spacing={40} >
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={A}
                                            onChange={handleChange("A")}
                                            />
                                        }
                                        label="根"
                                        />
                                    </Grid>
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={B}
                                            onChange={handleChange("B")}
                                            />
                                        }
                                        label="茎"
                                        />
                                    </Grid>
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={C}
                                            onChange={handleChange("C")}
                                            />
                                        }
                                        label="叶"
                                        /> 
                                    </Grid>
                                    <Grid item className = {classes.grid_check} xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={D}
                                            onChange={handleChange("D")}
                                            />
                                        }
                                        label="嫩芽"
                                        />
                                    </Grid>
                                    <Grid item className = {classes.grid_check}  xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={E}
                                            onChange={handleChange("E")}
                                            />
                                        }
                                        label="花蕊"
                                        />
                                    </Grid>
                                    <Grid item className = {classes.grid_check} xs={4}>
                                        
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={F}
                                            onChange={handleChange("F")}
                                            />
                                        }
                                        label="果实"
                                        /> 
                                        
                                    </Grid>
                                    <Grid item xs={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={G}
                                            onChange={handleChange("G")}
                                            />
                                        }
                                        label="种子"
                                        /> 
                                        
                                    </Grid>
                                </Grid>
                            </FormGroup>
                            </FormControl>
                );
            }
        }

        function selectButton(){
            if(current == 1){
                return(
                    <div className={classes.buttonGroup} >
                        <Grid container spacing={24} >
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                    if(isSimple())
                                        onButtonClickNext([A, B, C], correctAnswers)
                                    else
                                        onButtonClickNext([A, B, C, D,E,F,G], correctAnswers)
                                    }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            } else if (current == 30) {
                return(
                    <div className={classes.buttonGroup} >
                        <Grid container spacing={24} >
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                    if(isSimple())
                                        onButtonClickNext([A, B, C], correctAnswers)
                                    else
                                        onButtonClickNext([A, B, C, D,E,F,G], correctAnswers)
                                    }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                        onButtonClickBack()
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
                                    if(isSimple())
                                        onButtonClickNext([A, B, C], correctAnswers)
                                    else
                                        this.props.onButtonClickNext([A, B, C, D,E,F,G], correctAnswers)
                                    }} >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                        onButtonClickBack()
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

        return (
            <Grid container spacing={8} className={classes.cardGroup} >
                <Grid item xs={4} >
                    <Card className={classes.card} >
                    <CardMedia
                        className={classes.media}
                        image="https://i.loli.net/2019/03/05/5c7dfae9d1688.jpg"
                        title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} >
                        <Card className={classes.card}>
                        <div className={classes.gjy} >
                            <Typography variant="h6" className={classes.title} >问题{hzMap[this.props.current - 1]}：图片中是否含有以下元素？</Typography>
                            <Divider className={classes.divider} />
                            
                            {selectContent(this.isSimple())}

                            {selectButton()}
                            
                        </div>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
