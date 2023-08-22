import GlobalStyle from "../assets/styles/global-styles";
import styled from "styled-components";
import Header from "../components/Header"
import Main from "../components/Main";

const StyledWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function App() {

  return (
    <>
      <GlobalStyle/>
      <StyledWrapper>
        <Header/>
        <Main/>
      </StyledWrapper>
    </>
  
  )
}

export default App
