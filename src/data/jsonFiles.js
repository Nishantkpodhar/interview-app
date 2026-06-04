import reactData from "./react.json";
import javascriptData from "./javascript.json";
import nextjsData from "./nextjs.json";
import cssData from "./css.json";
import nodeData from "./node.json";

const addCategory = (data, category) =>
  data.map((item) => ({ ...item, category }));

const reactItems = addCategory(reactData, "react");
const javascriptItems = addCategory(javascriptData, "javascript");
const nextjsItems = addCategory(nextjsData, "nextjs");
const cssItems = addCategory(cssData, "css");
const nodeItems = addCategory(nodeData, "node");

const jsonFiles = {
  all: [
    ...reactItems,
    ...javascriptItems,
    ...nextjsItems,
    ...cssItems,
    ...nodeItems,
  ],

  react: reactItems,

  javascript: javascriptItems,

  nextjs: nextjsItems,

  css: cssItems,

  node: nodeItems,
};

export default jsonFiles;