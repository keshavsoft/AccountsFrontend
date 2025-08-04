import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    // let jVarLocalInputValue = jFLocalToInputKeyInputId();
    let jVarLocalFetchUrl = `/V2/JournalsTable/${jVarLocalGetEndPoint}/AccountName`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let jFLocalToInputKeyInputId = (inValue) => {
    let jVarLocalHtmlId = 'KeyInputId';
    let jVarLocalKeyInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalKeyInputId === null === false) {
        jVarLocalKeyInputId.value = inValue;
    };
};
export { StartFunc };