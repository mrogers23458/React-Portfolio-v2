import webPimage from '../../assets/images/colorizeMewpFormat.webp'
import pngImage from '../../assets/images/colorizeMe.png'
export default function Home () {

    const contactRedirect = function () {
        window.location.href='/contact'
    }

    const ImgWithFallback = ({
        src,
        fallback,
        className = 'profile-pic',
        type = 'image/webp',
        ...delegated
      }) => {
        return (
          <picture >
            <source alt='blonde man headshot' className={className} srcSet={src} type={type} />
            <img alt='blonde man headshot' className={className} src={fallback} {...delegated} />
          </picture>
        );
      };

    return (
        <div id="home" className="page-one-box">
            <div className="page-one-text-box">
                <h1 className="hello-text medium">HELLO I'M</h1>
                <h2 className="name-text light">MICHAEL ROGERS</h2>
                <h3 className="job-text bright">Professional Web Developer</h3>
                <div onClick={contactRedirect} className="work-together-box">
                    <h4 className="work-text dark">Let's work together!</h4>
                </div>
            </div>
            <div className="profile-img-box">
                <ImgWithFallback src={webPimage} fallback={pngImage} alt="Some photo" />
            </div>
        </div>
    )
}