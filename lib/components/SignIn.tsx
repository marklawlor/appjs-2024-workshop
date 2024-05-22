import { View, Text, TextInput, Button, Pressable } from "react-native";
import { useAuth } from "../auth";
import { useState } from "react";
import { router } from "expo-router";

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSignIn(email: string, password: string) {
    try {
      setError("");
      setSubmitting(true);
      // const success = await signIn(email, password);
      const success = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });
      setSubmitting(false);

      if (!success) {
        setError("Invalid email or password");
      } else {
        if (router.canDismiss()) {
          router.dismiss();
        } else {
          router.replace("/");
        }
      }
    } catch {
      setError("Invalid email or password");
      setSubmitting(false);
    }
  }

  return (
    <View className="flex-1 justify-center items-center">
      <View className="border-2 border-solid border-slate-800 flex-col gap-5 p-5">
        {error ? <Text className="text-red-500">{error}</Text> : null}
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          className="border-2 border-solid border-slate-800 p-2 rounded-lg"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          className="border-2 border-solid border-slate-800 p-2 rounded-lg"
        />
        <Pressable
          disabled={submitting}
          onPress={() => handleSignIn(email, password)}
          className="border-2 border-solid border-slate-800 p-2 rounded-lg justify-center items-center hover:bg-slate-300 hover:text-white"
        >
          <Text>{submitting ? "Signing in...." : "Sign in"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
