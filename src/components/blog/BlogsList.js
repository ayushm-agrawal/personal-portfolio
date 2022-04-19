import React from "react";
import BlogsListItem from "./BlogsListItem";

function BlogsList()  {

    const n = 8;
    return (
        <div>
            {[...Array(n)]
                .map((_, i) => (
                    <div key={i}>
                        <BlogsListItem/>
                    </div>
                ))

            }
        </div>

    )
}

export default BlogsList;