import './portfolio.scss'
import particlesLinesConfig from "../../config/particlesLinesConfig"
import Particles from 'react-particles-js';

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <Particles params={particlesLinesConfig} className="canvas"></Particles> 
            <div className="wrapper">
                <div className="content">
                    <h1>Portfolio</h1>
                </div>
            </div>
        </div>
    )
}
