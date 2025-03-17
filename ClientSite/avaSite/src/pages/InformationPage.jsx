import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { getRequest } from '../js/requests'
import $ from 'jquery'

function InformationPage() {
    const [info, setInfo] = useState(<div></div>);
    const [spotlight, setSpotlight] = useState("");

    // using art institute of chicago api to fetch avas current favorite work
    useEffect(() => {
        fetch("https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg")
            .then(response => response.url)
            .then(url => setSpotlight(url));
    }, []);
    // fetches the information from the info.html file
    useEffect(() => {
          async function fetchInfo() {
            let info = await getRequest("src/data/info.html", "html");
            let parser = new DOMParser();
            let doc = parser.parseFromString(info, "text/html");
            let bodyContent = doc.body.innerHTML;
            console.log(bodyContent);
            setInfo(bodyContent);
          }
          fetchInfo();
        }, []);
    // fetches the contact information from the contact.html file
    useEffect(() => {
        async function fetchContact() {
          let contact = await getRequest("src/data/contact.html", "html");
          let parser = new DOMParser();
          let doc = parser.parseFromString(contact, "text/html");
          let bodyContent = doc.body.innerHTML;
          $(".contact-info").html(bodyContent);
        }
        fetchContact();
      }, []);

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
            </div>
        </div>
        <div className="summary" dangerouslySetInnerHTML={{__html: info}}>
        </div>
        <h2>Famous Work Spotlight</h2>
        <div className='spotlight'>
        <img src={spotlight} id='spotlight' alt="Famous Work Spotlight"/>
        <p>Here is Ava's current favorite work from her schools archive, titled 'A Sunday on La Grande Jatte' (1884)</p>
        </div>
    </div>
    </>
)
}

export default InformationPage
