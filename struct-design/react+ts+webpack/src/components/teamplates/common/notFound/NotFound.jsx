import React from "react";

/**css import */

import classNames from 'classnames/bind';
import styles from './NotFound.scss';
const cx = classNames.bind(styles);

/** module import */
import { useHistory } from 'react-router-dom';


// 에러페이지
const NotFound = () => {
  const _history = useHistory();
  // 홈으로
  const goHome = () => {
    _history.push('/');
    location.reload();
  }
  // 이전으로
  const goBack = () => {
    history.back();
  }

  return (

        <div className={cx('not-found-box')}>
                  
                      <div className={cx('text-section')}>
                          <div className={cx('title')}>
                              <p>일시적으로 이용에<br/> 불편을 드려 죄송합니다.</p>  
                          </div>
                          <div className={cx('comment')}>
                              <p>잠시 후 다시 이용 부탁드립니다.</p>
                              <p>감사합니다.</p>
                          </div>
                      </div>
                      <div className={cx('button-section')}>
                          
                          <button onClick={goHome}>홈으로</button>
                          <button onClick={goBack}>이전으로</button>
                      </div>
        </div>

  )
};

export default NotFound;