import './contact.scss'
import particlesSkyConfig from "../../config/particlesSkyConfig"
import Particles from 'react-particles-js';
import { LinkedIn, Mail } from "@material-ui/icons"

export default function Contact() {
    return (
        <div className='contact' id='contact'>

            <Particles params={particlesSkyConfig} className="canvas"></Particles>
            <div className="wrapper">
                <div className="content">
                    <div className="title">

                    <h2>Contacts</h2>
                    </div>
                    <div className="contact-method">
                        <LinkedIn className="icon" />
                        <h4>/vivo1310</h4>

                    </div>
                    <div className="contact-method">

                        <Mail className="icon" />
                        <h4>vptv1310@gmail.com</h4>
                    </div>



                </div>
            </div>

        </div>
    )
}
