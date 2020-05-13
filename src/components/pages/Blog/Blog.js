import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Pagination, message, Alert } from 'antd';
import { useEffect } from 'react';
import { getLengthPost, getPosts } from '../../../services';
import { SkeletonList } from '../../common/SkeletonList/SkeletonList';
import { Article } from '../../Article/Article';
import './Blog.css'
export const BlogPage = ({location}) => {

	const [ pagination, setPagination ] = useState({
		current: 1,
		pageSize: 5,
		total: 0
	});
	const [ posts, setPosts ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
    const {search} = location;
    let page = pagination.current
    if(search) {
      const query = new URLSearchParams(search);
      page = +query.get('page')
    }
		(async () => {
			try {
				const length = await getLengthPost();
				const limit = pagination.pageSize;
        const currentPosts = await getPosts({ limit, page: page - 1 });
        setPosts({ ...posts, [page]: currentPosts });
				setPagination({ ...pagination, total: length, current: page });
			} catch (error) {
				message.error(error.message);
			}
			setLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onChangeCurrentPage = async (page, pageSize) => {
		setPagination({ ...pagination, current: page });
		if (posts[page]) return;
		try {
			setLoading(true);
			const currentPosts = await getPosts({ pageSize, page: page - 1 });
			setPosts({ ...posts, [page]: currentPosts });
		} catch (error) {
			message.error(error.message);
		}
		setLoading(false);
	};

	return (
		<div className="blog-page container">
			{loading ? (
				<SkeletonList num={pagination.pageSize} />
			) : (
				<div className="post-list">
					{posts !== null && posts[pagination.current] && posts[pagination.current].length > 0 ? (
						posts[pagination.current].map((post) => (
							<Article maxHeight="300px" type="short" key={post._id} post={post} />
						))
					) : (
						<Alert message="Post not found" />
					)}
				</div>
			)}
			<Pagination
				pageSize={pagination.pageSize}
				current={pagination.current}
				total={pagination.total}
				disabled={pagination.total === 0 ? true : false}
				onChange={onChangeCurrentPage}
				hideOnSinglePage
				itemRender={(page, type, Origin) => (
					<div className="pagination-item">
						{Origin}
						<Link className="link" to={`/blogs?page=${page}`} />
					</div>
				)}
			/>
		</div>
	);
};
