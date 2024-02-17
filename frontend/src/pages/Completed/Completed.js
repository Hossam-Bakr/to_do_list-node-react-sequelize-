import React from "react";

const Completed = () => {
  return (
    <>
      <div className="todo-item all-list todo-task-done">
        <div className="todo-item-inner">
          <div className="n-chk text-center">
            <label className="new-control new-checkbox checkbox-primary">
              <input
                type="checkbox"
                className="new-control-input inbox-chkbox"
                defaultChecked
              />
              <span className="new-control-indicator"></span>
            </label>
          </div>

          <div className="todo-content">
            <h5
              className="todo-heading"
              data-todoheading="Meet Lisa to discuss project details"
            >
              {" "}
              Meet Lisa to discuss project details
            </h5>
            <p className="meta-date">Aug, 05 2019</p>
            <p
              className="todo-text"
              data-todohtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
              data-todotext='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius
              vel, aliquet non augue. Vivamus sem ante, ultrices at ex a,
              rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere
              lorem tempus non. Suspendisse ac turpis dictum, convallis est ut,
              posuere sem. Etiam imperdiet aliquam risus, eu commodo urna
              vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.
            </p>
          </div>

          <div className="priority-dropdown custom-dropdown-icon">
            <div className="dropdown p-dropdown">
              <a
                className="dropdown-toggle warning"
                href="/"
                role="button"
                id="dropdownMenuLink-5"
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
                  className="feather feather-alert-octagon"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink-5"
              >
                <a className="dropdown-item danger" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  High
                </a>
                <a className="dropdown-item warning" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  Middle
                </a>
                <a className="dropdown-item primary" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  Low
                </a>
              </div>
            </div>
          </div>

          <div className="action-dropdown custom-dropdown-icon">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="/"
                role="button"
                id="dropdownMenuLink-6"
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
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink-6"
              >
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

      <div className="todo-item all-list todo-task-done">
        <div className="todo-item-inner">
          <div className="n-chk text-center">
            <label className="new-control new-checkbox checkbox-primary">
              <input
                type="checkbox"
                className="new-control-input inbox-chkbox"
              />
              <span className="new-control-indicator"></span>
            </label>
          </div>

          <div className="todo-content">
            <h5 className="todo-heading" data-todoheading="New User Registered">
              {" "}
              Check Repository
            </h5>
            <p className="meta-date">Aug, 01 2019</p>
            <p
              className="todo-text"
              data-todohtml="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>"
              data-todotext='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius
              vel, aliquet non augue. Vivamus sem ante, ultrices at ex a,
              rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere
              lorem tempus non. Suspendisse ac turpis dictum, convallis est ut,
              posuere sem. Etiam imperdiet aliquam risus, eu commodo urna
              vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.
            </p>
          </div>

          <div className="priority-dropdown custom-dropdown-icon">
            <div className="dropdown p-dropdown">
              <a
                className="dropdown-toggle warning"
                href="/"
                role="button"
                id="dropdownMenuLink-16"
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
                  className="feather feather-alert-octagon"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink-16"
              >
                <a className="dropdown-item danger" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  High
                </a>
                <a className="dropdown-item warning" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  Middle
                </a>
                <a className="dropdown-item primary" href="/">
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
                    className="feather feather-alert-octagon"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>{" "}
                  Low
                </a>
              </div>
            </div>
          </div>

          <div className="action-dropdown custom-dropdown-icon">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="/"
                role="button"
                id="dropdownMenuLink-17"
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

              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink-17"
              >
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
    </>
  );
};

export default Completed;