import React from 'react'
import blogImage from '../../assets/vector/blogopenaccount.png'
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const BlogSidebar = ({blogs}) => {
    
    return (
        <>

            <div className='col-lg-3 article-second-col'>
                <h4>Open Your Account Now</h4>
                <br /><hr></hr><br />
                <div className='article-form mt-3'>
                    <div className='article-image'>
                        <img src={blogImage} />
                        {/* <h2>Open Your Account Now</h2>*/}

                    </div>
                    <div className='article-inputs'>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='number' placeholder='Phone' />
                        <input type='text' placeholder='City' />
                        <button>Open Account</button>
                    </div>
                </div>
                <h4 className='pt-5'>Current Blogs</h4>
                <br /><hr></hr><br />
                <div className='current-blog-list'>
                    <ul>
                        {/* <li><FaArrowAltCircleRight className='me-2' />The Unveiling of China's Economic Slowdown: A Closer Look at the Real Estate Market Crash</li>
                        <li><FaArrowAltCircleRight className='me-2' />The Unveiling of China's Economic Slowdown: A Closer Look at the Real Estate Market Crash</li>
                        <li><FaArrowAltCircleRight className='me-2' />The Unveiling of China's Economic Slowdown: A Closer Look at the Real Estate Market Crash</li> */}
                        {blogs.slice(0,4).map(blog=>(
                            <li><FaArrowAltCircleRight className='me-2' /><NavLink to={`/blog/${blog.id}`}>{blog.blogHeading}</NavLink></li>
                            
                            
                        ))}

                    </ul>
                </div>

            </div>

        </>
    )
}

export default BlogSidebar