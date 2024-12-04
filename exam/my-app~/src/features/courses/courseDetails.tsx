import { useParams } from "react-router-dom";
import { useGetAllCoursesQuery } from "./courseApi";

export const CourseDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetAllCoursesQuery(null);

  const found = data?.find((course) => course.id === id);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded shadow-md">
      <h3 className="text-2xl font-bold text-burgundy mb-4">Course Details</h3>

      {isLoading && <p className="text-gray-600">Loading course details...</p>}
      {error && <p className="text-red-500">Failed to load course details.</p>}

      {!found && !isLoading && !error && (
        <p className="text-gray-600">Course not found.</p>
      )}

      {found && (
        <div>
          <strong className="text-lg text-burgundy">{found.title}</strong>

          <div className="mt-4 space-y-2">
            {found.modules.map((m) => (
              <p key={m.id} className="text-gray-700 bg-white p-2 rounded shadow">
                {m.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
