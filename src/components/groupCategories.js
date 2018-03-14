"use strict";
import { h } from "preact-cycle";
import { Component } from "preact";
import SubCategories from "./subCategories";

class GroupCategories extends Component {
  render({ group_categories }, state, ctx) {
    return (
      <div className="categories">
        {group_categories.map(group => {
          return (
            <section>
              <h2 className="group-title mb-2 mt-5">
                {group.title_group}{" "}
                <a className="go-top h6 pull-right" href="#top">
                  <i className="fa fa-arrow-up" aria-hidden="true" />
                  &nbsp;Back to top
                </a>
              </h2>
              <SubCategories key={group.id} categories={group.categories} />
            </section>
          );
        })}
      </div>
    );
  }
}

export default GroupCategories;
