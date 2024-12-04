import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InputUser, IUser } from "./types";

export const usersApi = createApi({
    reducerPath:"usersApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3004"}),
    tagTypes:["users"],
    endpoints:builder => ({
        getUsers: builder.query<IUser[],null>({
            query:() => "/users",
            providesTags:["users"]
        }),
        addUser:builder.mutation<IUser, InputUser>({
            query:(user) => ({
                url:"/users",
                method:"post",
                body:user
            }),
            invalidatesTags:["users"]
        })
    })
})

export const { useGetUsersQuery, useAddUserMutation} = usersApi