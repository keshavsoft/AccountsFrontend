import commonConfig from '../../../Config.json' with { type: 'json' };
// import { StartFunc as ForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    const $table = $('#table');

    commonConfig.onClickRow = StartFuncOnClickRowFunc;
    // ForColumns({ inColumns: finalOptions.columns });
    $table.bootstrapTable(finalOptions);
};

export { StartFunc };
