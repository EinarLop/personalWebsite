import React, { useState } from 'react';
import "./CertificationCard.css"

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components'
import htlm from "./CertificationFiles/html.pdf"


const Wrapper = styled.div`
     width: 100px;
    display: flex;
    
`







function CertificationCard(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);

  }



  return (


    <Document

      file={htlm}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page className="test" pageNumber={pageNumber} />
    </Document>



  );



}

export default CertificationCard;