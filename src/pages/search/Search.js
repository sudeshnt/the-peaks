import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from "query-string"
import SubHeader from '../../components/common/sub-header/SubHeader';

const Search = () => {
  const location = useLocation();

  useEffect(_ => {
    const { q } = queryString.parse(location.search);
    searchNews(q)
  }, [ location.search ])

  const searchNews = query => {
    
  }

  return (
    <div className="page-content">
      <SubHeader title={'Search Results'}/>
      <section>
        Search
      </section>
    </div>
  )
}

export default Search;