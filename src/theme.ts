import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1a1b26" : "#f8fafc",
        color: props.colorMode === "dark" ? "#e2e8f0" : "#4a5568",
      },
    }),
  },
  components: {
    Card: {
      baseStyle: (props: { colorMode: string }) => ({
        container: {
          bg: props.colorMode === "dark" ? "#1f2937" : "#ffffff",
          boxShadow:
            props.colorMode === "dark"
              ? "0 4px 20px rgba(0, 0, 0, 0.2)"
              : "0 2px 8px rgba(0, 0, 0, 0.05)",
          borderWidth: "1px",
          borderColor: props.colorMode === "dark" ? "#2f3447" : "#edf2f7",
        },
      }),
    },
    Heading: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === "dark" ? "#e2e8f0" : "#4a5568",
      }),
    },
    Input: {
      variants: {
        filled: (props: { colorMode: string }) => ({
          field: {
            bg: props.colorMode === "dark" ? "#2d3748" : "#ffffff",
            _hover: {
              bg: props.colorMode === "dark" ? "#374151" : "#f7fafc",
            },
            _focus: {
              bg: props.colorMode === "dark" ? "#374151" : "#f7fafc",
              borderColor: props.colorMode === "dark" ? "#4299e1" : "#63b3ed",
            },
            borderWidth: "1px",
            borderColor: props.colorMode === "dark" ? "#2f3447" : "#edf2f7",
          },
        }),
      },
    },
    Text: {
      baseStyle: (props: { colorMode: string }) => ({
        color: props.colorMode === "dark" ? "#e2e8f0" : "#4a5568",
      }),
    },
  },
});

export default theme;
