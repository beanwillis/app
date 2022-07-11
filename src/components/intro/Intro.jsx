import "./intro.scss";
import Typical from "react-typical";
import vi from "../../assets/vi.png";
import vi_resume from "../../assets/vi_resume.pdf";
import { ExpandMore } from "@material-ui/icons";
import Particles from 'react-particles-js';
import particlesBubbleConfig from "../../config/particlesBubbleConfig"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <Particles params={particlesBubbleConfig} className="canvas"></Particles>
            <div className="imgContainer">
                <img src={vi} alt="Vo Pham Thao Vi's profile. Short curly hair girl with a shining smile!" />
            </div>
            <div className="wrapper">
                <div className="content">
                    <h2>Hi! I'm Vi</h2>
                    <Typical
                        steps={[
                            "SMU Undergraduate", 1000,
                            "UI/UX Designer", 1000,
                            "Front-end Developer", 1000
                        ]}
                        loop={Infinity}
                        wrapper="h3"
                    />
                    <a className="resumeLink" href={vi_resume} download="Vo_Pham_Thao_Vi_Resume.pdf">My Resume</a>
                </div>
            </div>
            <a className="arrowAnchorTag" href="#portfolio">
                <ExpandMore className="arrow" />
            </a>
        </div>
    );
}
