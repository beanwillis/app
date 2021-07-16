import './contact.scss'
import particlesSkyConfig from "../../config/particlesSkyConfig"
import Particles from 'react-particles-js';

export default function Contact() {
    return (
        <div className='contact' id='contact'>

            <Particles params={particlesSkyConfig} className="canvas"></Particles> 
            <div className="wrapper">
                <div className="content">
                    <h1>Contact Form</h1>
                </div>
            </div>

        </div>
    )
}
