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
        height: 350,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
    buttonGroup: {
        marginTop: theme.spacing.unit * 3,
    },
    media:{
        marginTop:17,
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
    grid_check:{
        // paddingRight: - theme.spacing.unit * 4,
        marginBottom: - theme.spacing.unit * 7,
    },
    grid_check_small:{
        // marginRight:  theme.spacing.unit * 20,
        width: 150,
    }
});

const correctAnswers = [
    true,
    true,
    true,
]

const hzMap = ['一','二','三','四','五','六','六','七','八','九','十','十一','十一','十二','十三','十四','十五','十六','十六','十七','十八','十九','二十','二十一','二十一','二十二','二十三','二十四','二十五','二十六','二十六','二十七','二十八','二十九','三十']

const imgMap = {
    "1": "https://i.loli.net/2019/04/03/5ca430df48a63.jpg",
    "2": "https://i.loli.net/2019/04/03/5ca430e258e68.jpg",
    "3": "https://i.loli.net/2019/04/03/5ca430dd54bf6.jpg",
    "4": "https://i.loli.net/2019/04/03/5ca4ae02876f6.jpg",
    "5": "https://i.loli.net/2019/04/03/5ca430dbe9ee5.jpg",

    "7": "https://i.loli.net/2019/04/03/5ca430e23a611.jpg",
    "8": "https://i.loli.net/2019/04/03/5ca4ae0061f68.jpg",
    "9": "https://i.loli.net/2019/04/03/5ca430e1473cf.jpg",
    "10":"https://i.loli.net/2019/04/03/5ca430e24167f.jpg",
    "11":"https://i.loli.net/2019/04/03/5ca430e204a91.jpg",

    "13":"https://i.loli.net/2019/04/03/5ca432437f3f3.jpg",
    "14":"https://i.loli.net/2019/04/03/5ca43242638e3.jpg",
    "15":"https://i.loli.net/2019/04/03/5ca4324327213.jpg",
    "16":"https://i.loli.net/2019/04/03/5ca432438618e.jpg",
    "17":"https://i.loli.net/2019/04/03/5ca43242d9aba.jpg",

    "19":"https://i.loli.net/2019/04/03/5ca432438618e.jpg",
    "20":"https://i.loli.net/2019/04/03/5ca432437c7b5.jpg",
    "21":"https://i.loli.net/2019/04/03/5ca4324172427.jpg",
    "22":"https://i.loli.net/2019/04/03/5ca43242ac75d.jpg",
    "23":"https://i.loli.net/2019/04/03/5ca43242c34f4.jpg",

    "25":"https://i.loli.net/2019/04/03/5ca432c373ed0.jpg",
    "26":"https://i.loli.net/2019/04/03/5ca432c6cf340.jpg",
    "27":"https://i.loli.net/2019/04/03/5ca4ae003f747.jpg",
    "28":"https://i.loli.net/2019/04/03/5ca432dcbe4e0.jpg",
    "29":"https://i.loli.net/2019/04/03/5ca432dc8c439.jpg",

    "31":"https://i.loli.net/2019/04/03/5ca4adfcd33f5.jpg",
    "32":"https://i.loli.net/2019/04/03/5ca432ddab13e.jpg",
    "33":"https://i.loli.net/2019/04/03/5ca432dd6f4ff.jpg",
    "34":"https://i.loli.net/2019/04/03/5ca432dc6fa76.jpg",
    "35":"https://i.loli.net/2019/04/03/5ca432ddacac7.jpg"    
}

const C_correctAnswers = {
    "1":[true,true,true,false,true,false,false],
    "2":[true,true,false,true,false,false,false],
    "3":[true,true,true,false,false,false,true],
    "4":[true,true,true,false,false,false,false],
    "5":[true,true,true,false,false,false,false],

    "7":[true,true,true,true,false,true,false],
    "8":[true,true,true,false,false,false,false],
    "9":[true,true,true,true,true,false,false],
    "10":[true,true,true,true,false,true,false],
    "11":[true,true,true,false,true,false,false],

    "13":[true,true,false,true,false,false,true],
    "14":[true,true,false,false,false,false,false],
    "15":[true,true,true,false,true,false,true],
    "16":[true,true,true,false,true,false,false],
    "17":[true,true,false,false,false,true,false],

    "19":[true,true,false,false,false,false,true],
    "20":[true,false,false,true,false,false,true],
    "21":[true,true,true,false,true,false,false],
    "22":[true,true,true,false,true,false,false],
    "23":[true,true,false,true,false,true,false],

    "25":[true,true,true,true,true,true,false],
    "26":[true,true,true,false,true,false,false],
    "27":[true,true,true,false,false,false,true],
    "28":[true,true,false,true,false,true,false],
    "29":[true,true,false,true,true,true,false],

    "31":[true,true,true,false,true,false,true],
    "32":[true,true,true,false,true,false,true],
    "33":[true,true,true,true,true,true,true],
    "34":[true,true,false,true,true,true,true],
    "35":[true,true,false,true,false,true,true],
}


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


    handleNB(){
        this.setState({
            A: false,
            B: false,
            C: false,
            D: false,
            E: false,
            F: false,
            G: false,
        });
    }

    selectButton = () => {
        const { classes } = this.props;
        if(this.props.current == 1){
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={this.props.classes.button1} onClick={() => {
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], C_correctAnswers[this.props.current])
                                    this.handleNB();
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={this.props.classes.button2} onClick={() => {this.props.onButtonClickEnd()} } >
                            结束任务
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        } else if (this.props.current == 35) {
            return(
                <div className={classes.buttonGroup} >
                    <Grid container spacing={24} >
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" className={classes.button1} onClick={() => {
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], C_correctAnswers[this.props.current])
                                    this.props.history.push('survey');
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                this.props.onButtonClickBack()
                                this.handleNB();
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {this.props.onButtonClickEnd()}} >
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
                                    this.props.onButtonClickNext([this.state.A, this.state.B, this.state.C, this.state.D,this.state.E,this.state.F,this.state.G], C_correctAnswers[this.props.current])
                                    this.handleNB();
                                }} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
                                    this.props.onButtonClickBack()
                                    this.handleNB();
                                }} >
                                返回上一题
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="contained" color="primary" className={classes.button2} onClick={() => {this.props.onButtonClickEnd()}} >
                            结束任务
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    selectContent = () => {
        const { classes } = this.props;
        const {A,B,C,D,E,F,G} = this.state;
        const handleChange = this.handleChange;
        if(this.props.isSimple){
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
                                    label="叶"
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
                                    label="花朵"
                                    
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
                                    label="树皮/树枝"
                                    className={classes.grid_check_small}
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
                                    label="花苞"
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
                                        label="植物全貌"
                                        className={classes.grid_check_small}
                                        /> 
                                </Grid>
                            </Grid>
                        </FormGroup>
                        </FormControl>
            );
        }
    }

    render(){
        const { classes } = this.props;
        const {A,B,C,D,E,F,G} = this.state;
        const handleChange = this.handleChange;
        // console.log(this.props.isSimple);
        

        return (
            <Grid container spacing={8} className={classes.cardGroup} >
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
                            {this.selectContent()}
                            {this.selectButton()}                          
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
