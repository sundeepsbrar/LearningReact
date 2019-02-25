import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you wahnt to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Sam" time = "Today at 4:45pm" comment = {faker.lorem.sentence()} image = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Henry" time = "Today at 3:00pm" comment = {faker.lorem.sentence()} image = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Sunny" time = "Yesterday at 7:00pm" comment = {faker.lorem.sentence()} image = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Robert" time = "Yesterday at 10:00am" comment = {faker.lorem.sentence()} image = {faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));