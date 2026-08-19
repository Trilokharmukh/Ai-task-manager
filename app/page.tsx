"use client";

import { FormEvent, useEffect, useState } from "react";
import { TaskForm } from "@/components/task-form";
import { TaskList } from "@/components/task-list";
import { createTask, getTasks, type Task } from "@/lib/tasks";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setTasks(getTasks());
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const title = form.get("title");

    if (typeof title !== "string" || title.trim() === "") {
      return;
    }

    const task = createTask(title);
    setTasks((currentTasks) => [...currentTasks, task]);
    event.currentTarget.reset();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col gap-8 px-6 py-16">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">AI Task Manager</h1>
        <p className="mt-2 text-zinc-600">Create a task to get started.</p>
      </header>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList tasks={tasks} />
    </main>
  );
}
