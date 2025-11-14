import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { PiShareFatLight } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { PostList } from "../store/PostListStore";
import { useContext } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="relative post-card bg-white shadow-sm rounded-xl p-4 w-full max-w-sm mx-auto mb-4 border border-gray-200 hover:shadow-lg transition-all duration-200">
      {/* Delete "X" Button */}
      <button onClick={() => deletePost(post.id)} className="DelButton">
        <RxCross2 />
      </button>

      {/* Header */}
      <div className="flex items-center mb-3 mt-1">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.userId}`}
          alt={post.userId}
          className="w-9 h-9 rounded-full mr-2 border border-gray-300"
        />
        <div>
          <h4 className="font-medium text-gray-800 text-sm">{post.userId}</h4>
          <p className="text-[11px] text-gray-500">Just now</p>
        </div>
      </div>

      {/* Title */}
      <h5 className="text-[15px] font-semibold text-gray-900 mb-1">
        {post.title}
      </h5>

      {/* Body */}
      <p className="text-[13px] text-gray-700 mb-3 leading-snug">{post.body}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2 ">
        {(post.tags || post.tag || []).map((t) => (
          <span
            key={t}
            className="bg-blue-100 text-blue-700 text-[12px] px-2 py-[3px] rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Reactions */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-2">
        <div className="LCSbuttons flex items-center gap-3 text-[13px] text-gray-600">
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <SlLike /> Like
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <TfiComment /> Comment
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <PiShareFatLight /> Share
          </button>
        </div>

        <div className="text-[12px] text-gray-500 font-medium flex items-center gap-1">
          {post.reactions.likes} <AiFillLike className="text-blue-500" />
       </div>
      </div>
    </div>
  );
};

export default Post;
