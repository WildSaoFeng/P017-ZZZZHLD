import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
  backhome:{
    marginRight:theme.spacing.unit * 3,
  }
});

class Welcome extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.backhome} onClick={() => {
              this.props.history.push('home')
          }} noWrap>
          首页
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
          Botanical Classification 植物学分类任务
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <div className={classes.mainContent}>
            <Typography variant="title" align="center" color="inherit" style={{color:'#ffffff'}} component="p">
            参与者您好，欢迎您参与本次有关植物学分类的公众科学任务。
            </Typography>
            <Typography variant="title" align="center" color="inherit" style={{color:'#ffffff'}} className={classes.greet} component="p">
            此次任务预计占用您8-10分钟，在任务开始前，请您仔细阅读如下内容：
            </Typography>
            <Typography variant="subheading" align="left" color="inherit" style={{color:'#ffffff'}} component="p">
            1. 每个参与者将会完成两组公众科学任务，开始第一组任务后，您可以在任何时间通过点击页面下方的“结束任务”退出任务，然后进入第二组任务，第二组任务也可以随时退出。所有任务结束后，任务会自动退出。
            </Typography>
            <Typography variant="subheading" align="left" color="inherit" style={{color:'#ffffff'}} component="p">
            2. 每一组任务结束后，系统会弹出一个针对此组任务的问卷，也就是说，每一个参与者需要填写两份问卷。请您认真填写。
            </Typography>
            <br/><br/>
            <center>
              <Button variant="contained" size="large" color="primary" className={classes.button} onClick={() => { this.props.history.push('task')} }>
              开始测试
              </Button>
            </center>
          </div>
        </div>
      </main>
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
