import React from 'react';
import Styles from './Article.module.css';

function Article({ article }) {
  return (
    <div className={Styles.article}>
      <header id={Styles.articleHeader}>
        <h2>
          <a href={article.url} target='_blank' rel='noopener noreferrer'>
            {article.title}
          </a>
        </h2>
        <h5>{article.byline}</h5>
      </header>
      <p>{article.abstract}</p>
    </div>
  );
}

export default Article;
