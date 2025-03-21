import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
        name="(tabs)"
        options={{headerShown: false}} // Esse esconde o cabeçalho das paginas
      />
    <Stack.Screen
      name="movie/[id]"
      options={{headerShown: false}}
    />
    </Stack>;
}
