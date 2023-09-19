import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  tagTypes: ["Capsule"],
  endpoints: (builder) => ({
    getCapsules: builder.query({
      query: () => "/capsules",
      providesTags: (result = [], error, arg) => [
        "Capsule",
        ...result.map(({ capsule_serial }) => ({
          type: "Capsule",
          capsule_serial,
        })),
      ],
    }),
  }),
});

export const { useGetCapsulesQuery } = apiSlice;
