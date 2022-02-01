import image from '../assets/images/sketchMe.png'

export default function Body () {
    return (
        <div id="#home" className="page-one-box">
            <div className="page-one-text-box">
                <h1 className="hello-text medium">HELLO I'M</h1>
                <h2 className="name-text light">MICHAEL ROGERS</h2>
                <h3 className="job-text light">Professional Web Developer</h3>
                <div className="work-together-box">
                    <h4 className="work-text dark">Let's work together!</h4>
                </div>
            </div>
            <div className="profile-img-box">
                <img className="profile-pic" src={image}></img>
            </div>
        </div>
    )
}