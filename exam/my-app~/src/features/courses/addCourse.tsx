import { useState } from "react";
import { InputCourse } from "./types";
import { useAddCourseMutation } from "./courseApi";
import { useNavigate } from "react-router-dom";

export const AddCourse = () => {
  const [course, setCourse] = useState<InputCourse>({
    title: "",
    modules: [],
  });

  const [err, setErr] = useState<boolean>(false);

  const [addCourse] = useAddCourseMutation();
  const navigate = useNavigate();

  const handleAddModule = () => {
    if (!course.title) {
      setErr(true);
      return;
    }
    const newModule = { id: Date.now().toString(), name: "" };
    setCourse({ ...course, modules: [...course.modules, newModule] });
  };

  const handleModuleUpdate = (id: string, name: string) => {
    const newModule = course.modules.map((module) =>
      module.id === id ? { ...module, name } : module
    );
    setCourse({ ...course, modules: newModule });
  };

  const handleDelete = (id: string) => {
    const filtered = course.modules.filter((item) => item.id !== id);
    setCourse({ ...course, modules: filtered });
  };

  const handleAdd = () => {
    addCourse(course);
    navigate("/");
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-gray-100 rounded shadow-md">
      <h3 className="text-2xl font-bold text-burgundy mb-4">Add Course</h3>
      <input
        type="text"
        placeholder="Add course name"
        value={course.title}
        onChange={(e) => setCourse({ ...course, title: e.target.value })}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-burgundy"
      />
      {err && <p className="text-red-500">Course name is required</p>}
      
      <button
        onClick={handleAddModule}
        className="px-4 py-2 bg-burgundy text-white rounded hover:bg-opacity-90"
      >
        Add Module
      </button>
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-burgundy text-white rounded ml-2 hover:bg-opacity-90"
      >
        Save Course
      </button>

      <div className="mt-6">
        {course.modules.map((module) => (
          <div
            key={module.id}
            className="flex items-center space-x-2 mb-2"
          >
            <input
              type="text"
              placeholder="Enter module name"
              value={module.name}
              onChange={(e) =>
                handleModuleUpdate(module.id, e.target.value)
              }
              className="flex-1 p-2 border rounded focus:outline-none focus:ring focus:ring-burgundy"
            />
            <button
              onClick={() => handleDelete(module.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
