export default function Navbar () {

    return (
        <div className="top-nav">
            <div className="logo-brand">
                <a href="#home" className="logo-text">M | R</a>
            </div>
            <div className="nav-links-container">
                <a className="top-nav-link" href="#about">About</a>
                <a className="top-nav-link" href="#projects">Projects</a>
                <a className="top-nav-link" href="#experience">Experience</a>
                <a className="top-nav-link" href="#resume">Resume</a>
            </div>
        </div>
    )
}