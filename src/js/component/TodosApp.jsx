import React, { useState } from "react";

export default function TodosApp() {
	const [list, setList] = useState([]);
	const [content, setContent] = useState("");

	return (
		<div className="container-fluid">
			<h1 className="row mt-5 justify-content-center">To-Do List</h1>
			<div className="col-lg-6 p-3 m-auto wrapper">
				<input
					className="row m-auto w-100"
					placeholder="Add Activity"
					value={content}
					onChange={event => setContent(event.target.value)}
					onKeyPress={event => {
						if (event.key === "Enter" && content !== "") {
							setList([...list, content]);
							setContent("");
						}
					}}
				/>
				<ul className="todoList">
					{list.map((item, index) => {
						return (
							<li className="row m-auto listItem" key={index}>
								{item}
								<button
									onClick={() =>
										setList(list.filter(e => e !== item))
									}
									type="button"
									className="button ms-auto align-self-center btn btn-close"></button>
							</li>
						);
					})}
				</ul>
				<div className="row m-auto">
					<span className="reminder text-muted">
						{list.length > 0
							? `${list.length} items left`
							: `No tasks, add a task`}
					</span>
				</div>
			</div>
		</div>
	);
}
