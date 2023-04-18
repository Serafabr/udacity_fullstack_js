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
describe('GET /', function () {
    it('GET / responds with main page', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('Click on any image to resize it!');
    }));
    it('GET /upload responds with upload page', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/upload')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<input class="form__input" type="file" name="image" id="image">');
    }));
    it('GET /resize/:imgPath responds with resize page for some image', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .get('/resize/fjord.jpg')
            .set('Accept', 'application/json');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<img src="/fjord.jpg" alt="Image">');
    }));
});
describe('POST /upload', function () {
    it('POST /upload save a new image', () => __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.default)
            .post('/upload');
        expect(response.status).toEqual(302);
    }));
});
