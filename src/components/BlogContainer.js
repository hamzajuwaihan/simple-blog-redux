import React, { useId } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addBlog } from '../redux/blogs/blogActions'


function BlogContainer(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [img, setImg] = React.useState('');
    let id = useId();
    const handleSubmit = (e) => {
        e.preventDefault();

        props.addBlog({ title, content, img, id });
        setTitle('');
        setContent('');
        setImg('');
        id = 0;
        setModalShow(false);

    }

    return (
        <div>
            <Modal
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Blog
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" rows="3" value={content}
                                onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Image</label>
                            <input type="text" className="form-control" id="img" value={img}
                                onChange={(e) => setImg(e.target.value)} />
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} type="submit">Submit</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <h1 className='text-center mt-5'>Blogs</h1>
            <div className='container'>
                <div className='row justify-content-end'>
                    {/* <button >Add Blog</button> */}
                    <Button className='btn btn-success col-2 ' variant="primary" onClick={() => setModalShow(true)}>
                        Add Blog
                    </Button>

                </div>
            </div>
            <div className='container row mt-5'>
                {
                    props.blogs.length > 0 ? props.blogs.map((blog) => {
                        return (
                            <div key={blog.id} className='col-4'>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.content}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        blogs: state.blogs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addBlog: (blog) => dispatch(addBlog(blog))
    }
}
// connect(mapStateToProps, mapDispatchToProps)(MyVerticallyCenteredModal)
export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)