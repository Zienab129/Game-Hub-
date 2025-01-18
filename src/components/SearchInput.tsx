import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <form style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color={useColorModeValue("#4a5568", "#4b5563")} />
        </InputLeftElement>
        <Input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          borderRadius="lg"
          placeholder="Search games..."
          variant="filled"
          bg={useColorModeValue("#f8fafc", "#2d3748")}
          _hover={{
            bg: useColorModeValue("#f1f5f9", "#374151"),
          }}
          _focus={{
            bg: useColorModeValue("#ffffff", "#374151"),
            borderColor: useColorModeValue("#63b3ed", "#4299e1"),
            boxShadow: useColorModeValue(
              "0 0 0 1px #63b3ed",
              "0 0 0 1px #4299e1"
            ),
          }}
          color={useColorModeValue("#4a5568", "#e2e8f0")}
          _placeholder={{
            color: useColorModeValue("#a0aec0", "#4b5563"),
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
