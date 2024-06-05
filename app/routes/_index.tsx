import type { MetaFunction } from "@remix-run/node";
import { Task } from "stories/Task";
import { TaskList } from "stories/TaskList";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <TaskList />
    </div>
  );
}
