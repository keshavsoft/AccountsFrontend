import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTables } from "./BuildBSTables/entryFile.js";
import { StartFunc as StartFuncFromFillDataList } from "./FillDataList/entryFile.js";
import { StartFunc as StartFuncFromValueInput } from "./ValueInput/entryFile.js";
// import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTables();
    StartFuncFromFillDataList();
    StartFuncFromValueInput();
    // StartFuncFromShowOnDom();
};

export { StartFunc };