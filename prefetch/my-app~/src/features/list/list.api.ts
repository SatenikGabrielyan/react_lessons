import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "./types";


export const listApi = createApi({
    reducerPath:"list",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3004"}),
    endpoints:bulider=>({
        getItems:bulider.query<IResponse, number>({
            query:(page) => `/items?_page=${page}`
        })

    })
})

export const {useGetItemsQuery} = listApi