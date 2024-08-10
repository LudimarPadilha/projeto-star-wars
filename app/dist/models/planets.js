"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planets = void 0;
const typeorm_1 = require("typeorm");
const starsystems_1 = require("./starsystems");
let Planets = class Planets {
};
exports.Planets = Planets;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Planets.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planets.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planets.prototype, "clima", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Planets.prototype, "terreno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Planets.prototype, "populacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => starsystems_1.SistemasEstelares, sistemasEstelar => sistemasEstelar.sistemaEstelar),
    (0, typeorm_1.JoinColumn)({ name: 'sistemaEstelarId' }),
    __metadata("design:type", starsystems_1.SistemasEstelares)
], Planets.prototype, "sistemaEstelar", void 0);
exports.Planets = Planets = __decorate([
    (0, typeorm_1.Entity)()
], Planets);
;
