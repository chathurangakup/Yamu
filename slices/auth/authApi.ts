import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

type CheckMobileResponse = {
  exists: boolean;
};

type User = {
  id: string;
  email: string;
};

type AuthResponse = {
  user: User;
};

type LoginResponse = {
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    checkMobile: builder.mutation<CheckMobileResponse, { mobile: string }>({
      async queryFn({ mobile }) {
        await new Promise((res) => setTimeout(res, 1000));

        const existingNumbers = ["94771234567", "94761234567"];

        return {
          data: {
            exists: existingNumbers.includes(mobile),
          },
        };
      },
    }),

    // ✅ SIGN IN
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        async queryFn({ email, password }) {
          await new Promise((res) => setTimeout(res, 1000));

          if (email === "test@gmail.com" && password === "123456") {
            return {
              data: {
                user: {
                  id: "1",
                  name: "Test User",
                  email,
                },
              },
            };
          }

          return {
            error: {
              status: 401,
              data: "Invalid credentials",
            },
          };
        },
      }
    ),

    // ✅ SIGN UP
    signUp: builder.mutation<AuthResponse, { email: string; password: string }>(
      {
        async queryFn({ email }) {
          await new Promise((res) => setTimeout(res, 1000));

          return {
            data: {
              user: { id: Date.now().toString(), email },
            },
          };
        },
      }
    ),
  }),
});

export const { useCheckMobileMutation, useLoginMutation, useSignUpMutation } =
  authApi;
