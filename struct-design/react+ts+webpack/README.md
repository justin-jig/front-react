

#### 설계안 1 
##### 작성일 : 2024.06

##### 환경
react.js, webpack, typescript

##### flow 
App.js => Router => pages ( js ) => middleware => commponets

##### 아토믹 디자인 기준

static{ image, font, utill, svg }
dataFlow{ httpContainers(axiosService,models ),redux } 
components
page    ( router, state )
template ( ts, jsx, scss )
modules ( js, jsx )
design ( _layout, atom , molecules , organisms )

App.js
App.scss
index.css
index.js
.balbelrc


