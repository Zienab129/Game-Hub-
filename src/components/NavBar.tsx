import { HStack, Image, Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding="20px"
      bg={useColorModeValue("#ffffff", "#1a1b26")}
      borderBottom="1px"
      borderColor={useColorModeValue("#edf2f7", "#2f3447")}
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.05)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={100}
      spacing={4}
    >
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
          borderRadius="xl"
          _hover={{
            transform: "scale(1.05)",
            transition: "all 0.2s ease-in-out",
          }}
        />
      </Link>
      <Box flexGrow={1} mx={6}>
        <SearchInput onSearch={onSearch} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
