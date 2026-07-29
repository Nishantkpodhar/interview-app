import reactData from "./react.json";
import javascriptData from "./javascript.json";
import nextjsData from "./nextjs.json";
import cssData from "./css.json";
import nodeData from "./node.json";
import pythonData from "./python.json";

const addCategory = (data, category) =>
  data.map((item) => ({ ...item, category }));

const reactItems = addCategory(reactData, "react");
const javascriptItems = addCategory(javascriptData, "javascript");
const nextjsItems = addCategory(nextjsData, "nextjs");
const cssItems = addCategory(cssData, "css");
const nodeItems = addCategory(nodeData, "node");
const pythonItems = addCategory(pythonData, "python");

const jsonFiles = {
  all: [
    ...reactItems,
    ...javascriptItems,
    ...nextjsItems,
    ...cssItems,
    ...nodeItems,
    ...pythonItems,
  ],

  react: reactItems,

  javascript: javascriptItems,

  nextjs: nextjsItems,

  css: cssItems,

  node: nodeItems,
  python: pythonItems,
};

export default jsonFiles;