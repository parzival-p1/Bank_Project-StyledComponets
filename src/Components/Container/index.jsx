import React from "react";
import styled from "styled-components"
import Title from "../Title";
import Account from "../Account";

//* variable container
const StyledContainer = styled.div`
    background-color: #f1f1f1;
    min-height: 90vh;
    padding: 0px 15vw;
`
const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  //* Definición de Media Querie
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
