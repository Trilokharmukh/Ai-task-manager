import type { Task } from "@/lib/tasks";

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <section aria-label="Created tasks">
      <h2 className="text-lg font-semibold">Created tasks</h2>
      <ul className="mt-3 space-y-2">
        {tasks.map((task) => (
          <li className="rounded-md border border-zinc-200 px-3 py-2" key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
