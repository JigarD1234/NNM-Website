import React from 'react'
import { useParams } from 'react-router-dom'
import './Blog.css'
import BlogHeader from './BlogHeader'
import BlogSidebar from './BlogSidebar'


const BlogDetails = ({ blogs }) => {
  console.log(useParams())
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id))
  if (!blog) {
    return <div>Blog Not Found</div>
  }


  return (
    <>


      <BlogHeader />
      <div className='blogDetails'>
        <div className='container'>
          
          <div className='row'>
            <div className='col-lg-9'>
            <h4 className='pt-0'>Blog Details</h4>
                <br /><hr style={{width:'95%'}}></hr><br />
             <div className='blogDetails-image'>
             <img src={blog.imageSrc}/>
             <div className='blogDetails-details'>
              <span>{blog.date}</span>
              <h2>{blog.blogHeading}</h2>
              <p>{blog.blogParagraph}</p>
             </div>
             </div>

            </div>
            <BlogSidebar blogs = {blogs} />
          </div>
        </div>
      </div>

    </>


  )
}

export default BlogDetails