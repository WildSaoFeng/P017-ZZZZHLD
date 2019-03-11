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
    grid_check:{
        marginBottom: - theme.spacing.unit * 6 ,
    }
});

class Question8 extends Component {
    state = {
        gen: true,
        jing: false,
        ye: false,
        current:1,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render(){
        const { classes } = this.props;
        const { gen, jing, ye } = this.state;
        
        return (
            <Grid container spacing={8} className={classes.cardGroup} >
                <Grid item xs={4} >
                    <Card className={classes.card} >
                    </Card>
                </Grid>
                <Grid item xs={4} >
                        <Card className={classes.card}>
                        <div className={classes.gjy} >
                            <Typography variant="h6" className={classes.title} >问题八：图片中是否含有以下元素？</Typography>
                            <Divider className={classes.divider} />
                            <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <Grid container spacing={40} >
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={gen}
                                            onChange={this.handleChange("gen")}
                                            value="gen"
                                            />
                                        }
                                        label="根"
                                        />
                                    </Grid>
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            onChange={this.handleChange("jing")}
                                            value="jing"
                                            />
                                        }
                                        label="茎"
                                        />
                                    </Grid>
                                    <Grid className = {classes.grid_check} item xs={4}>
                                        
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={ye}
                                            onChange={this.handleChange("ye")}
                                            value="ye"
                                            />
                                        }
                                        label="叶"
                                        /> 
                                    </Grid>
                                    <Grid item className = {classes.grid_check} xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={gen}
                                            onChange={this.handleChange("gen")}
                                            value="gen"
                                            />
                                        }
                                        label="嫩芽"
                                        />
                                    </Grid>
                                    <Grid item className = {classes.grid_check}  xs={4}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            onChange={this.handleChange("jing")}
                                            value="jing"
                                            />
                                        }
                                        label="花蕊"
                                        />
                                    </Grid>
                                    <Grid item className = {classes.grid_check} xs={4}>
                                        
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={ye}
                                            onChange={this.handleChange("ye")}
                                            value="ye"
                                            />
                                        }
                                        label="果实"
                                        /> 
                                        
                                    </Grid>
                                    <Grid item xs={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            checked={ye}
                                            onChange={this.handleChange("ye")}
                                            value="ye"
                                            />
                                        }
                                        label="种子"
                                        /> 
                                        
                                    </Grid>
                                </Grid>
                            </FormGroup>
                            </FormControl>
                            <div className={classes.buttonGroup} >
                                <Grid container spacing={24} >
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="secondary" className={classes.button1}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存答案，下一题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" color="primary" className={classes.button2}>
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
                        </div>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

Question8.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question8);
