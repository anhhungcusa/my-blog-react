import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useState } from 'react';
import { sendNewPost } from "../../../services";
import MarkdownContainer from 'react-markdown'
import './Manager.css'
const layout = {
	labelCol: {
		span: 4
	},
	wrapperCol: {
		span: 16
	}
};

export const Manager = () => {
	const [ post, setPost ] = useState({
		title: '',
		author: '',
		description: '',
		content: ''
  });
  const [loading, setLoading] = useState(false)
	const onChangePost = (e) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};
	const onSubmit = () => {
    setLoading(true)
    sendNewPost({...post})
    .then(res => message.success('add successful'))
    .catch(error => message.error(error.message || 'add failed'))
    .finally(_ => setLoading(false))
  };
	return (
		<div className="manager-page container">
			<h1>Add new Post</h1>
			<Form {...layout}>
				<Form.Item label="Title">
					<Input onChange={onChangePost} name="title" />
				</Form.Item>
				<Form.Item label="Author">
					<Input onChange={onChangePost} name="author" />
				</Form.Item>
				<Form.Item label="Description">
					<Input onChange={onChangePost} name="description" />
				</Form.Item>
				<Form.Item label="Content" >
					<Input.TextArea rows={10} onChange={onChangePost} name="content" />
				</Form.Item>
				<Form.Item className='form-button' wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
					<Button loading={loading} onClick={onSubmit} type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
        <Form.Item label="Preview content">
          <MarkdownContainer source={post.content} />
				</Form.Item>
			</Form>
		</div>
	);
};
