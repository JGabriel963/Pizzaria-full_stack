import { createContext, ReactNode, useState, useEffect } from "react";

import { api } from "../services/apiClient";

import { destroyCookie, parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    // Try catch anything on cookies
    const { '@nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/me').then(res => {
        const { id, name, email } = res.data

        setUser({
          id,
          name,
          email
        })
      })
      .catch(() => {
        // If give wrong, signOut the user
        signOut()
      })
    }
    
  }, [])

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      // console.log(response.data)

      const { id, name, token } = response.data;

      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mẽs
        path: "/",
      });

      setUser({
        id,
        name,
        email,
      });

      // Passar para próximas requisições o nosso token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logado com sucesso!");

      //Redirecionar o user para /dashboard
      Router.push("/dashboard");
    } catch (error) {
      toast.error("Error ao acessar!");
      console.log(error);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      const response = await api.post("/users", {
        name,
        email,
        password,
      });

      toast.success("Conta criada com sucesso!");
      Router.push("/");
    } catch (error) {
      toast.error("Erro ao cadastrar!");
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
