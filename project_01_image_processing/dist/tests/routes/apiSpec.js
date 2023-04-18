"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
describe('GET /api/images', function () {
    it('GET /api/images?filename=fjord&width=200&height=200 responds with IGM tag with src="/fjord-200-200.jpg"', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/api/images?filename=fjord&width=200&height=200')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('src="/fjord-200-200.jpg"');
    }));
    it('GET /api/images?filename=fjord&width=200 responds with IGM tag with src="/fjord-200-auto.jpg"', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/api/images?filename=fjord&width=200')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('src="/fjord-200-auto.jpg"');
    }));
    it('GET /api/images?filename=fjord&height=200 responds with IGM tag with src="/fjord-auto-200.jpg"', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/api/images?filename=fjord&height=200')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('src="/fjord-auto-200.jpg"');
    }));
    it('GET /api/images?filename=asdf&height=200 redirects to error page"', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/api/images?filename=asdf&height=200')
            .set('Accept', 'application/json');
        expect(response.redirect).toEqual(true);
    }));
});
