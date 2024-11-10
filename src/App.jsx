import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Components/Index.jsx";
import UserIndex from "./Components/Client/UserIndex";
import UserHome from "./Components/Client/Home/UserHome";
import Deshboard from "./Components/Admin/Home/Deshboard";
import AdminIndex from "./Components/Admin/AdminIndex";
import Sidebar from "./Components/Client/Home/MenuSidebar/Sidebar";

function App() {
  const router = [
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/",
          element: <UserIndex />,
          children: [
            { path: "/", element: <UserHome /> },
            { path: "/sidebar", element: <Sidebar /> },
          ],
        },
        {
          path: "/admin",
          element: <AdminIndex />,
          children: [{ path: "**/", element: <Deshboard /> }],
        },
      ],
    },
  ];

  const globRouter = createBrowserRouter(router, {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_skipActionStatusRevalidation: true,
    },
  });

  return (
    <>
      <RouterProvider router={globRouter}></RouterProvider>
    </>
  );
}

export default App;
