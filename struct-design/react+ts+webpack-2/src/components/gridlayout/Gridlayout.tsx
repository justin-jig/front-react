import React, { FC, Fragment, useState, Suspense  } from "react";
import './Gridlayout.scss'

/** import modules */
import {WidthProvider, Responsive, Layout} from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive)

/**
 * reference https://github.com/react-grid-layout/react-grid-layout?tab=readme-ov-file#responsive-usage
 * layout {i:component key,  }
 * 실제 높이 값 = (rowHeight * h) + (marginH * (h - 1))
 * cols { 
 *         xxs: Extra extra small, < 480px
 *          xs: Extra small, < 576px
 *          sm: Small,   ≥ 576px
 *          md: Medium,  ≥ 768px
 *          lg: Large,   ≥ 992px
 *          xl: Extra large,  ≥ 1200px
 *          xxl:Extra extra large ≥ 1400px
 * }
 *  
 */
const Gridlayout:FC = () => {

    const [modifiedMode, setModifiedMode] = useState<boolean>(false); // 수정 모드 flag
    const [layout, setLayout] = useState<Layout[]>([
        { i: "a", x: 0, y: 0, w: 3, h: 5,  },
        { i: "b", x: 3, y: 0, w: 3, h: 5, },
        { i: "c", x: 6, y: 0, w: 3, h: 5 },
        { i: "d", x: 9, y: 0, w: 3, h: 5 },
    ]); // 수정 모드 flag
    const testUrl = [
        { iframeUrl : "https://grafana.kpms.itclab.co.kr/d/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s&panelId=15" }
    ]

    return (
        <>
            <div className="Gridlayout_box-modifiedDelete">

                {modifiedMode === false ? 
                    <button className="modifiled" onClick={() => setModifiedMode((prev) => !prev)}>수정</button>
                    :
                    <button className="modifiled" onClick={() => setModifiedMode((prev) => !prev)}>확인</button>
                }

                {modifiedMode && <button className="delete">삭제</button>}
                {modifiedMode && <button className="delete">삭제</button>}
                
            </div>

            <ResponsiveReactGridLayout
                className="Gridlayout_box"
                layouts={{lg:layout}} 
                cols={{xxs:1, xs:1, sm:1, md:12, lg:12, }}
                rowHeight={50}
                margin={{xxs:[10,10]}}
                draggableHandle={modifiedMode ? "" : "Gridlayout_box"}
            >   
                {layout.map((data:Layout, idx:number) => {
                    console.log('여기')
                    return (
                       
                             <div className="item" key={data && data.i}>
                                <div className="item_title">
                                    <h5>{data && data.i}</h5>
                                    <span>{data && data.i} 테스트입니다.</span>    
                                </div>
                                <Suspense fallback={<div>loading..</div>}>
                                 <iframe src="https://grafana.kpms.itclab.co.kr/d-solo/vkQ0UHxik/coredns?orgId=1&refresh=10s&from=1721770523008&to=1721781323009&panelId=2" frameBorder="0"></iframe>
                                </Suspense>
                            </div>
                       
                           
                    )
                })}

            </ResponsiveReactGridLayout>
        </>
    )
}

const GridItems:FC<any> = React.memo(({data}) => {

    return (
        <div className="item" key={data && data.i}>
            {data && data.i}
        </div>
    )
})


export default Gridlayout