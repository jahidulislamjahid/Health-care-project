import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [myservices, setMyservices] = useState([]);

    useEffect(() => {
        async function serviceData() {
            try {
                const res = await fetch('./serviceData.json');
                const data = await res.json();
                setMyservices(data);
            }
            catch (error) {
                console.log(error)
            }
        };
        serviceData();
    }, [])



    return (
        <div className="container my-5">
            <h1 className="fw-bold font-monospace">Feeling Weak!</h1>
            <h5 className="text-muted my-4 lh-lg">For All Your Health Related Inquiry Come Ask Us. Don't Be Shy. <br /> For Your Better Health Call Our Hotline. We are Waiting for Your Call.</h5>


            <Row xs={1} md={3} className="g-4 my-5 pb-5">
                {
                    myservices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;