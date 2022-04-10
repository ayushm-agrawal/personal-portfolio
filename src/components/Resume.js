import React, { useState } from "react";
import { Document, Page } from 'react-pdf';
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AyushManishAgrResume from '../resources/Ayush_Manish_Agrawal_22.pdf'
import "../styles/Resume.css";
import {handleResumeDownload} from "../helpers/Events";

export default function Resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);

        const downloadButtonDiv = document.getElementsByClassName('resume-download')[0];
        downloadButtonDiv.style.visibility = 'visible';
    }

    return (
        <div className="resume">
            <div className='resume-download' style={{visibility: 'hidden'}} onClick={handleResumeDownload}>
                <FontAwesomeIcon className="resume-download-fa" icon={faDownload} size='1x' inverse/>
                <p>Download PDF</p>
            </div>
            <div className='resume-display'>
                <Document
                    file={AyushManishAgrResume}
                    options={{ workerSrc: "pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError = {console.error}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page size="A4" key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>

        </div>
    )
}