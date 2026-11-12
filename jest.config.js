module.exports = { testEnviromkent: "node", 
    collectCoverageFrom: ["src/**/*.js", "!src/server.js"],
    coverageThreshold: { global: { lines: 80, branches: 70}}
}