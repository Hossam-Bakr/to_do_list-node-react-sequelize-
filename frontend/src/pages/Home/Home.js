import React, { useState } from "react";
import Mylist from "../MyList/Mylist";
import axios from "axios";

//URL=api/v1/todos/

const Home = () => {
  const data = useState([]);

  const displayAllTasks = async () => {
    console.log("displayAllTasks");
    // const response = await fetch("http://localhost:3000/api/v1/todos/");
    // const tasks = await response.json();
    // console.log(tasks);
    axios
      .get("http://localhost:3000/api/v1/todos/")
      .then((response) => {
        console.log("Data:", response);
        // Process the data further as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="main-container" id="container">
      <div className="overlay"></div>
      <div className="search-overlay"></div>
      {/* <!--  BEGIN CONTENT AREA  --> */}
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="row layout-top-spacing">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="mail-box-container">
                <div className="mail-overlay"></div>

                <div className="tab-title">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-center">
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
                        className="feather feather-clipboard"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect
                          x="8"
                          y="2"
                          width="8"
                          height="4"
                          rx="1"
                          ry="1"
                        ></rect>
                      </svg>
                      <h5 className="app-title">قائمة مهام</h5>
                    </div>

                    <div className="todoList-sidebar-scroll">
                      <div className="col-md-12 col-sm-12 col-12 mt-4 pl-0">
                        <ul
                          className="nav nav-pills d-block"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link list-actions active"
                              id="all-list"
                              data-toggle="pill"
                              href="#pills-inbox"
                              role="tab"
                              aria-selected="true"
                              onClick={displayAllTasks}
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
                                className="feather feather-list"
                              >
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3" y2="6"></line>
                                <line x1="3" y1="12" x2="3" y2="12"></line>
                                <line x1="3" y1="18" x2="3" y2="18"></line>
                              </svg>
                              قائمتي
                              <span className="todo-badge badge"></span>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-done"
                              data-toggle="pill"
                              href="#pills-sentmail"
                              role="tab"
                              aria-selected="false"
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
                                className="feather feather-thumbs-up"
                              >
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                              </svg>
                              مكتمل
                              <span className="todo-badge badge"></span>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-important"
                              data-toggle="pill"
                              href="#pills-important"
                              role="tab"
                              aria-selected="false"
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
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                              ذو أهمية قصوى
                              <span className="todo-badge badge"></span>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className="nav-link list-actions"
                              id="todo-task-trash"
                              data-toggle="pill"
                              href="#pills-trash"
                              role="tab"
                              aria-selected="false"
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
                                className="feather feather-trash-2"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                              المحذوف مؤخرا
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <a className="btn" id="addTask" href="/">
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
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      مهمة جديدة
                    </a>
                  </div>
                </div>

                <div id="todo-inbox" className="accordion todo-inbox">
                  <div className="search">
                    <input
                      type="text"
                      className="form-control input-search"
                      placeholder="ابحث هنا..."
                    />
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
                      className="feather feather-menu mail-menu d-lg-none"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </div>

                  {/* the Box Body */}
                  <div className="todo-box">
                    <div id="ct" className="todo-box-scroll">
                      <Mylist data={data} />
                    </div>

                    <div
                      className="modal fade"
                      id="todoShowListItem"
                      tabIndex="-1"
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body">
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
                              className="feather feather-x close"
                              data-dismiss="modal"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <div className="compose-box">
                              <div className="compose-content">
                                <h5 className="task-heading"> </h5>
                                <p className="task-text"></p>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button className="btn" data-dismiss="modal">
                              {" "}
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
                                className="feather feather-trash"
                              >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              </svg>{" "}
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="addTaskModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addTaskModalTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
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
                        className="feather feather-x close"
                        data-dismiss="modal"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <div className="compose-box">
                        <div className="compose-content" id="addTaskModalTitle">
                          <h5 className="">أضف مهمة</h5>
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="d-flex mail-to mb-4">
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
                                    className="feather feather-edit-3 flaticon-notes"
                                  >
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                  </svg>
                                  <div className="w-100">
                                    <input
                                      id="task"
                                      type="text"
                                      placeholder="Task"
                                      className="form-control"
                                      name="task"
                                    />
                                    <span className="validation-text"></span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex  mail-subject mb-4">
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
                                className="feather feather-file-text flaticon-menu-list"
                              >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              <div className="w-100">
                                <div id="taskdescription" className=""></div>
                                <span className="validation-text"></span>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button className="btn" data-dismiss="modal">
                        <i className="flaticon-cancel-12"></i>إلغاء
                      </button>
                      <button className="btn add-tsk">أضف مهمة</button>
                      <button className="btn edit-tsk">حفظ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
