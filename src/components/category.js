"use strict";
import { Component } from "preact";
import { h } from "preact-cycle";
import Task from "./task";

class Category extends Component {
  render({ category }) {
    return (
      <div className="">
        <h3 className="category-title">{category.title}</h3>
        {category.tasks.map(task => <Task key={task.id} task={task} />)}
      </div>
    );
  }
}
export default Category;
