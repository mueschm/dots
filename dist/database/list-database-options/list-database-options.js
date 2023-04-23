"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseOptions = void 0;
const listDatabaseOptions = ({ httpClient, }) => () => {
    const path = '/databases/options';
    const url = `${path}`;
    return httpClient.get(url);
};
exports.listDatabaseOptions = listDatabaseOptions;
//# sourceMappingURL=list-database-options.js.map