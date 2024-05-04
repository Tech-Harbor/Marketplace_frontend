// import HomeSlider from '../../components/Slide/Slide';
// import SideBar from '../../components/SideBar/SideBar.jsx';
import styled from 'styled-components';

// const ContentBlock = styled.div`
//   width: 100%;
//   // it's temporary height before we haven't any content on the page
//   height: calc(100vh - 72px - 69px - 60px - 30px);
// `;

const Container = styled.div`
  display: flex;
  height: 100px;
  background-color: #8b8b8b;
`;

const HomePage = () => {
  return (
    <Container>
      Home Page
      {/*/!* Sidebar is based on the left side on the page *!/*/}
      {/*<SideBar />*/}
      {/*/!* Inside content block will be all other content on the right side of page *!/*/}
      {/*<ContentBlock>*/}
      {/*  <HomeSlider />*/}
      {/*</ContentBlock>*/}
    </Container>
  );
};

export default HomePage;
