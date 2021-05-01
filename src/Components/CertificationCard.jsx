import React, { useState } from 'react';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components'
import htlm from "./CertificationFiles/html.pdf"


const Wrapper = styled.div`
     width: 100%;
`

const Certification = styled.iframe`
 position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  max-width: 500px;
  max-height: 390px;
  overflow:hidden;
`




function CertificationCard(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Wrapper>
      <Document
        file={htlm}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </Wrapper>
  );



}

export default CertificationCard;