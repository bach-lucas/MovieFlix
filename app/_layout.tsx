import { Stack } from "expo-router";
import "./globals.css";
import {StatusBar} from "react-native";

export default function RootLayout() {
  return (
      <>
        <StatusBar hidden={true}/>
        <Stack>

          <Stack.Screen
              name="(tabs)"
              options={{headerShown: false}} // Esse esconde o cabeçalho das paginas
          />
          <Stack.Screen
              name="movies/[id]"
              options={{headerShown: false}}
          />
        </Stack>
      </>
  )
}
