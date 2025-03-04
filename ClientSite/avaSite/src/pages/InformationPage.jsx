import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { getRequest } from '../js/requests'
import $ from 'jquery'

function InformationPage() {
    const [info, setInfo] = useState(<div></div>);
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
    </div>
    </>
)
}

export default InformationPage
