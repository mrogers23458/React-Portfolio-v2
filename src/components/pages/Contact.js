import github from "../../assets/images/github.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"

export default function Contact () {

    const git = github
    const insta = instagram
    const linked = linkedin

    return (
        <div className="contact-page-box">
            <div className="contact-info-box">
                <div className="contact-info-header">
                    <h1 className="contact-info-header-text">Contact Me</h1>
                </div>
                <div className="email-box">
                    <h2 className="email-text-header">EMAIL ADDRESS</h2>
                    <h3 className="email-text">mrogers23458@gmail.com</h3>
                </div>
                <div className="phone-box">
                    <h4 className="phone-text-header">PHONE NUMBER</h4>
                    <h5 className="phone-text">(831) 233 4653</h5>
                </div>
            </div>
            <div className="ops-box">
                <p className="ops-text1">I'm currently open to new projects and opportunities. The most efficient way to reach me is through email or text. I typically respond within 24 hours.</p>
                <p className="ops-text2">Not quite ready to reach out? Feel free to browse my social media platforms and get a feel about who I am.</p>
                <div className="social-icons-box">
                    <a href="https://github.com/mrogers23458"><img src={git} className="github icon"></img></a>
                    <a href="https://www.linkedin.com/in/mrogers23458/"><img src={linked} className="linkedin icon"></img></a>
                    <a href="https://www.instagram.com/letsgosurftogether/"><img src={insta} className="insta icon"></img></a>
                </div>
            </div>
            
        </div>
    )
}