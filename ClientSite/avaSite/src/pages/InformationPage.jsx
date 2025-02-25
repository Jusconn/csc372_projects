import Navbar from '../components/Navbar'

function InformationPage() {

  return (
    <>
    <Navbar/>
    <div className="main-content">
        <button id="open">Menu</button>
        <h1>Information</h1>
        <div className="profile">
            <div className="contact-image">
                <img src="/blankpfp.svg"/>
            </div>
            <div className="contact-info">
                <h2>Contact</h2>
                <h4>EMAIL: Avarmoniz@gmail.com</h4>
                <h4>INSTAGRAM: @AOMOTGO</h4>
                <h4>CV</h4>
            </div>
        </div>
        <div className="summary">
            <p>
            Ava Moniz is a Rhode Island-based video artist specializing in experimental visuals that push the boundaries of storytelling and abstraction.
            Her work blends analog and digital techniques, creating immersive, dreamlike experiences that resonate with audiences. 
            Collaborating closely with local bands, Ava crafts visuals that enhance live performances, music videos, and multimedia projects, bringing a unique 
            and dynamic energy to the independent music scene. With a passion for exploring new artistic frontiers, 
            she continues to shape the intersection of sound and image through her innovative approach.
            </p>
        </div>
    </div>
    </>
  )
}

export default InformationPage
