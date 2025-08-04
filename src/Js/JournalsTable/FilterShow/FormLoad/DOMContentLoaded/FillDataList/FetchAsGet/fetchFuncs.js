// import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    // let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `/V2/JournalsTable/ReadSchema/Both`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };