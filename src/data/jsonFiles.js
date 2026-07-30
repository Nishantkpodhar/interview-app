import reactData from "./react.json";
import javascriptData from "./javascript.json";
import nextjsData from "./nextjs.json";
import cssData from "./css.json";
import nodeData from "./node.json";
import pythonData from "./python.json";
import typescriptData from "./typescript.json";

const questionFiles = [
  { value: "react", label: "React", data: reactData },
  { value: "javascript", label: "JavaScript", data: javascriptData },
  { value: "nextjs", label: "Next.js", data: nextjsData },
  { value: "css", label: "CSS", data: cssData },
  { value: "node", label: "Node.js", data: nodeData },
  { value: "python", label: "Python", data: pythonData },
  { value: "typescript", label: "TypeScript", data: typescriptData },
];

const technologyGroups = questionFiles.map(({ value, label, data }) => ({
  value,
  label,
  questions: data.map((item) => ({
    ...item,
    category: item.category?.trim() || label,
  })),
}));

const createCategoryOptions = (questions) => {
  const categories = new Map();

  questions.forEach((question) => {
    const key = question.category.toLocaleLowerCase();
    const category = categories.get(key) || {
      value: question.category,
      label: question.category,
      count: 0,
    };

    category.count += 1;
    categories.set(key, category);
  });

  return [...categories.values()].sort((first, second) =>
    first.label.localeCompare(second.label)
  );
};

export const technologyOptions = [
  {
    value: "all",
    label: "All Technologies",
    count: technologyGroups.reduce(
      (total, technology) => total + technology.questions.length,
      0
    ),
  },
  ...technologyGroups.map(({ value, label, questions }) => ({
    value,
    label,
    count: questions.length,
  })),
];

export const categoryOptionsByTechnology = {
  all: createCategoryOptions(
    technologyGroups.flatMap(({ questions }) => questions)
  ),
  ...Object.fromEntries(
    technologyGroups.map(({ value, questions }) => [
      value,
      createCategoryOptions(questions),
    ])
  ),
};

const jsonFiles = {
  all: technologyGroups.flatMap(({ questions }) => questions),
  ...Object.fromEntries(
    technologyGroups.map(({ value, questions }) => [value, questions])
  ),
};

export default jsonFiles;
