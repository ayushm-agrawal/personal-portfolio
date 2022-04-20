import React from "react";
import AyushColor from "../../resources/ayush-color.jpeg";
import "../../styles/blog/BlogsListItem.css";

function BlogsListItem() {
    return (
        <div className='blog-item'>
            <div className='item-header'>
                <div className='author-image'>
                    <img src={AyushColor} alt="Author"/>
                </div>
                <div className='author'>
                    <p className='name'>Ayush Manish Agrawal
                        <span>·</span>
                    </p>
                    <p className='date'>April 21</p>
                </div>
            </div>
            <div className="item-content">
                <div className='text'>
                    <h2>It’s 2022, Don’t Use the console.log() Anymore</h2>
                    <p>A quick tip to save your time and make your code look cleaner. — We as JavaScript developers usually use console.log() to test the output or just for fun. Even I can bet that our (including mine) first code was “Hello world” ...</p>
                </div>
                <div className='thumbnail'>
                    <img src="https://miro.medium.com/max/1400/1*VMaSWY8t2DPVwW5TrFvNpQ.png"/>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default BlogsListItem;