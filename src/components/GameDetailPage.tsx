import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug || "");

  const bgColor = useColorModeValue("#ffffff", "#1a1b26");
  const textColor = useColorModeValue("#4a5568", "#e2e8f0");
  const secondaryBg = useColorModeValue("#f8fafc", "#1f2937");
  const borderColor = useColorModeValue("#edf2f7", "#2f3447");

  if (isLoading) return <Spinner size="xl" color="blue.500" />;

  if (error || !game)
    return <Text color="red.400">{error?.message || "Game not found"}</Text>;

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
      gap={8}
      padding="30px"
      bg={bgColor}
      borderRadius="lg"
      marginTop="80px"
      borderWidth="1px"
      borderColor={borderColor}
    >
      <GridItem>
        <Heading marginBottom={6} color={textColor} fontSize="3xl">
          {game.name}
        </Heading>
        <Text
          marginBottom={8}
          color={textColor}
          fontSize="lg"
          lineHeight="tall"
        >
          {game.description_raw}
        </Text>

        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          borderRadius="lg"
          marginBottom={8}
          width="100%"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
        />

        <Heading size="lg" marginBottom={6} color={textColor}>
          Screenshots
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {game.screenshots?.map((screenshot) => (
            <Image
              key={screenshot.id}
              src={screenshot.image}
              alt="Game screenshot"
              borderRadius="lg"
              width="100%"
              height="100%"
              objectFit="cover"
              boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <Box
          bg={secondaryBg}
          padding={6}
          borderRadius="lg"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <Heading size="lg" marginBottom={6} color={textColor}>
            Game Info
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            <InfoItem
              label="Platforms"
              value={game.parent_platforms
                ?.map(({ platform }) => platform.name)
                .join(", ")}
              textColor={textColor}
            />
            <InfoItem
              label="Genres"
              value={game.genres?.map((genre) => genre.name).join(", ")}
              textColor={textColor}
            />
            <InfoItem
              label="Publishers"
              value={game.publishers
                ?.map((publisher) => publisher.name)
                .join(", ")}
              textColor={textColor}
            />
            <InfoItem
              label="Release Date"
              value={game.released}
              textColor={textColor}
            />
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
  textColor: string;
}

const InfoItem = ({ label, value, textColor }: InfoItemProps) => (
  <Box>
    <Text color={textColor} fontWeight="bold" marginBottom={1}>
      {label}
    </Text>
    <Text color={textColor}>{value}</Text>
  </Box>
);

export default GameDetailPage;
