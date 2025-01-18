import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import FavoriteIcon from "./FavoriteIcon";
import useFavorites from "../hooks/useFavorites";
import { memo } from "react";

interface Props {
  game: Game;
}

const GameCard = memo(({ game }: Props) => {
  const { toggleFavorite, favoriteIds } = useFavorites();
  const isFavorite = favoriteIds.includes(game.id);

  const handleFavorite = () => {
    toggleFavorite(game.id);
  };

  return (
    <Card
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue("#ffffff", "#1f2937")}
      _hover={{
        transform: "translateY(-4px)",
        transition: "transform 0.2s ease-in-out",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link to={`/games/${game.slug}`}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          borderRadius="lg"
        />
        <CardBody bg={useColorModeValue("#ffffff", "#1f2937")}>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <HStack spacing={2}>
              <CriticScore score={game.metacritic} />
              <FavoriteIcon isFavorite={isFavorite} onClick={handleFavorite} />
            </HStack>
          </HStack>
          <Box>
            <Heading
              fontSize="xl"
              color={useColorModeValue("#4a5568", "#e2e8f0")}
              display="inline"
            >
              {game.name}
            </Heading>
            <Emoji rating={game.rating_top} />
          </Box>
        </CardBody>
      </Link>
    </Card>
  );
});

export default GameCard;
