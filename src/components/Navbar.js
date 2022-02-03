export default function Navbar () {

    const toggleModal = function () {
        var modal = document.querySelector('.modal-box')
        var down = document.querySelector('.rotate1')
        var vert = document.querySelector('.rotate2')
        var up = document.querySelector('.rotate3')

        const activated = down.classList.contains('down')
        console.log(activated)
        
        if (!activated) {
            modal.classList.toggle('display')
            down.classList.toggle('down')
            vert.classList.toggle('vert')
            up.classList.toggle('up')

        }
        
        if (activated) {
            down.classList.toggle('close')
            vert.classList.toggle('close')
            up.classList.toggle('close')
            modal.classList.toggle('close')
        }

    }

    return (
    <div className="navs">
        <div className="top-nav pitch">
            <div className="logo-brand light">
                <a href="/" className="logo-text logo">M | R</a>
            </div>
            <div className="nav-links-container">
                <a className="top-nav-link light" href="/about">About</a>
                <a className="top-nav-link light" href="projects">Projects</a>
                <a className="top-nav-link light" href="experience">Experience</a>
                <a className="top-nav-link light" href="resume">Resume</a>
            </div>
        </div>
        <div className="mobile-nav">
            <a href="/" className="logo-brand light">M | R</a>
            <div className="modal-overflow">
                <div className="modal-toggle-box" onClick={toggleModal}>
                    <div className="modal-toggle-line rotate1"></div>
                    <div className="modal-toggle-line rotate2"></div>
                    <div className="modal-toggle-line rotate3"></div>
                </div>
                <div className="modal-box">
                    <a href="/about" className="mobile-nav-link light">About</a>
                    <a href="/projects" className="mobile-nav-link light">projects</a>
                    <a href="/experience" className="mobile-nav-link light">Experience</a>
                    <a href="/resume" className="mobile-nav-link light">Resume</a>
                </div>
            </div>
        </div>
    </div>
    )
}