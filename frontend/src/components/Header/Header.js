import React from 'react';

const Header = () => {
    return (
        <div className="page-header px-5 pt-2">
        <nav className="breadcrumb-one" aria-label="breadcrumb">
            <div className="title">
                <h3>قائمة مهام</h3>
            </div>
            <ol className="breadcrumb">

                <li className="breadcrumb-item"><a href="/">أدر أولولياتك</a></li>
                <li className="breadcrumb-item active"  aria-current="page"><a href="/">تفقد قوائمك</a></li>
            </ol>
        </nav>

        <div className="toggle-switch">
            <label className="switch s-icons s-outline  s-outline-secondary">
                <input type="checkbox" defaultChecked="" className="theme-shifter" />
                <span className="slider round">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </span>
            </label>
        </div>

    </div>
    );
}

export default Header;
