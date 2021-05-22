import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SportsSection, TopStoriesSection } from './styles';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import { fetchSectionNews, fetchTopNews } from 'state/article/thunks';

const Home = () => {
  const dispatch = useDispatch();
  const {
    topNewsLoading,
    topNews,
    sectionNewsLoading,
    sectionNews,
  } = useSelector((state) => state.article);
  const { sortOrder } = useContext(AppContext);

  useEffect(() => {
    search();
  }, []);

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    search();
  }, [sortOrder]);

  const search = () => {
    dispatch(fetchTopNews(sortOrder));
    dispatch(fetchSectionNews(sortOrder));
  };

  return (
    <div className="page-content">
      <SubHeader title="Top Stories" />
      <section>
        <TopStoriesSection loading={topNewsLoading ? 1 : 0}>
          {
            topNewsLoading ? <Loader />
              : (
                <>
                  <div className="column left">
                    <Article article={topNews?.[0]} />
                  </div>
                  <div className="column right">
                    <div className="column">
                      <Article article={topNews?.[1]} />
                    </div>
                    <div className="column">
                      <Article article={topNews?.[2]} />
                    </div>
                    <div className="column">
                      <Article article={topNews?.[3]} />
                    </div>
                    <div className="column">
                      <Article article={topNews?.[4]} />
                    </div>
                  </div>
                </>
              )
            }
        </TopStoriesSection>
        <SportsSection loading={sectionNewsLoading ? 1 : 0}>
          {
            sectionNewsLoading ? <Loader /> : Object.entries(sectionNews).map(([title, entry]) => (
              <div key={title}>
                <h2>{entry.section.webTitle}</h2>
                <div className="section">
                  {
                    entry.results.map((article) => (
                      <div key={article.id} className="article-container">
                        <Article article={article} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </SportsSection>
      </section>
    </div>
  );
};

export default Home;
