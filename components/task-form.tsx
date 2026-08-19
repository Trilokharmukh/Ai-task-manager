import type { FormEventHandler } from "react";

type TaskFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function TaskForm({ onSubmit }: TaskFormProps) {
  return (
    <form className="flex gap-3" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="task-name">
        Task name
      </label>
      <input
        className="min-w-0 flex-1 rounded-md border border-zinc-300 px-3 py-2 shadow-sm"
        id="task-name"
        name="title"
        placeholder="Task name"
        required
        type="text"
      />
      <button
        className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700"
        type="submit"
      >
        Add task
      </button>
    </form>
  );
}
