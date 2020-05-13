import React from 'react';
import './Home.css';
import AuthorAvatar from '../../../assets/images/avatar.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../../services';
import { message, Alert } from 'antd';
import { Article } from '../../Article/Article';
import { SkeletonList } from '../../common/SkeletonList/SkeletonList';
export const HomePage = ({ numPost = 4 }) => {
	const [ newPosts, setNewPosts ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	useEffect(() => {
		setLoading(true);
		getPosts({ limit: numPost, page: 0 })
			.then((posts) => {
				setNewPosts(posts);
			})
			.catch((error) => message.error(error.message || 'get post failed'))
			.finally((_) => setLoading(false));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="home-page container">
			<div className="author d-flex align-items-center">
				<div className="author__avatar">
					<img src={AuthorAvatar} alt="author-avatar" />
				</div>
				<div className="author__description">
					<span>
						Personal blog by <a href="https://www.facebook.com/nguyenphucnguyenvy">Nguyên Vy</a>
					</span>
				</div>
			</div>
			{loading ? (
				<SkeletonList num={numPost} />
			) : (
				<div className="post-list">
					{newPosts !== null && newPosts.length > 0 ? (
						newPosts.map((post) => <Article type="short" key={post._id} post={post} />)
					) : (
						<Alert message="Post not found" />
					)}
				</div>
			)}
		</div>
	);
};
