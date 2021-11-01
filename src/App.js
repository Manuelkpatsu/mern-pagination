import { useState, useEffect } from "react"
import Post from './components/Post'
import Pagination from "./components/Pagination"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"

const App = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/v1/posts?page=${page}`);

        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch(error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
    }

    fetchPosts()
  }, [page])

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="bg-gray-200 p-10">
          <Pagination page={page} pages={pages} changePage={setPage} />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </div>
      )}
    </div>
  );
}

export default App;
