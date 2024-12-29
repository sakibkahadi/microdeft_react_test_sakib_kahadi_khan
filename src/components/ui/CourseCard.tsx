/* eslint-disable @next/next/no-img-element */
import { Course } from "@/app/courses/page";

const CourseCard = ({ course }: { course: Course }) => {
  const {
    author,
    badge_color,
    badge_text,
    description,
    image,
    instructor_name,
    title,
  } = course;

  return (
    <div className="course-card">
      <div className="course-card-container">
        <div className="course-card-grid">
          {/* top-section */}
          <div className="course-card-image-container">
            <img className="course-card-image" src={image} alt="course" />
            <span
              style={{ backgroundColor: `${badge_color}` }}
              className="course-card-badge"
            >
              {badge_text}
            </span>
          </div>

          {/* Content Section */}
          <div className="course-card-content">
            {/* Title and Description */}
            <div>
              <h1 className="course-card-title">{title}</h1>

              <h3 className="course-card-instructor">
                <span className="course-card-instructor-label">
                  Instructor :
                </span>
                {instructor_name}
              </h3>
              <p className="course-card-description">{description}</p>
            </div>

            {/* Author Info */}
            <div className="course-card-author-info">
              <h1 className="course-card-author-heading">Author Information</h1>
              <h3 className="course-card-author-name">
                <span className="course-card-author-label">Name:</span>{" "}
                {author.name}
              </h3>
              <h4 className="course-card-author-email">
                <span className="course-card-author-label">Email:</span>{" "}
                {author.email}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
