import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1 style={{color:'black'}}>A fullstack javascript Developer</h1>
                            

                            <p style={{color:'black'}}>HTML | CSS | JavaScript | React | Bootstrap | Node | mongodb </p>

                            <div className="social-links" >
                                {/* Facebook social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" style={{color:'black'}}/>
                                </a>
                                {/* LinkedIn social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{color:'black'}}/>
                                </a>
                                {/* Github social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" style={{color:'black'}}/>
                                </a>
                                {/* Google plus social link */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-google-plus-square" aria-hidden="true" style={{color:'black'}}/>
                                </a>
                                

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
