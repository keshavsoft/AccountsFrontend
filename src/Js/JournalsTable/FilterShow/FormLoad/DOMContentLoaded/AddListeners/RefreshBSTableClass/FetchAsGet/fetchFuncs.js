import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalkeyInput = jFLocalToInputKeyInputId();
    let jVarLocalValueInput = jFLocalToInputValueInputId();

    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}/${jVarLocalkeyInput}/${jVarLocalValueInput}`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let jFLocalToInputKeyInputId = () => {
    const element = document.getElementById('KeyInputId');
    return element ? element.value : "";
};

let jFLocalToInputValueInputId = () => {
    const element = document.getElementById('ValueInputId');
    return element ? element.value : "";
};

export { StartFunc };
