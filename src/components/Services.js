import React from 'react'
import {Card, CardContent,Grid, makeStyles,Box, Container} from '@material-ui/core';
import '../css/Main.css'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
     textAlign:'center',
     marginBottom:'100px'
    },
    card:{
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    img_service: {
        width:"50%",
        height:"200px",
        display:"block", 
        marginLeft:'auto', 
        marginRight:'auto'
    },
  }));

function Services() {
    const classes = useStyles();
    return (
        <Container>
           <h1 className="headings">My Services</h1>
            <hr style={{width:"200px"}} ></hr>

        <Grid container spacing={3}>
            <Grid item xs={4}>
            <Box boxShadow={4}>
    
    <Card  className={classes.root} >
    <CardContent>
    <img className={classes.img_service} src="https://webstockreview.net/images/fire-clipart-red.png" alt="fire"/>
    <h3>Logo Beginner</h3>
    <p>Logo Designed For your need in 2 days with no revisions.</p>
        <p><strong>Price: </strong>50 $</p>
    </CardContent>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={4}>
        <Box boxShadow={4}>
        <Card className={classes.root}>
        <CardContent>
    <img className={classes.img_service} src="https://library.kissclipart.com/20180831/zpe/kissclipart-flame-clipart-flame-logo-fire-94048ab41a62b6d3.jpg" alt="fast"/>
    <h3>Logo Intermediate</h3>
        <p>Logo Designed within 4 days of your need with 2 months revisions.</p>
        <p><strong>Price: </strong>100 $</p>
    </CardContent>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={4}>
        <Box boxShadow={4}>
        <Card  className={classes.root}>
        <CardContent>
    <img className={classes.img_service} src="https://i.pinimg.com/originals/d1/f1/6b/d1f16b261f8a1c317923ed9c0f6e54aa.png" alt="mouse"/>
    <h3>Logo Premium</h3>
    <p>Fully Premium logo within 10 days with revisions and changes till 4 months. </p>
        <p><strong>Price: </strong>200 $</p>
    </CardContent>
    </Card>
    </Box>
    </Grid>
    </Grid>
    </Container>
    )
}

export default Services
