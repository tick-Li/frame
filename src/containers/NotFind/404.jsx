import React from 'react';
import './404.less';
export default class page extends React.Component{
    render(){
        return (
            <div className="full-height bg-white">
                <div className="box not-found">
                    <div className="coment fl">
                        <h1>404</h1>
                        <div className="sorry">抱歉，你访问的页面不存在</div>
                    </div>
                </div>
            </div>
        )
    }
}