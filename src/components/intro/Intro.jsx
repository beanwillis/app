import './intro.scss'
import Typical from 'react-typical'
import vi from '../../assets/vi.png'
import {ExpandMore} from "@material-ui/icons"

export default function Intro() {

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={vi} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi! I'm
                    </h2>
                    <h1>Vo Pham Thao Vi</h1>
                    
                    <Typical
                        steps={[
                            'Software Developer', 1000, 
                            'Front-end Developer', 1000,]}
                        loop={Infinity}
                        wrapper="h3"
                    />
                  

                    <a href="#portfolio">
                        <ExpandMore className="arrow"/>
                    </a>
                </div>
            </div>

        </div>
    )
}
