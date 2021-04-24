(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Task Stack\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <section *ngIf=\"(afAuth.user | async) as user; else loginItems\">\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Enter task\" [(ngModel)]=\"taskName\"> \n      </ion-input>\n      <div class=\"item-note\" >\n        <ion-button (click)=\"addTask()\"><ion-icon name=\"add\"></ion-icon></ion-button>\n      </div>\n    </ion-item>\n    <div padding>\n      <ion-list>\n        <ion-item *ngFor=\"let todo of taskList; let i = index\">\n          {{todo}}\n          <div class=\"item-note\" slot=end>\n            <ion-button fill=clear (click)=\"updateTask(i)\">\n              <ion-icon name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button fill=clear (click)=\"deleteTask(i)\">\n              <ion-icon name=\"trash\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n    <ion-button (click)=\"logout()\">TEMPORARY Logout</ion-button>\n    \n  </section>\n </ion-content>\n\n\n\n<ng-template #loginItems>\n  <h1>Welcome to TaskApp!</h1>\n  <ion-item>\n    <ion-label>\n      Email\n    </ion-label>\n    <ion-input [(ngModel)]=\"user.email\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      Password\n    </ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"createAccount()\">Sign Up</ion-button>\n  <ion-button (click)=\"login()\">Login</ion-button>\n  <ion-button (click)=\"recoverPassword()\">Forgot Password?</ion-button>\n\n  \n  </ng-template>\n\n\n\n\n<!-- \n\n<ion-content [fullscreen]=\"true\">\n  <section *ngIf=\"(afAuth.user | async) as user; else loginItems\">\n    <ion-list>\n      <ion-item *ngFor=\"let task of taskData\" routerLink=\"/add-task/{{ task.taskID }}\">\n        \n        <ion-label>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                {{ task.taskName }}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"1\">\n                <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\">\n                {{ task.dueDate }}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"1\">\n                <ion-icon name=\"time-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\">\n                {{ task.dueTime }}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"1\">\n                <ion-icon name=\"document-text-outline\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"10\">\n                {{ task.description }}\n              </ion-col>\n            </ion-row>\n            \n          </ion-grid>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button routerLink=\"/add-task/new\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-button (click)=\"logout()\">TEMPORARY Logout</ion-button>\n  </section> -->\n\n  <!-- <ion-card>\n    <ion-card-content>\n      <ion-card-title>Task Stack Introduction</ion-card-title>\n      <ion-card-title color=\"success\">Priority Level: Low</ion-card-title>\n      <ion-card-title>Due on 3/9 at 9 PM</ion-card-title>\n      <ion-card-header>This is the task stack! This is where all tasks created in the \"Add Task\" tab will be displayed.</ion-card-header>\n        <ion-button (click)=completeButton() slot=\"start\" color=\"success\">\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=moveButton() slot=\"end\" color=\"warning\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>Host Project on Turing</ion-card-title>\n      <ion-card-title color=\"warning\">Priority Level: Medium</ion-card-title>\n      <ion-card-title>Due on 3/8 at 11:59 PM</ion-card-title>\n      <ion-card-header>Host the \"www\" file for the app on Turing. Check the project 4 instructions for the correct directory!</ion-card-header>\n        <ion-button (click)=completeButton() slot=\"start\" color=\"success\">\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=moveButton() slot=\"end\" color=\"warning\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>Submit Project 4</ion-card-title>\n      <ion-card-title color=\"danger\">Priority Level: High</ion-card-title>\n      <ion-card-title>Due on 3/8 at 11:59 PM</ion-card-title>\n      <ion-card-header>Submit the zipped project 4, written report, and website URL to Blackboard. Test the URL before submitting!</ion-card-header>\n        <ion-button (click)=completeButton() slot=\"start\" color=\"success\">\n          <ion-icon name=\"checkmark-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)= moveButton() slot=\"end\" color=\"warning\">\n          <ion-icon name=\"arrow-redo-outline\"></ion-icon>\n        </ion-button>\n    </ion-card-content>\n  </ion-card> -->\n\n  <!----<ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 2</ion-title>\n    </ion-toolbar>\n  </ion-header>---->\n\n  <!-- TEMPORARY LOGIN SOLUTION -->\n\n  \n\n\n    \n    \n<!-- </ion-content> -->";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(afAuth, firestore, alertCtrl, navCtrl) {
          _classCallCheck(this, HomePage);

          this.afAuth = afAuth;
          this.firestore = firestore;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.user = {
            email: '',
            password: ''
          };
          this.taskList = [];
          this.taskName = '';
        }

        _createClass(HomePage, [{
          key: "addTask",
          value: function addTask() {
            if (this.taskName.length > 0) {
              var task = this.taskName;
              this.taskList.push(task);
              this.taskName = "";
            }
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(index) {
            this.taskList.splice(index, 1);
          }
        }, {
          key: "updateTask",
          value: function updateTask(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Update Task?',
                        message: 'Type in your new task to update.',
                        inputs: [{
                          name: 'editTask',
                          placeholder: 'Task'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Update',
                          handler: function handler(data) {
                            _this.taskList[index] = data.editTask;
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createAccount",
          value: function createAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.afAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);

                    case 2:
                      user = _context2.sent;

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.afAuth.signOut();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "recoverPassword",
          value: function recoverPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
                        cssClass: 'home.page.css',
                        header: 'Recover Your Password',
                        subHeader: 'Please enter the email associated with your account, and you will be sent a link to reset your password.',
                        inputs: [{
                          name: 'email',
                          type: 'email',
                          placeholder: 'example@gmail.com'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel Success');
                          }
                        }, {
                          text: 'Send Password Reset Email',
                          handler: function handler(reset) {
                            console.log('Send Email Clicked Success'); // this.sendResetEmail(console.log(reset));

                            console.log(reset.email);

                            _this2.afAuth.sendPasswordResetEmail(reset.email).then(function (res) {
                              console.log('Reset email has been sent');
                            }, function (error) {
                              console.log("Catch error");
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "sendResetEmail",
          value: function sendResetEmail(reset) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.afAuth.sendPasswordResetEmail(reset).then(function (res) {
                        console.log('Reset email has been sent');
                      }, function (error) {
                        console.log("Catch error");
                      });

                    case 2:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map