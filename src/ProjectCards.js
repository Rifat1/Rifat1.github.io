import React,{Component} from "react";
import './img_avatar.png';
import './ProjectCards.css';

class ProjectCards extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectCards: {
                
            }
        }
    }
    render() {
        return (
            <div className="cards">
                <div class="card">
                    <img src="img_avatar.png" alt="Avatar" />
                    <div class="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                
            </div>
            
            
        )
    }
}

export default ProjectCards;