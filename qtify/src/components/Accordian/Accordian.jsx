import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import expandAccordian from "../../assets/expand-accordian.png"
import axios from 'axios';
import styles from './Accordian.module.css';

const Accordian = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAccordianData = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/faq");
            setFaqs(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAccordianData();
    }, []);

    return (
        <div className={styles.accordionContainer}>
            <h1 className={styles.faqsHeading}>FAQs</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                faqs.map((faq, i) => (
                    <Accordion className={styles.accordian} key={i} defaultExpanded={false}>
                        <AccordionSummary
                            className={styles.accordianSummary}
                            expandIcon={<img className={styles.accordianToggleIcon} src={expandAccordian} alt="expand icon" />} // Use an img element
                            aria-controls={`panel${i + 1}-content`}
                            id={`panel${i + 1}-header`}
                        >
                            {faq.question}
                        </AccordionSummary>
                        <AccordionDetails className={styles.accordionDetail}>
                            {faq.answer}
                        </AccordionDetails>
                    </Accordion>
                ))
            )}
        </div>
    );
};

export default Accordian;
