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
            您好!我们是中央财经大学信息学院研究团队，现正开展一项植物特征识别的公众科学研究项目。公众科学是指依靠大量非职业科研人员和志愿者参与，以完成科学调查与分析的开放科研活动。我们希望依靠您的帮助完成植物特征识别，为植物多样性调查及种群识别提供参考。在本项目中，您将在线观察植物图片，回答图片中植物特征的问题，您的回答将帮助我们对植物图片进行分类。本次任务预计需要大约为10-15分钟。您可以在任何时候选择中止本任务，并回答一份关于本次任务体验的问卷。
            </Typography>
            <br/><br/>
            <center>
              <Button variant="contained" size="large" color="primary" className={classes.button} onClick={() => { this.props.history.push('task')} }>
              开始任务
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
