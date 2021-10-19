import React, { useState } from "react";

export default function Home() {
	const [list, setList] = useState(["test", "values"]);
	const [content, setContent] = useState("");

	return (
		<div className="container-fluid">
			<h1 className="row mt-5 justify-content-center">To-Do List</h1>
			<div className="col-lg-6 p-3 m-auto todoList">
				<input
					className="row m-auto w-100"
					placeholder="Add Activity"
					value={content}
					onChange={event => setContent(event.target.value)}
					onKeyPress={event => {
						if (event.key === "Enter" && content !== "") {
							setList(list.concat(content));
							setContent("");
						}
					}}
				/>
				{list.map((item, index) => {
					return (
						<div className="row m-auto listItem" key={index}>
							{item}
							<button
								onClick={() =>
									setList(list.filter(e => e !== item))
								}
								type="button"
								className="ms-auto align-self-center btn btn-close"></button>
						</div>
					);
				})}
				<div className="row m-auto">
					<span className="reminder text-muted">
						{list.length} items left
					</span>
				</div>
			</div>
		</div>
	);
}
