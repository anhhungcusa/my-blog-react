import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarkdownContainer from 'react-markdown';
import './Article.css';
import { beautyDate } from '../../utils';
export const Article = ({
	post,
	typeContent = 'short', // short, full, hidden
	maxHeight = '200px'
}) => {
	const { title, description, content, author, createdAt, _id } = post;
	const [ type, setType ] = useState('hidden');
	useEffect(
		() => {
			setType(typeContent);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	const switchIsFull = () => setType('full')
	return (
		<article className="article d-flex flex-column">
			<h3>
				<Link className="article__title" to={`blogs/${_id}`}>
					{title}
				</Link>
			</h3>
			<i className="article__info">
				{beautyDate(createdAt)} • {author}
			</i>
			<div className="article__description">{description}</div>
			{type !== 'hidden' && (
				<div
					className={`article__content--${type}`}
					style={{ maxHeight: type === 'full' ? 'none' : maxHeight }}
				>
					<MarkdownContainer source={content} />
				</div>
			)}
			{type !== 'full' && (
				<div>
					<span className="ellipsis">...</span>
					<span className="more"
					onClick={switchIsFull}
					>more</span>
				</div>
			)}
		</article>
	);
};
