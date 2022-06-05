import { Col,Row } from 'reactstrap';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';
import {useSelector} from 'react-redux'
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {    
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    const isLoading = useSelector((state)=> state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);


    if(isLoading){
        return (
            <Row>
                <Loading />
            </Row>
        );
    }
    if(errMsg){
        return(
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        )
    }

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId ={campsiteId }/>
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;