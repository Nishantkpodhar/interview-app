import reactData from "./react.json";
import javascriptData from "./javascript.json";
import nextjsData from "./nextjs.json";
import cssData from "./css.json";
import nodeData from "./node.json";

const jsonFiles = {
  all: [
    ...reactData,
    ...javascriptData,
    ...nextjsData,
    ...cssData,
    ...nodeData,
  ],

  react: reactData,

  javascript: javascriptData,

  nextjs: nextjsData,

  css: cssData,

  node: nodeData,
};

export default jsonFiles;