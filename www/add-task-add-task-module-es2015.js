(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-task-add-task-module"],{

/***/ "8jsn":
/*!*********************************************!*\
  !*** ./src/app/add-task/add-task.module.ts ***!
  \*********************************************/
/*! exports provided: AddTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPageModule", function() { return AddTaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-task-routing.module */ "am15");
/* harmony import */ var _add_task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task.page */ "z/ck");







let AddTaskPageModule = class AddTaskPageModule {
};
AddTaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTaskPageRoutingModule"]
        ],
        declarations: [_add_task_page__WEBPACK_IMPORTED_MODULE_6__["AddTaskPage"]]
    })
], AddTaskPageModule);



/***/ }),

/***/ "9NPQ":
/*!*********************************************!*\
  !*** ./src/app/add-task/add-task.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGFzay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "am15":
/*!*****************************************************!*\
  !*** ./src/app/add-task/add-task-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddTaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPageRoutingModule", function() { return AddTaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_task_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task.page */ "z/ck");




const routes = [
    {
        path: '',
        component: _add_task_page__WEBPACK_IMPORTED_MODULE_3__["AddTaskPage"]
    }
];
let AddTaskPageRoutingModule = class AddTaskPageRoutingModule {
};
AddTaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTaskPageRoutingModule);



/***/ }),

/***/ "sr2Q":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-task/add-task.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>add-task</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\"></ion-header>\n  <ion-item>\n    <ion-label position=\"floating\">Task Name</ion-label>\n    <!-- <ion-input type=\"hidden\" [(ngModel)]=\"task.email\"></ion-input> -->\n    <ion-input type=\"text\" [(ngModel)]=\"task.taskName\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Due Date</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"task.dueDate\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Due Time</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"task.dueTime\"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label position=\"floating\">Priority Level</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"task.priority\"></ion-input>\n  </ion-item> -->\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"task.description\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-button expand=\"block\" (click)=\"saveTask()\">Add Task</ion-button>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "z/ck":
/*!*******************************************!*\
  !*** ./src/app/add-task/add-task.page.ts ***!
  \*******************************************/
/*! exports provided: AddTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskPage", function() { return AddTaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_task_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-task.page.html */ "sr2Q");
/* harmony import */ var _add_task_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-task.page.scss */ "9NPQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AddTaskPage = class AddTaskPage {
    constructor(firestore, router, route) {
        this.firestore = firestore;
        this.router = router;
        this.route = route;
        this.task = {
            taskName: '',
            dueDate: '',
            dueTime: '',
            description: '',
        };
        this.taskID = 'new';
    }
    ngOnInit() {
        console.log(this.task);
        this.taskID = this.route.snapshot.params.taskID || 'new';
        if (this.taskID !== 'new') {
            this.firestore.doc('taskData/${this.taskID}')
                .valueChanges()
                .subscribe((task) => (this.task = task));
            console.log(this.firestore.doc('taskData/${this.taskID}'));
        }
    }
    saveTask() {
        if (this.taskID === 'new') {
            this.firestore.collection('taskData')
                .add(this.task)
                .then(() => {
                this.task = null;
                this.router.navigateByUrl('');
            });
        }
        else {
            this.firestore.doc('taskData/${this.taskID}')
                .update(this.task)
                .then(() => {
                this.task = null;
                this.router.navigateByUrl('');
            });
        }
    }
};
AddTaskPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddTaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-task',
        template: _raw_loader_add_task_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_task_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddTaskPage);



/***/ })

}]);
//# sourceMappingURL=add-task-add-task-module-es2015.js.map