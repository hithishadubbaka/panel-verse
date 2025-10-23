import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
