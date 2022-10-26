import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "data.json",
    }),
  }),
});

export const { useGetDataQuery } = api;
