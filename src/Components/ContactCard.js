import React from "react";

    // function ContactCardProps(props) {
    //     return (
    //       <div className="contact-card">
    //           <img src={props.imgurl}/>
    //           <h3>{props.name}</h3>
    //           <p>{props.phone}</p>
    //           <p>{props.email}</p>
    //       </div>  
    //     )
    // }

    function ContactCardObject(props) {
        return (
            <div className="contact-card">
                <img src={props.contact.imgurl}/>
                <h3>{props.contact.name}</h3>
                <p>{props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>  
        )
    }


// export default ContactCardProps;
export default ContactCardObject;