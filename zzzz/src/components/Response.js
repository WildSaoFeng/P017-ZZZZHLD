import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  '@global': {
    body: {
      color:'#ffffff',
    },
  },
  appBar: {
    position: 'fixed',
    boxShadow: "none",
    backgroundColor:'transparent',
  },
  toolbarTitle: {
    flex: 1,
    color:'#ffffff',
  },
  layout: { 
    backgroundImage: `url('https://i.loli.net/2019/03/05/5c7dfae9d1688.jpg')`,
    backgroundAttachment: 'absolute',
    backgroundSize: '100%',
    paddingBottom: theme.spacing.unit * 70,
  },
  layout2: {
    backgroundColor:'#1d213c', //紫黑色
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  layout3: {
    backgroundColor:'#272b47', //更浅的紫黑色
    paddingTop: theme.spacing.unit * 7 ,
    paddingBottom: theme.spacing.unit * 7 ,
  },
  layout4: {
    backgroundColor:'#16192f', //更深的紫黑色
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  layout5: {
    backgroundColor:'#272b47', 
    color:"#0b91a5"
  },
  heroContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  mainContent: {
    marginTop:theme.spacing.unit * 8,
    marginBottom:theme.spacing.unit * -8,
  },
  heroContent2: {
    maxWidth: 1200,
    paddingLeft: theme.spacing.unit * 12,
  },
  heroContent3: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    paddingLeft: theme.spacing.unit * 12,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  button:{
    size: 'large',
  },
  navbutton:{
    color: theme.palette.common.white,
  },
  subtitle:{
   color:'primary'
  },
  hr:{
    color:'#234008',
  },
  uequ:{
    marginTop:theme.spacing.unit * 5,
    color:"#1d64d6",
  },
  ziti:{
    color:"#1d64d6",
  },
  Divider:{
    color:'#272b47'
  },
  greet:{
    marginBottom:theme.spacing.unit * 3,
  },
  centerContent:{
    marginBottom: 30
  },
  centerContent2:{
    marginTop: 160
  }
});

class Response extends Component {
  

  selectButton = () => {
    const { classes } = this.props;
    if(this.props.current == 36){
      return(
        <Button variant="contained" color="primary" className={classes.button2} onClick={() => {
          this.props.history.push('survey')
        }} >
        进入下一阶段
        </Button>);
    } else {
      return(
        <Button variant="contained" color="primary" className={classes.button2} onClick={() => {this.props.onButtonClickNextPure()}} >
            进入下一题
        </Button>
      );
    }
  };

  selectContent = () => {
    const { classes } = this.props;
    let correctQuestions = this.props.correctQuestions;
    let num = this.props.num;
    let correctQuestion;
    let outputQuestions = '';
    for(correctQuestion in correctQuestions){
      correctQuestion = Number(num) + Number(correctQuestion);
      outputQuestions = outputQuestions + correctQuestion + '. ';
    }
    console.log(this.props.current);
    if(this.props.crt === 0){
      return(
        <Typography variant="title" align="center" color="inherit" className={classes.centerContent} style={{color:'#ffffff'}} component="p">
            刚刚您做的5道题中您总共做对{this.props.crt}道 <br/>
        </Typography>
      );
    } else if(this.props.crt === 1) {
      return(
        <Typography variant="title" align="center" color="inherit" className={classes.centerContent} style={{color:'#ffffff'}} component="p">
            刚刚您做的5道题中您只做对了第{outputQuestions}道 <br/>
        </Typography>
      );
    }else{
      return(
        <div>
          <Typography variant="title" align="center" color="inherit" className={classes.centerContent} style={{color:'#ffffff'}} component="p">
              刚刚您做的5道题中您总共做对{this.props.crt}道 <br/>
          </Typography>
          <Typography variant="title" align="center" color="inherit" className={classes.centerContent} style={{color:'#ffffff'}} component="p">
            分别是第{outputQuestions}道
          </Typography>
        </div>
      );
    }
  }

  
  
  render() {
    const { classes } = this.props;
    let correctQuestions = this.props.correctQuestions;
    let num = this.props.num;
    let correctQuestion;
    let outputQuestions = '';
    for(correctQuestion in correctQuestions){
      correctQuestion = Number(num) + Number(correctQuestion);
      outputQuestions = outputQuestions + correctQuestion + '. ';
    }

    return (
      <React.Fragment>
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <div className={classes.mainContent}>
            {this.selectContent()}
            <Typography variant="title" align="center" color="inherit" className={classes.centerContent} style={{color:'#ffffff'}} component="p">
            </Typography>
            <center>
            {this.selectButton()}
            </center>
          </div>
        </div>
      </main>
      </React.Fragment>
    );
  }
}

Response.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Response);
