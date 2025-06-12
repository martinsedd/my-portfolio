export interface Project  {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  sourceLink: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A scalable REST API for a social media application. Features user authentication, real-time notifications with WebSockets, and a PostgreSQL database.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    liveLink: "#", // Replace with your live link or remove if not applicable
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Beta",
    description:
      "A high-performance data processing service built with Java. It consumes messages from a Kafka queue, processes them, and stores the results in a NoSQL database.",
    techStack: ["Java", "Spring Boot", "Kafka", "MongoDB", "JUnit"],
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Gamma",
    description:
      "A serverless function backend for a weather application. It fetches data from a third-party API, caches it in Redis, and serves it via a lightweight API Gateway.",
    techStack: ["Python", "FastAPI", "AWS Lambda", "Redis", "Serverless"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project Alpha",
    description:
      "A scalable REST API for a social media application. Features user authentication, real-time notifications with WebSockets, and a PostgreSQL database.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    liveLink: "#", // Replace with your live link or remove if not applicable
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Beta",
    description:
      "A high-performance data processing service built with Java. It consumes messages from a Kafka queue, processes them, and stores the results in a NoSQL database.",
    techStack: ["Java", "Spring Boot", "Kafka", "MongoDB", "JUnit"],
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Gamma",
    description:
      "A serverless function backend for a weather application. It fetches data from a third-party API, caches it in Redis, and serves it via a lightweight API Gateway.",
    techStack: ["Python", "FastAPI", "AWS Lambda", "Redis", "Serverless"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project Alpha",
    description:
      "A scalable REST API for a social media application. Features user authentication, real-time notifications with WebSockets, and a PostgreSQL database.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    liveLink: "#", // Replace with your live link or remove if not applicable
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Beta",
    description:
      "A high-performance data processing service built with Java. It consumes messages from a Kafka queue, processes them, and stores the results in a NoSQL database.",
    techStack: ["Java", "Spring Boot", "Kafka", "MongoDB", "JUnit"],
    sourceLink: "#", // Replace with your GitHub link
  },
  {
    title: "Project Gamma",
    description:
      "A serverless function backend for a weather application. It fetches data from a third-party API, caches it in Redis, and serves it via a lightweight API Gateway.",
    techStack: ["Python", "FastAPI", "AWS Lambda", "Redis", "Serverless"],
    liveLink: "#",
    sourceLink: "#",
  },
]