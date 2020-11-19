import './css/App.css';
import { AppBar,Toolbar,Typography, makeStyles,Button } from '@material-ui/core';
import Main from './components/Main';
import Images from './components/Images';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StaticMenu = () => {
  const aboutSection = useScrollSection('about');
  const gallerySection = useScrollSection('gallery');
  const contactSection = useScrollSection('services');
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="secondary">
    <Toolbar>
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" className={classes.title}>
        Portfolio
      </Typography>
      <Button color="inherit" onClick={aboutSection.onClick}>About</Button>
      <Button color="inherit" onClick={gallerySection.onClick}>Gallery</Button>
      <Button color="inherit" onClick={contactSection.onClick}>Services</Button>
  </Toolbar>
  </AppBar>
  );
};
function App() {

  return (
    <ScrollingProvider>
      <StaticMenu/>
    <Main/>
    <Section id="about"/>
    <About/>
    <br></br>
    <Section id="gallery" />
    <Images />
    <br></br>
    <br></br>
    <br></br>

    <Section id="services"/>
    <Services/>
    <br></br> 
    <br></br>
    <Footer/> 
    </ScrollingProvider>  );
}

export default App;
