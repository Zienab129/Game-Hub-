import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={5}>
      <Heading>عذراً</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "الصفحة غير موجودة"
          : "حدث خطأ غير متوقع"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
