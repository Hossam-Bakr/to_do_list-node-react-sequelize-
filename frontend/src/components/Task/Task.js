import React from "react";

const Task = ({ title, description }) => {
  return (
    <div className="todo-item all-list">
      <div className="todo-item-inner">
        <div className="n-chk text-center">
          <label className="new-control new-checkbox checkbox-primary">
            <input type="checkbox" className="new-control-input inbox-chkbox" />
            <span className="new-control-indicator"></span>
          </label>
        </div>

        <div className="todo-content">
          <h5 className="todo-heading" data-todoheading="Download Complete">
            {" "}
            {title}
          </h5>
          <p className="meta-date">30 أغسطس, 2024</p>
          <p
            className="todo-text"
            data-todohtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
            data-todotext='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
          >
            {description}
          </p>
        </div>

        <div className="action-dropdown custom-dropdown-icon">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink-7"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink-7">
              <a className="edit dropdown-item" href="/">
                Edit
              </a>
              <a className="important dropdown-item" href="/">
                Important
              </a>
              <a className="dropdown-item delete" href="/">
                Delete
              </a>
              <a className="dropdown-item permanent-delete" href="/">
                Permanent Delete
              </a>
              <a className="dropdown-item revive" href="/">
                Revive Task
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
