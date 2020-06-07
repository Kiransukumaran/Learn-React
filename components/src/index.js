import React from 'react'
import ReactDOM from 'react-dom' 
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this ?
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h2>Comments</h2>
                    <hr />
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="10:20PM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="11:20PM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="12:20PM"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);