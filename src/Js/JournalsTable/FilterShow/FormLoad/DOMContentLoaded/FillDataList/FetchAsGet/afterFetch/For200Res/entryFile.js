let StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalKeyDatalist = document.getElementById('KeyOptions');
    // const jVarLocalValueDatalist = document.getElementById('ValueOptions');

    inResponseAsJson.forEach(item => {
        const keyOption = document.createElement('option');
        keyOption.value = item.field;     
        keyOption.innerHTML = item.title;     
        keyOption.setAttribute("data-value", item.field);
        jVarLocalKeyDatalist.appendChild(keyOption);

        // const valueOption = document.createElement('option');
        // valueOption.value = item.field;      
        // valueOption.setAttribute("data-value", item.field); 
        // jVarLocalValueDatalist.appendChild(valueOption);
    });
};


export { StartFunc };
