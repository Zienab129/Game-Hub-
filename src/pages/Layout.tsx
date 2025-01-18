import { Box } from "@chakra-ui/react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (searchText: string) => {
    navigate("/");
    if (searchText) {
      setSearchParams({ search: searchText });
    } else {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("search");
      setSearchParams(newSearchParams);
    }
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
