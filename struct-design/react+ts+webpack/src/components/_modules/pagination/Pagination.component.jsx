import React,{Fragment, useEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
/**css import */
import styles from "./Pagination.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


/** 
    설명서 : 
    props 기준으로 넘어온 datas
    @param {string} listComponents components
    @param {string} listData  data
    @param {number} listPerPage  perpage 셋팅
*/
export const Pagination = (props) => {

        const {
            listComponents,
            listData,
            listPerPage 
        } = props;


        if (!listData || !listComponents) {
            return <div></div>; 
        }

        const initialPaginationConfig= { offset: 0, elements: [], perPage: listPerPage ? listPerPage : 10, currentPage: 0,};
        const [paginationConfig, setPaginationConfig] = useState(initialPaginationConfig);
        const [data, setData] = useState([[]]);

        useEffect(() => {
            setData([...listData])
        }, [listData])
        
        useEffect(() => {
            setElementForCurrentPage();
        }, [data]);
        
        useEffect(() => {
            setElementForCurrentPage();
        }, [paginationConfig.currentPage]);

        const setElementForCurrentPage = () => {
            let elements
            if (!data || data.length <= 0) {
                elements = (    <div className={cx('none-data')}>
                                    데이터가 없습니다.
                                </div>  )
            }
            else {
                elements = data.slice(paginationConfig.offset, paginationConfig.offset + paginationConfig.perPage).map((content, idx) => {
                    return (
                        <Fragment key={idx}>
                                {listComponents(content)}
                        </Fragment>
                    )
                });
            }
            
            setPaginationConfig((prevState) => ({
                ...prevState,
                elements: elements,
                pageCount: Math.ceil(data.length / paginationConfig.perPage)
            }));
        }
        
        const paginationNav = () => (
            paginationConfig.pageCount && paginationConfig.pageCount !=1 ?
                <ReactPaginate
                    previousLabel={`<`}
                    nextLabel={`>`}
                    breakLabel={<span className="gap">...</span>}
                    pageCount={paginationConfig.pageCount}
                    onPageChange={handlePageClick}
                    forcePage={paginationConfig.currentPage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previous_page"}
                    nextLinkClassName={"next_page"}
                    disabledClassName={"disabled"}
                    activeClassName={"active"}
                />
                :
                <div></div>
        );
        
        const handlePageClick = (data) => {
            const selectedPage = data.selected;
            const offset = selectedPage * paginationConfig.perPage;
            setPaginationConfig((prevState) => ({
                ...prevState,
                currentPage: selectedPage,
                offset: offset
            }))
            window.scrollTo(0, 0);
        }

        const handleInitial = (kind) => {
               //페이지네이션 현상 유지
                    let paginationSetting = paginationConfig;
                    if(kind === 'frist'){
                        paginationSetting.currentPage = 0;
                        paginationSetting.offset =  0 * paginationSetting.perPage
                    }
                    else if (kind === 'last'){
                        paginationSetting.currentPage = paginationSetting.pageCount - 1 ;
                        paginationSetting.offset =  paginationSetting.currentPage * paginationSetting.perPage
                    }
               
                    setPaginationConfig(paginationSetting);
                    setElementForCurrentPage();
                    window.scrollTo(0, 0);
                
        }
 
        return (

            <div className={cx('pagination-box')}>
                <div className={cx('pagination-element-section')}>
                    {paginationConfig.elements}
                </div>
                <div className={cx('pagination-btn')}>
                    <span className={cx('first-btn',  paginationConfig.pageCount && paginationConfig.pageCount != 1 ? '' : 'none' )} 
                          onClick={()=>{handleInitial('frist')}}>   
                        {'<<'}
                    </span>
                    
                    {paginationNav()}
                    
                    <span className={cx('last-btn', paginationConfig.pageCount && paginationConfig.pageCount != 1 ? '' : 'none' )} 
                          onClick={()=>{handleInitial('last')}}>
                        {'>>'}
                    </span>


                </div>
            </div>
        )
}

