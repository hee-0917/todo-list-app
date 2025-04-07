const config = {
    server: "localhost\\SQLEXPRESS",
    database: "EvaluationDB",
    user: "your_username",
    password: "your_password",
    options: {
        trustServerCertificate: true,
        enableArithAbort: true,
        encrypt: false
    }
};

module.exports = config;
