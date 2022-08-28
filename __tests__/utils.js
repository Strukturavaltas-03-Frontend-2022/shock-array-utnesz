const exportList = {};

const checkMember = async (path, memberName) => {
    if (exportList[memberName]) {
        return exportList[memberName];
    }

    exportList[memberName] = null;
    
    try {
        exportList[memberName] = await import(path).then( f => 
            f[memberName] );
    } catch(e)  {}

    return exportList[memberName];
};

export { 
    checkMember 
}