import React from "react";
import "./Blog.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogSidebar from "./components/BlogSidebar";
import BlogContent from "./components/BlogContent";

function Blog() {
  return (
    <div>
      <Header />
      <div className="wrapper-blog">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-3 blog-side-bar">
              <BlogSidebar />
            </div>
            <div className="col-md-8">
              <BlogContent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
