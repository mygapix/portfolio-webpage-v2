import React from "react"
//import { Link } from "gatsby"
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: purple;
`;

const IndexPage = () => (
  <StyledWrapper>
    <h1> hello George</h1>
  </StyledWrapper>
)

export default IndexPage
