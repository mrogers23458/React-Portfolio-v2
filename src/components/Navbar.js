export default function Navbar () {

    return (
        <div className="top-nav pitch">
            <div className="logo-brand light">
                <a href="/" className="logo-text light">M | R</a>
            </div>
            <div className="nav-links-container">
                <a className="top-nav-link light" href="/about">About</a>
                <a className="top-nav-link light" href="projects">Projects</a>
                <a className="top-nav-link light" href="experience">Experience</a>
                <a className="top-nav-link light" href="resume">Resume</a>
            </div>
        </div>
    )
}