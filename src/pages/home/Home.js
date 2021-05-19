import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../../components/article/Article';
import Loader from '../../components/common/loader/Loader';
import SubHeader from '../../components/common/sub-header/SubHeader';
import { fetchTopNews, fetchSportsNews } from '../../state/article/thunks';
import { TopStoriesSection, SportsSection } from './styles';

const Home = () => {
  const dispatch = useDispatch()
  const {
    topNewsLoading,
    topNews,
    sportsNewsLoading,
    sportsNews
  } = useSelector(state => state.article)

  useEffect(() => {
    dispatch(fetchTopNews())
    dispatch(fetchSportsNews())
  }, [dispatch])

  return (
    <div className="page-content">
      <SubHeader title={'Top Stories'}/>
      <section>
        <TopStoriesSection loading={topNewsLoading ? 1 : 0}>
          {
            topNewsLoading ? <Loader /> : 
              <>
                <div className="column left">
                  <Article />
                </div>
                <div className="column right">
                  <div className="column">
                    <Article />
                  </div>
                  <div className="column">
                    <Article />
                  </div>
                </div>
              </>
            }
        </TopStoriesSection>
        <h2>Sports</h2>
        <SportsSection loading={sportsNewsLoading ? 1 : 0}>
          {
            sportsNewsLoading ? <Loader/> : <></>
          }
        </SportsSection>
      </section>
    </div>
  )
}

export default Home;