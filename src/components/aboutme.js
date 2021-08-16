import React, {Component} from 'react';

class AboutMe extends Component {
    render(){
        return(
            <div><h1>AboutMe Page</h1>
            <div className="profile">
            <p style={{fontSize:30}}> FullName: Mayssa Bouoni</p>
            <br/>
            <p  style={{fontSize:30}}> Age : 23</p>
            <br/>
            <p  style={{fontSize:30}}> Bio: i was a management student  </p>
            <br/>
            <p  style={{fontSize:30}}>Profession: Now i'm a full stack JavaScript Developer  </p>
            <br/>
            <p  style={{fontSize:30}}> Address: Gafsa, Tunisia</p>
            <br/>
            <p  style={{fontSize:30}}> Languages : English, French</p>
            </div>
            </div>
        )
    }
}

export default AboutMe;