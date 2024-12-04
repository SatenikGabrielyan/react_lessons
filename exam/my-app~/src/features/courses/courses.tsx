import { Link, useNavigate } from "react-router-dom";
import { useDeleteCourseMutation, useGetAllCoursesQuery } from "./courseApi";

export const Courses = () => {
  const { data, error, isLoading } = useGetAllCoursesQuery(null);
  const [deleteCourse] = useDeleteCourseMutation();

  const handleDelete = (id: string) => {
    console.log(id);
    deleteCourse(id);
  };

  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded shadow-md">
      <h3 className="text-2xl font-bold text-burgundy mb-4">Courses</h3>

      <Link
        to={"courses/add"}
        className="px-4 py-2 bg-burgundy text-white rounded hover:bg-opacity-90 inline-block mb-4"
      >
        Add Course
      </Link>

      {isLoading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">Failed to load courses.</p>}

      {data &&
        data.map((course) => (
          <div
            key={course.id}
            className="p-4 mb-4 bg-white rounded shadow hover:shadow-lg"
          >
            <strong className="text-lg text-burgundy">{course.title}</strong>

            <div className="mt-2">
              {course.modules.map((m) => (
                <p key={m.id} className="text-gray-700">
                  {m.name}
                </p>
              ))}
            </div>

            <div className="mt-4 flex items-center space-x-4">
              <button
                onClick={() => handleDelete(course.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
              <Link
                to={`/courses/details/${course.id}`}
                className="px-3 py-1 bg-burgundy text-white rounded hover:bg-opacity-90"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};
