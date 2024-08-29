exports.getData = () => {
    return {
        message: "Hello from the Application Tier!",
        timestamp: new Date().toISOString()
    };
};
