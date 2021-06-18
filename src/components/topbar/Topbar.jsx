import './topbar.scss'
import {Language,Phone,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">ViDoCoding👩🏻‍💻</a>
                    <div className="itemContainer">
                        <Language className="icon"/><span>🇻🇳 🇸🇬</span>
                    </div>
                    <div className="itemContainer">
                        <Phone className="icon"/><span>+65 8131 1161</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/><span>vptv1310@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
