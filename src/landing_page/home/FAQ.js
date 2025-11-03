import React from 'react';
import { useState } from 'react';


const AccordionItem = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`faq ${isOpen ? "active" : ""}`}>
            <button className='accordion' onClick={toggleAccordion}>
                {title}
                
            </button>
            <div className='pannel'  style={{ display: isOpen ? "block" : "none" }}>
                <p>{content}</p>
            </div>
        </div>
    );
};
 
function FAQ() {
    return ( 
        <div className='wrapper'>
            <p>“Connecting People with Modern Farming”<br></br>
            Whether you’re new to agriculture or need expert help, we’re here to guide you.</p>
            <h2 className='heading02'>Frequently Asked Question</h2>

            <AccordionItem
                title="Q1. I don’t have any background in farming. Can I still start?"
                content="Absolutely! Our platform provides guides, mentorship, and training resources
                        to help anyone start their agricultural journey — no prior experience needed."
            />

            <AccordionItem
                title=" Q2. What kind of support do you offer for beginners?"
                content=" We connect you with experienced farmers, agricultural experts, and workshops that
                        teach basics like soil preparation, crop selection, irrigation, and machinery use."
            />
            <AccordionItem
                title="Q3. I’m a retired professional. Can I manage a small farm easily?"
                content="We connect you with experienced farmers, agricultural experts, and workshops that
                        teach basics like soil preparation, crop selection, irrigation, and machinery use."
            />
            <AccordionItem
                title=" Q4. What if I don’t understand how to use farming vehicles or equipment?"
                content="No problem! We can link you with local helpers, training programs,
                        and video tutorials that explain everything from tractor use to irrigation systems"
            />
            <AccordionItem
                title="Q5. Is this platform only for new learners?"
                content="Not at all — even experienced farmers can benefit by learning about new technologies, smart tools, and government schemes."
            />
            <AccordionItem
                title="Q6. How can I connect with experts or other farmers?"
                content="Once you sign up, you’ll be able to join our community where you can chat with experts, ask questions, and even find nearby support.
                    "
            />

        </div>
     );
 }
 
 export default FAQ;