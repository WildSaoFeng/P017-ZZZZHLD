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
  layout1: { 
    backgroundImage: `url('https://i.loli.net/2019/04/05/5ca6e088eb60e.jpg')`,
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
    
    var u = navigator.userAgent;
    let mobile =  !!u.match(/AppleWebKit.*Mobile.*/); //是否为移动终端  
    if(mobile){
      return (     
        <React.Fragment>
        <main className={classes.layout1} >
          <div className={classes.heroContent}>
            <div className={classes.mainContent}>
            <Typography variant="title" color="inherit" align="center" style={{color:'#000000',}} component="p">
                欢迎您参加此次公众科学任务
              </Typography>
              <Typography variant="title" color="inherit" align="center" style={{color:'#000000',}} component="p">
                请在电脑浏览器打开此链接
              </Typography>
              <br/>
            </div>
          </div>
        </main>
        </React.Fragment>
      );
    }else{
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
              <Typography variant="title" color="inherit" style={{color:'#ffffff'}} component="p">
              &nbsp; &nbsp;您好！我们是中央财经大学信息学院研究团队，现正开展一项公众科学志愿者参与体验研究。
              </Typography>
              <br/>
              <Typography variant="title" color="inherit" style={{color:'#ffffff'}} component="p">
              【任务介绍】在此处任务中，您将首先在线观察30张植物图片并要求进行标注，随后会回答一个35题的问卷，整体耗时约10-15分钟。
              </Typography>
              <Typography variant="title" color="inherit" style={{color:'#ffffff'}} component="p">
              【特别要求】若您在观察前30张图片时感觉到不耐烦，可随时点页面上的“终止任务”，此时会直接进入问卷环节。注意，不同的用户可能会在不同的时间点上终止观察任务，这是我们的研究内容之一，请务必按您的真实感觉来进行。
              </Typography>
              <Typography variant="title" color="inherit" style={{color:'#ffffff'}} component="p">
              注：公众科学是指依靠大量志愿者参与，以完成科学分析的开放科研活动。
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
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
