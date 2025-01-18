import { Icon, IconButton, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteIcon = ({ isFavorite, onClick }: Props) => {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const activeColor = useColorModeValue("red.500", "red.400");

  return (
    <Tooltip
      label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      placement="top"
    >
      <IconButton
        aria-label="Toggle favorite"
        icon={
          <Icon
            as={isFavorite ? BsHeartFill : BsHeart}
            color={isFavorite ? activeColor : iconColor}
            boxSize="20px"
          />
        }
        variant="ghost"
        size="md"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        _hover={{
          transform: "scale(1.1)",
          bg: "transparent",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
        transition="all 0.2s"
      />
    </Tooltip>
  );
};

export default FavoriteIcon;
