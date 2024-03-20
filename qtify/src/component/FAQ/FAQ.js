import React from 'react';
//styles
import styles from "./FAQ.module.css";
//mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {

    // functions
    const displayAccordian = (head, summary)=>{
        return <Accordion className={styles.muiAccordian}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon className={styles.muiExpandIcon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={styles.accordionSummary}
                >
                <Typography>{head}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {summary}
                </Typography>
                </AccordionDetails>
            </Accordion>
    }
    return (
        <div className={styles.FAQ}>
            <h2>FAQs</h2>
            <div className={styles.accordianContainer}>
                {displayAccordian("Is QTify free to use?", "Yes! It is 100% free, and has 0% ads!")}
                {displayAccordian("Can I download and listen to songs offline?", "Sorry, unfortunately we don't provide the service to download any songs.")}
            </div>
        </div>
    );
};

export default FAQ;