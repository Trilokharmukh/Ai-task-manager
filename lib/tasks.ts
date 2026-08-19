export type Task = {
  id: string;
  title: string;
};

const storageKey = "ai-task-manager.tasks";

export function getTasks(): Task[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedTasks = window.localStorage.getItem(storageKey);

  if (storedTasks === null) {
    return [];
  }

  try {
    return JSON.parse(storedTasks) as Task[];
  } catch {
    return [];
  }
}

export function createTask(title: string): Task {
  const task = {
    id: crypto.randomUUID(),
    title: title.trim(),
  };
  const tasks = [...getTasks(), task];

  window.localStorage.setItem(storageKey, JSON.stringify(tasks));

  return task;
}
