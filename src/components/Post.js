import moment from 'moment'

const Post = ({ post }) => {
    return (
        <div className="w-full bg-white shadow-sm rounded-lg p-4">
            <div className="text-gray-900 font-bold text-xl mb-2">{post.title}</div>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{post.author}</p>
                <p className="text-gray-600">{moment(post.createdAt).format('YYYY-MM-DD HH:mm')}</p>
            </div>
            <p className="text-gray-700 text-base">{post.body}</p>
        </div>
    )
}

export default Post
