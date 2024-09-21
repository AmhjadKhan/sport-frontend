import {
    BaseQueryApi,
    BaseQueryFn,
    createApi,
    DefinitionType,
    FetchArgs,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { toast } from "react-hot-toast";
  
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    credentials: "include",
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOption): Promise<any> => {
    let result = await baseQuery(args, api, extraOption);
    if (result?.error?.status === 404) {
      toast.error(result?.error?.data?.message);
    }
    if (result?.error?.status === 403) {
      toast.error(result?.error?.data?.message);
    }
    if (result?.error?.status === 401) {
      // send refresh token if timeout token
      const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
        method: "POST",
        credentials: "include",
      });

    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["semester", "courses", "offeredCourse"],
    endpoints: () => ({}),
  });