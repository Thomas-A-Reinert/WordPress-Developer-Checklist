"use strict";
import { render, h } from "preact-cycle";
import { Component } from "preact";

import { PRIORITY_HIGH, PRIORITY_LOW, PRIORITY_MEDIUM } from "../stores/type";

const CHECKED = (state, task) => {
  task.checked = !task.checked;
  if (task.priority === PRIORITY_HIGH) {
    state.done.high.count = task.checked
      ? state.done.high.count + 1
      : state.done.high.count - 1;
  } else if (task.priority === PRIORITY_MEDIUM) {
    state.done.medium.count = task.checked
      ? state.done.medium.count + 1
      : state.done.medium.count - 1;
  } else if (task.priority === PRIORITY_LOW) {
    state.done.low.count = task.checked
      ? state.done.low.count + 1
      : state.done.low.count - 1;
  }
};
const DEVELOP = (state, task) => {
  task.developped = !task.developped;
};

const isChecked = task => {
  return task.checked ? "checked" : "";
};

const isCheckedIcon = task => {
  return (
    task.priority +
    " fa " +
    (task.checked ? "fa-check checked " : "fa-square not-checked")
  );
};

const isDevelopped = task => {
  return (
    "fa fa-lg fa-2x " + (task.developped ? "fa-angle-up" : "fa-angle-down")
  );
};

const TypeIcon = type => {
  let icon = "fa-li fa ";
  if (type === "link") {
    return icon + "fa-book";
  } else if (type === "tools") {
    return icon + "fa-wrench";
  } else if (type === "codex") {
    return icon + "fa-wordpress";
  } else if (type === "plugin") {
    return icon + "fa-plug";
  } else if (type === "theme") {
    return icon + "fa-desktop";
  }
};

class Task extends Component {
  render({ task }, state, { mutate, mutation }) {
    return (
      <article className="task card mb-3 dark show-on-mobile">
        <h3 className="card-header h5">
          <span onClick={mutation(CHECKED, task)} className={"taskHeader " + isChecked(task)}>
            <i className={isCheckedIcon(task)} />
            {task.title}&nbsp;
          </span>
          {(task.explications || task.explicationlist || task.links) && (
            <div className="foldIcon h6 text-muted bg-white border-left" onClick={mutation(DEVELOP, task)}>
              <i className={isDevelopped(task)}><span className="sr-only">Open</span></i>
            </div>
          )}
        </h3>

        {task.developped && (
          <div className="card-body">
            <div className="card-text">
              {(task.explications || task.code) && (
                <div className="explications">
                  {task.explications && (
                    <p>
                      <em>{task.explications}</em>
                    </p>
                  )}
                  
                  {task.code && (
                    <pre>
                      <code dangerouslySetInnerHTML={{__html: task.code}}></code>
                    </pre>
                  )}
                </div>
              )}

              {task.explicationlist && (
                <ul className="explicationlist">
                  {task.explicationlist.map((explicationlist) => {
                    return (
                      <li dangerouslySetInnerHTML={{__html: explicationlist.explicationitem}}></li>
                    );
                  })}
                </ul>
              )}

              {task.links && (
                <ul className="fa-ul">
                  {task.links.map((link) => {
                    return (
                      <li>
                        <a href={link.path} target="_blank" rel="noopener noreferrer">
                          <i className={TypeIcon(link.type)} aria-hidden="true" />
                          {link.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>    
          </div>
        )}

        {task.tags && (
          <div className="card-footer taglist">
            {task.tags.map((tag) => {
              return (
                <button className="btn btn-outline-dark tags mr-1">
                  {tag.label}
                </button>
              );
            })}
          </div>
        )}
      </article>
    );
  }
}

export default Task;
