import styled from 'styled-components';
import Article from '../../components/article/Article';
import SubHeader from '../../components/common/sub-header/SubHeader';

const Home = () => {

  return (
    <Styled.Container>
      <SubHeader />
      <Article />
    </Styled.Container>
  )
}

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `
}

export default Home;