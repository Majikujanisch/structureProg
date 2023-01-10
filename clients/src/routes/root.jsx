import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div Id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form Id="search-form" role="search">
              <input
                Id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                Id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`register`}>Register</a>
              </li>
              <li>
                <a href={`login`}>login</a>
              </li>
              <li>
                <a href={`checkLogin`}>checklogin</a>
              </li>
            </ul>
          </nav>
        </div>
        <div Id="detail">
          <Outlet />
        </div>
      </>
    );
  }