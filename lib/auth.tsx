import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<{
  signIn: (username: string, password: string) => Promise<boolean>;
  isSignedIn: boolean;
  isReady: boolean;
}>({
  signIn: async () => false,
  isSignedIn: false,
  isReady: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: { children: React.ReactNode }) {
  const [isSignedIn, setSignedIn] = useState(false);
  const [isReady, setReady] = useState(false);

  async function signIn() {
    return fetch("/api/sign-in").then((res) => {
      setReady(true);
      if (res.ok) {
        setSignedIn(true);
        return true;
      }

      setSignedIn(false);
      return false;
    });
  }

  return (
    <AuthContext.Provider value={{ signIn, isSignedIn, isReady }}>
      {props.children}
    </AuthContext.Provider>
  );
}
