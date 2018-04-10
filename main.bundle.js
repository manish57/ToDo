webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-todo></app-todo>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_todo_todo_component__["a" /* TodoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\r\n    width: 50%;\r\n}\r\n\r\n.del {\r\n    margin-top: 5%; \r\n    width: 30%;\r\n    display: inline-block;\r\n}\r\n\r\n.list {\r\n    margin: 0 auto; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container box text-center\">\n  <div class=\"card mt-4\">\n    <div class=\"card-heading mt-2 mb-2\">\n      <h5>\n        <i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>\n        Todo List App\n      </h5>\n    </div>\n\n    <div class=\"card-body\">\n      <div class=\"add-new-task\">\n        <form class=\"input-group\" (submit)=\"addTodo()\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"inputText\" name=\"inputText\" placeholder=\"Add new task\" aria-label=\"Add new task\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"addTodo()\">\n              <i class=\"fa fa-plus\"></i>\n            </button>\n          </span>\n        </form>\n      </div>\n\n      <div *ngFor=\"let todo of todos\">\n        <div class=\"input-group\">\n          <div class=\"checkbox mt-1 list\">\n              <label>\n                <input type=\"checkbox\" (change)=\"updateTodoStatus($event, todo.text)\"> {{todo.text}}\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteTodo(todo.text)\">\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </button>\n              </label>\n          </div>\n        </div>\n      </div>\n\n      <button class=\"btn btn-lg btn-danger btn-block del\" (click)=deleteSelected()>Delete Selected</button>\n      <button class=\"btn btn-lg btn-danger btn-block del\" (click)=deleteAll()>Delete All</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.arr = [];
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todos = this._todoService.getTodos();
    };
    TodoComponent.prototype.addTodo = function () {
        var newTodo = {
            text: this.inputText
        };
        this.todos.push(newTodo);
        this._todoService.addTodo(newTodo);
        this.inputText = " ";
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].text == todo) {
                this.todos.splice(i, 1);
            }
        }
        this._todoService.deleteTodo(todo);
    };
    TodoComponent.prototype.updateTodoStatus = function (e, todo) {
        if (e.target.checked) {
            this.arr.push(todo);
        }
        else {
            console.log('not checked');
        }
    };
    TodoComponent.prototype.deleteSelected = function () {
        for (var i = 0; i < this.arr.length; i++) {
            this.deleteTodo(this.arr[i]);
        }
    };
    TodoComponent.prototype.deleteAll = function () {
        for (var i = 0; i < this.todos.length; i++) {
            this.todos.splice(i, this.todos.length);
        }
        this._todoService.deleteAllTodo();
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_todos__ = __webpack_require__("../../../../../src/init-todos.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function (_super) {
    __extends(TodoService, _super);
    function TodoService() {
        var _this = _super.call(this) || this;
        _this.load();
        return _this;
    }
    TodoService.prototype.getTodos = function () {
        var todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    };
    TodoService.prototype.addTodo = function (newTodo) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.deleteTodo = function (todo) {
        var todos = JSON.parse(localStorage.getItem('todos'));
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].text == todo) {
                todos.splice(i, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodoService.prototype.deleteAllTodo = function () {
        localStorage.clear();
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TodoService);
    return TodoService;
}(__WEBPACK_IMPORTED_MODULE_1__init_todos__["a" /* Init */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/init-todos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = /** @class */ (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No Todos in Local Storage..........');
            var todos = [];
            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }
        else {
            console.log('Todos Found.......');
        }
    };
    return Init;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map