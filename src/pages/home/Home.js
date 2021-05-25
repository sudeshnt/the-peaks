import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SectionNewsContainer, TopStoriesContainer } from './styled';
import AppContext from 'AppContext';
import Article from 'components/article/Article';
import Loader from 'components/common/loader/Loader';
import SubHeader from 'components/common/sub-header/SubHeader';
import { ArticleTypes } from 'config/shared';
import { fetchSectionNews, fetchTopNews } from 'state/news/thunks';

const Home = () => {
  const dispatch = useDispatch();
  const {
    topNewsLoading,
    topNews,
    sectionNewsLoading,
    sectionNews,
  } = useSelector((state) => state.news);
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
        <TopStoriesContainer loading={topNewsLoading ? 1 : 0}>
          {
            topNewsLoading ? <Loader />
              : (
                <>
                  <div className="column left">
                    <Article
                      type={ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION}
                      article={topNews?.[0]}
                      index={0}
                    />
                  </div>
                  <div className="column right">
                    <div className="top">
                      <div className="column">
                        <Article
                          type={ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION}
                          article={topNews?.[1]}
                          index={0}
                        />
                      </div>
                      <div className="column">
                        <Article
                          type={ArticleTypes.WITH_TITLE_THUMBNAIL_AND_DESCRIPTION}
                          article={topNews?.[2]}
                          index={1}
                        />
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="column">
                        <Article type={ArticleTypes.WITH_TITLE} article={topNews?.[3]} index={2} />
                      </div>
                      <div className="column">
                        <Article type={ArticleTypes.WITH_TITLE} article={topNews?.[4]} index={3} />
                      </div>
                    </div>
                  </div>
                </>
              )
            }
        </TopStoriesContainer>
        <SectionNewsContainer loading={sectionNewsLoading ? 1 : 0}>
          {
            sectionNewsLoading ? <Loader /> : Object.entries(sectionNews).map(([title, entry]) => (
              <div key={title}>
                <h2>{entry.section.webTitle}</h2>
                <div className="section">
                  {
                    entry.results.map((article, index) => (
                      <div key={article.id} className="article-container">
                        <Article article={article} index={index} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </SectionNewsContainer>
      </section>
    </div>
  );
};

export default Home;
