import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICourse, InputCourse } from "./types";


export const courseApi = createApi({
    reducerPath:"courseApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3004"}),
    tagTypes:["courses"],
    endpoints:builder => ({
        
        getAllCourses: builder.query<ICourse[],null>({
            query:() => ("/courses")
        }),

        addCourse: builder.mutation<ICourse[], InputCourse>({
            query:(course) => ({
                url:"/courses",
                method:"post",
                body:course
            }),
            invalidatesTags:["courses"]
        }),

        deleteCourse: builder.mutation<ICourse[], string>({
            query: (id) => ({
                url:`/courses/${id}`,
                method:"delete"
                
            }),
            invalidatesTags:["courses"]

        })
       
    })
})

export const { useGetAllCoursesQuery, useDeleteCourseMutation, useAddCourseMutation} = courseApi