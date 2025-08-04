let StartFunc = ({ inResponseAsJson }) => {
    const jVarLocalValueDatalist = document.getElementById('ValueOptions');

    inResponseAsJson.forEach(item => {
        const valueOption = document.createElement('option');
        valueOption.value = item; // Use string directly
        jVarLocalValueDatalist.appendChild(valueOption);
    });
};

export { StartFunc };
