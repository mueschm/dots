"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vpc = exports.volume = exports.tag = exports.sshKey = exports.snapshot = exports.size = exports.region = exports.project = exports.monitoring = exports.loadBalancer = exports.kubernetes = exports.image = exports.floatingIp = exports.firewall = exports.droplet = exports.domain = exports.database = exports.customer = exports.containerRegistry = exports.common = exports.certificate = exports.cdnEndpoint = exports.app = exports.action = exports.account = void 0;
const account = __importStar(require("./account"));
exports.account = account;
const action = __importStar(require("./action"));
exports.action = action;
const app = __importStar(require("./app"));
exports.app = app;
const cdnEndpoint = __importStar(require("./cdn-endpoint"));
exports.cdnEndpoint = cdnEndpoint;
const certificate = __importStar(require("./certificate"));
exports.certificate = certificate;
const common = __importStar(require("./common"));
exports.common = common;
const containerRegistry = __importStar(require("./container-registry"));
exports.containerRegistry = containerRegistry;
const customer = __importStar(require("./customer"));
exports.customer = customer;
const database = __importStar(require("./database"));
exports.database = database;
const domain = __importStar(require("./domain"));
exports.domain = domain;
const droplet = __importStar(require("./droplet"));
exports.droplet = droplet;
const firewall = __importStar(require("./firewall"));
exports.firewall = firewall;
const floatingIp = __importStar(require("./floating-ip"));
exports.floatingIp = floatingIp;
const image = __importStar(require("./image"));
exports.image = image;
const kubernetes = __importStar(require("./kubernetes"));
exports.kubernetes = kubernetes;
const loadBalancer = __importStar(require("./load-balancer"));
exports.loadBalancer = loadBalancer;
const monitoring = __importStar(require("./monitoring"));
exports.monitoring = monitoring;
const project = __importStar(require("./project"));
exports.project = project;
const region = __importStar(require("./region"));
exports.region = region;
const size = __importStar(require("./size"));
exports.size = size;
const snapshot = __importStar(require("./snapshot"));
exports.snapshot = snapshot;
const sshKey = __importStar(require("./ssh-key"));
exports.sshKey = sshKey;
const tag = __importStar(require("./tag"));
exports.tag = tag;
const volume = __importStar(require("./volume"));
exports.volume = volume;
const vpc = __importStar(require("./vpc"));
exports.vpc = vpc;
//# sourceMappingURL=modules.js.map