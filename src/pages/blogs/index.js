import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaComment, FaPenNib, FaTrash } from 'react-icons/fa';
import './index.css';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});


  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
    tags: ''
  });

  const [commentInput, setCommentInput] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('blogPosts');
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCommentChange = (e, postId) => {
    setCommentInput(prev => ({ ...prev, [postId]: e.target.value }));
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      author: formData.name,
      date: new Date().toLocaleDateString(),
      title: formData.title,
      content: formData.content,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      likes: 0,
      comments: []
    };
    setPosts([newPost, ...posts]);
    setFormData({ name: '', title: '', content: '', tags: '' });
    setShowForm(false);
  };

  const handleDelete = (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };
  const handleLike = (postId) => {


    if (likedPosts[postId]) return; // prevent multiple likes

    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));

    setLikedPosts(prev => ({ ...prev, [postId]: true }));

  };

  const handleAddComment = (postId) => {
    const comment = commentInput[postId]?.trim();
    if (!comment) return;

    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    ));
    setCommentInput(prev => ({ ...prev, [postId]: '' }));
  };

  const handleDeleteComment = (postId, commentIndex) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: post.comments.filter((_, idx) => idx !== commentIndex) }
        : post
    ));
  };

  const toggleComments = (postId) => {
    setExpandedPostId(prev => prev === postId ? null : postId);
  };

  return (
    <div className="blog-section">
      <h2 className="blog-title">Blog & Thoughts</h2>
      <p className="blog-subtitle">Share your thoughts, insights, and experiences.</p>

      {!showForm && (
        <div className="post-box">
          <h3><FaPenNib /> Share Something</h3>
          <button className="post-button" onClick={() => setShowForm(true)}>
            <FaPenNib /> Write a New Post
          </button>
        </div>
      )}

      {showForm && (
        <div className="post-form">
          <h3><FaPenNib /> Write Your Thoughts</h3>
          <div className="form-row">
            <input name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} />
            <input name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleInputChange} />
          </div>
          <input name="title" placeholder="Post title" value={formData.title} onChange={handleInputChange} />
          <textarea name="content" placeholder="Share your thoughts..." value={formData.content} onChange={handleInputChange}></textarea>
          <div className="form-buttons">
            <button onClick={handleSubmit}>Publish Post</button>
            <button className="cancel" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="post">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <FaUser className="avatar" />
              <span className="author">{post.author}</span>
              <span className="dot">•</span>
              <span className="date">{post.date}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="post-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="post-footer">
              <span
                className={`like-button ${likedPosts[post.id] ? 'liked' : ''}`}
                onClick={() => handleLike(post.id)}>
                <FaHeart /> {post.likes}
              </span>
              <span onClick={() => toggleComments(post.id)} style={{ cursor: 'pointer' }}><FaComment /> {post.comments.length}</span>
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>
                <FaTrash />
              </button>
            </div>

            {expandedPostId === post.id && (
              <div className="comments-section">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInput[post.id] || ''}
                  onChange={(e) => handleCommentChange(e, post.id)}
                />
                <button onClick={() => handleAddComment(post.id)}>Comment</button>
                <ul className="comments-list">
                  {post.comments.map((comment, idx) => (
                    <li key={idx}>
                      💬 {comment}
                      <FaTrash
                        onClick={() => handleDeleteComment(post.id, idx)}
                        style={{ marginLeft: '10px', cursor: 'pointer', color: '#e74c3c' }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
