/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CourseCard from "@/components/ui/CourseCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export interface Course {
  id: number;
  title: string;
  description: string;
  instructor_name: string;
  badge_text: string;
  badge_color: string;
  image: string;
  created_at: string;
  author: {
    name: string;
    email: string;
  };
}

const CoursesPage = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    <h1 className="text-4xl text-center text-red-500">Loading..........</h1>;
  }
  const token = session?.user?.accessToken;
  const [courses, SetCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (token) {
      fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => SetCourses(data.data.data))
        .catch((err) => {
          toast.error(`Something Went wrong ${err}`);
        });
    }
  }, [token]);

  return (
    <div>
      <Toaster position="bottom-right" />
      <h1 className="text-center text-4xl mb-5">
        Our<span className="text-teal-600"> Course</span>
      </h1>
      <div className="grid gap-5 ">
        {courses?.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
