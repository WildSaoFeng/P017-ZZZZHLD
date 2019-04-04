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

import img1 from './pics--selected/01.jpg';
import img2 from './pics--selected/02.jpg';
import img3 from './pics--selected/03.jpg';
import img4 from './pics--selected/04.jpg';
import img5 from './pics--selected/05.jpg';
import img6 from './pics--selected/06.jpg';
import img7 from './pics--selected/07.jpg';
import img8 from './pics--selected/08.jpg';
import img9 from './pics--selected/09.jpg';
import img10 from './pics--selected/010.jpg';
import img11 from './pics--selected/011.jpg';
import img12 from './pics--selected/012.jpg';
import img13 from './pics--selected/013.jpg';
import img14 from './pics--selected/014.jpg';
import img15 from './pics--selected/015.jpg';
import img16 from './pics--selected/016.jpg';
import img17 from './pics--selected/017.jpg';
import img18 from './pics--selected/018.jpg';
import img19 from './pics--selected/019.jpg';
import img20 from './pics--selected/020.jpg';
import img21 from './pics--selected/021.jpg';
import img22 from './pics--selected/022.jpg';
import img23 from './pics--selected/023.jpg';
import img24 from './pics--selected/024.jpg';
import img25 from './pics--selected/025.jpg';
import img26 from './pics--selected/026.jpg';
import img27 from './pics--selected/027.jpg';
import img28 from './pics--selected/028.jpg';
import img29 from './pics--selected/029.jpg';
import img30 from './pics--selected/030.jpg';

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
    },
    image:{
        marginTop:18,
        width:400,
        height:300,
    }
});

const correctAnswers = [
    true,
    true,
    true,
]

const hzMap = ['1','2','3','4','5','6','6','7','8','9','10','11','11','12','13','14','15','16','16','17','18','19','20','21','21','22','23','24','25','26','26','27','28','29','30']

const imgMap = {
    "1": img1,
    "2": img2,
    "3": img3,
    "4": img4,
    "5": img5,

    "7": img6,
    "8": img7,
    "9": img8,
    "10":img9,
    "11":img10,

    "13":img11,
    "14":img12,
    "15":img13,
    "16":img14,
    "17":img15,

    "19":img16,
    "20":img17,
    "21":img18,
    "22":img19,
    "23":img20,

    "25":img21,
    "26":img22,
    "27":img23,
    "28":img24,
    "29":img25,

    "31":img26,
    "32":img27,
    "33":img28,
    "34":img29,
    "35":img30    
}

const C_correctAnswers = {
    "1":[true,true,true,false,true,false,false],
    "2":[true,true,false,true,false,true,false],
    "3":[true,true,true,false,true,false,true],
    "4":[true,true,true,false,true,false,false],
    "5":[true,true,true,false,true,false,false],

    "7":[true,true,true,true,true,true,false],
    "8":[true,true,true,false,false,true,false],
    "9":[true,true,true,true,true,false,false],
    "10":[true,true,true,true,false,true,false],
    "11":[true,true,true,false,true,false,false],

    "13":[true,true,false,true,false,false,true],
    "14":[true,true,false,false,false,true,false],
    "15":[false,true,false,false,true,false,true],
    "16":[true,true,true,false,true,false,false],
    "17":[true,true,false,false,false,true,false],

    "19":[true,true,false,false,false,false,true],
    "20":[true,true,false,true,false,false,true],
    "21":[true,true,true,false,true,false,false],
    "22":[true,true,true,false,true,true,false],
    "23":[true,true,false,true,false,true,false],

    "25":[true,true,true,true,false,true,false],
    "26":[true,true,true,false,true,false,false],
    "27":[true,true,true,false,false,false,true],
    "28":[true,true,false,true,false,true,false],
    "29":[true,true,false,true,true,true,false],

    "31":[true,true,true,false,false,true,false],
    "32":[true,true,true,false,true,false,false],
    "33":[true,true,true,true,true,true,true],
    "34":[true,true,false,true,false,true,false],
    "35":[true,true,true,true,false,false,false],
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
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                        <img className={classes.image} src={imgMap[this.props.current]} alt="01.jpg"/>
                    {/* <CardMedia
                        className={classes.media}
                        image="./01.jpg"
                        src="01.jpg"
                        title="Contemplative Reptile"
                        /> */}
                    </Card>
                </Grid>
                <Grid item xs={4} >
                        <Card className={classes.card}>
                        <div className={classes.gjy} >
                            <Typography variant="h6" className={classes.title} >{hzMap[this.props.current - 1]}. 图片中含有以下哪些元素？</Typography>
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
