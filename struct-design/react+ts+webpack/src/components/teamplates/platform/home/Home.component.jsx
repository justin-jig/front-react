
import React, { useEffect, useState } from 'react';

/** css import */
import styles from "./Home.component.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


/**component import */

import { BuleBoderButton } from '../../../../components/design/atoms/button/Button.component.jsx';
import { ButtonForm } from '../../../../components/design/molecules/buttonForm/ButtonForm.component.jsx';
import { InputLabel } from '../../../../components/design/molecules/labelForm/LabelForm.component.jsx';


/**module import */
import { Pagination } from '../../../_modules/pagination/Pagination.component.jsx';
import { DetailModal } from '../../../teamplates/common/modal/Modal.component.jsx';




const Home = (props) => {
    
    const {
        onChangeValue
    } = props;
    

    

    return (
        <div className={cx('platform-home-box')}>
         
            <h2 className={cx('title')}>페이지네이션</h2>

            <div className={cx('pagination-1')}>

                <Pagination 
                     listComponents={(contents)=>{ return <PaginationItem initialData={contents}/> || false }}
                     listData={[['test'],['test1'],['test2'],['test3']]}
                     listPerPage = {3}
                />

            </div>

            <h2 className={cx('title')}>모달</h2>

                <ModalEx/>
            
            <h2 className={cx('title')}>molecules ex</h2>

            <div className={cx('ex-1')}>
                    <ButtonForm
                                        onChangeValue={(value)=>{onChangeValue(value)}}
                                        buttonValue={'test'}
                                        inputPlaceholder={'입력해보세요'}
                                        onClickEvent={()=>{alert('test')}}
                        
                        />
            </div>
              
            <div className={cx('ex-2')}>
            
                     <InputLabel    
                                labelValue={'test'}
                                inputPlaceholder={'입력해보세요.'}
                              
                                onChangeValue={(value)=>{onChangeValue(value)}}/>
     
            </div>
            

        </div>
    )

}

/**
 * 
 * @param {*} props 
 * initialData : initialData
 */
const PaginationItem = (props) => {

    const {initialData} = props;


    return( 
            <div className={cx('pagination-item')}>
                {initialData}
            </div>
    )

}

const ModalEx = () =>{

    const [detailModal, setDetailModal] = useState(false); // 모달 true, false 변수

    const ModalView = async (flag) => {

        setDetailModal(flag) // 모달 사용상태 변경
  
    }
    return(
        <div>
                <BuleBoderButton 
                                    buttonValue={'모달 출력'}
                                    onClickEvent={()=>{ModalView(true)}}/>
       
                <DetailModal  show={detailModal} propClose={(flag)=>{ setDetailModal(flag)}}/>
        </div>
    )

}


export default Home