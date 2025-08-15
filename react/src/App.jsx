import Button from "./components/Button";
import Count from "./components/Count";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import ServicePage from "./page/ServicePage";
import PageNotFound from "./page/PageNotFound";
import LoginPage from "./page/LoginPage";
import Layout from "./Layouts/Layout";
import FetchAPI from "./page/FetchAPI";

const App = () => {
  // const DashboardLayout = () => {
  //   return (
  //     <>
  //       <Topbar />
  //       <div className="flex">
  //         <Sidebar />
  //         <Outlet />
  //       </div>
  //     </>
  //   );
  // };

  const pagesRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/fetch-api",
      element: <FetchAPI />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={pagesRoute} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
       
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>
  );
};

export default App;
