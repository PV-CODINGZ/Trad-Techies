import React, { useState } from "react";
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaHeart, FaComment, FaShare, FaImage, FaVideo, FaFont } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbSocialOff } from "react-icons/tb";
import "../index.css"

const SocialApp = () => {
    const [posts, setPosts] = useState([
        { id: 1, type: "text", content: "Just finished my morning hike! The view was breathtaking. #NatureLover", likes: 10, comments: 5, shares: 2 },
        { id: 2, type: "image", content: "https://via.placeholder.com/500", likes: 15, comments: 3, shares: 4 },
        { id: 3, type: "video", content: "https://www.w3schools.com/html/mov_bbb.mp4", likes: 20, comments: 7, shares: 5 }
    ]);

    const [newPost, setNewPost] = useState("");
    const [postType, setPostType] = useState("text");
    const [media, setMedia] = useState(null);
    const [likedPosts, setLikedPosts] = useState([]);

    const handleMediaUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMedia(URL.createObjectURL(file));
        }
    };

    const addPost = () => {
        if (postType === "text" && newPost.trim() === "") return;
        if ((postType === "image" || postType === "video") && !media) return;

        setPosts([{ id: Date.now(), type: postType, content: postType === "text" ? newPost : media, likes: 0, comments: 0, shares: 0 }, ...posts]);
        setNewPost("");
        setMedia(null);
    };

    const handleLike = (postId) => {
        if (likedPosts.includes(postId)) return;
        

        setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
        setLikedPosts([...likedPosts, postId]);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-1/4 p-6  bg-gradient-to-r from-green-200 to-cyan-200  border-r-2 border-r-blue-400 rounded-lg ">
                <h1 className="text-3xl font-bold"><span className="w-full flex items-center gap-3"><TbSocialOff />SocialApp</span></h1>
                <nav className="mt-6 space-y-4">

                    <p className="flex items-center space-x-2"><FaHome color="#0fa3b1" size="25px" /> <Link to="/SocialMediaPage">Home</Link></p>
                    <p className="flex items-center space-x-2"><FaSearch color="#f7a072" size="25px" /> <Link to="/SocialMediaPage/">Explore</Link></p>
                    <p className="flex items-center space-x-2"><FaBell color="red"  size="25px"/> <Link to="/SocialMediaPage/">Alerts</Link></p>
                    <p className="flex items-center space-x-2"><FaEnvelope color="orange" size="25px"/> <Link to="/SocialMediaPage/">Messages</Link></p>
                    <p className="flex items-center space-x-2"><FaUser color="blue" size="25px"/> <Link to="/profile">Profile</Link></p>
                </nav>
            </div>

            {/* Middle Feed Section */}
            <div className="w-2/4 p-6 overflow-y-auto h-screen">
                {/* Post Input */}
                <div className="border-[1.7px] p-4 rounded-lg mb-4">
                    <div className="flex space-x-4 mb-2">
                        <button className={`p-2 rounded ${postType === "text" ? "bg-[#f7ede2] text-orange-400" : "border"} cursor-pointer`} onClick={() => setPostType("text")}><FaFont /></button>
                        <button className={`p-2 rounded ${postType === "image" ? "bg-[#f7ede2] text-orange-400" : "border"} cursor-pointer`} onClick={() => setPostType("image")}><FaImage /></button>
                        <button className={`p-2 rounded ${postType === "video" ? "bg-[#f7ede2] text-orange-400" : "border"} cursor-pointer`} onClick={() => setPostType("video")}><FaVideo /></button>
                    </div>
                    {postType === "text" && (
                        <textarea
                            className="w-full p-2 border-2 rounded"
                            placeholder="What's happening?"
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                        ></textarea>
                    )}
                    {(postType === "image" || postType === "video") && (
                        <input type="file" accept={postType === "image" ? "image/*" : "video/*"} onChange={handleMediaUpload} className="border p-2 rounded w-full" />
                    )}
                    <button className="bg-[#63ddb5] text-black font-bold cursor-pointer px-4 py-2 rounded w-full mt-2" onClick={addPost}>Post</button>
                </div>

                {/* Posts Feed */}
                {posts.map((post) => (
                    <div key={post.id} className="border-2 border-zinc-400  bg-zinc-200 p-4 rounded-lg mb-4">
                        {post.type === "text" && <p>{post.content}</p>}
                        {post.type === "image" && <img src={post.content} alt="Post" className="w-full rounded-lg" />}
                        {post.type === "video" && <video controls className="w-full rounded-lg"><source src={post.content} type="video/mp4" /></video>}
                        <div className="flex justify-around mt-2 ">
                            <p className="flex items-center space-x-1 cursor-pointer text-zinc-600" onClick={() => handleLike(post.id)}><FaHeart /> <Link>{post.likes}</Link></p>
                            <p className="flex items-center space-x-1"><FaComment /> <Link>{post.comments}</Link></p>
                            <p className="flex items-center space-x-1"><FaShare /> <Link>{post.shares}</Link></p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 p-6 border-[1.5px]  rounded-lg shadow-lg shadow-cyan-600 bg-gradient-to-r from-blue-200 to-pink-200">
                <h2 className="text-lg font-bold">Trending Topics</h2>
                <ul className="mt-4 space-y-2">
                    <li>#AIRevolution</li>
                    <li>#WorldCupFinal</li>
                    <li>#MovieAwards2023</li>
                </ul>

                <h2 className="text-lg font-bold mt-6">Who to Follow</h2>
                <ul className="mt-4 space-y-2">
                    <li>Emma Thompson <button className="ml-2 bg-gray-200 p-1 rounded">Follow</button></li>
                    <li>David Chen <button className="ml-2 bg-gray-200 p-1 rounded">Follow</button></li>
                    <li>Tech News Daily <button className="ml-2 bg-gray-200 p-1 rounded">Follow</button></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialApp;
