function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feature-modules-posts-posts-module~feature-modules-profile-profile-module"], {
  /***/
  "./src/app/feature-modules/posts/create-post/create-post.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/feature-modules/posts/create-post/create-post.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CreatePostComponent */

  /***/
  function srcAppFeatureModulesPostsCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
      return CreatePostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/feature-modules/posts/posts.service.ts");
    /* harmony import */


    var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/feature-modules/auth/auth.service */
    "./src/app/feature-modules/auth/auth.service.ts");
    /* harmony import */


    var _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared-module/post-form/post-form.component */
    "./src/app/shared-module/post-form/post-form.component.ts");

    var CreatePostComponent =
    /*#__PURE__*/
    function () {
      function CreatePostComponent(route, router, postsService, authService) {
        _classCallCheck(this, CreatePostComponent);

        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.authService = authService;
        this.initialFormValue = {
          title: '',
          content: '',
          image: ''
        };
      }

      _createClass(CreatePostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.user$.subscribe(function (userProfile) {
            _this.loggedInUser = userProfile;
          });
        }
      }, {
        key: "onCreatePost",
        value: function onCreatePost(post) {
          var _this2 = this;

          this.postsService.createPost(post).subscribe(function () {
            _this2.router.navigate(['./'], {
              relativeTo: _this2.route,
              queryParams: {
                ts: Date.now().toString()
              },
              queryParamsHandling: 'merge',
              skipLocationChange: true
            });
          });
        }
      }]);

      return CreatePostComponent;
    }();

    CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) {
      return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreatePostComponent,
      selectors: [["app-create-post"]],
      decls: 1,
      vars: 2,
      consts: [[3, "loggedInUser", "initialFormValue", "formSubmitted"]],
      template: function CreatePostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmitted", function CreatePostComponent_Template_app_post_form_formSubmitted_0_listener($event) {
            return ctx.onCreatePost($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedInUser", ctx.loggedInUser)("initialFormValue", ctx.initialFormValue);
        }
      },
      directives: [_shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_4__["PostFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-post',
          templateUrl: './create-post.component.html',
          styleUrls: ['./create-post.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/edit-post/edit-post.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/feature-modules/posts/edit-post/edit-post.component.ts ***!
    \************************************************************************/

  /*! exports provided: EditPostComponent */

  /***/
  function srcAppFeatureModulesPostsEditPostEditPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPostComponent", function () {
      return EditPostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/feature-modules/posts/posts.service.ts");
    /* harmony import */


    var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/feature-modules/auth/auth.service */
    "./src/app/feature-modules/auth/auth.service.ts");
    /* harmony import */


    var src_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared-module/error/error.component */
    "./src/app/shared-module/error/error.component.ts");
    /* harmony import */


    var _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared-module/spinner/spinner.component */
    "./src/app/shared-module/spinner/spinner.component.ts");
    /* harmony import */


    var _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared-module/post-form/post-form.component */
    "./src/app/shared-module/post-form/post-form.component.ts");

    function EditPostComponent_app_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
      }
    }

    function EditPostComponent_app_post_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmitted", function EditPostComponent_app_post_form_2_Template_app_post_form_formSubmitted_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onEditPost($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedInUser", ctx_r28.loggedInUser)("initialFormValue", ctx_r28.initialFormValue);
      }
    }

    var EditPostComponent =
    /*#__PURE__*/
    function () {
      function EditPostComponent(route, router, postsService, authService, errorService) {
        _classCallCheck(this, EditPostComponent);

        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.authService = authService;
        this.errorService = errorService;
        this.initialFormValue = {
          title: '',
          content: '',
          image: ''
        };
      }

      _createClass(EditPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.errorSub = this.errorService.error$.subscribe(function (error) {
            _this3.errorMessage = error.error.message;
          });
          this.authSub = this.authService.user$.subscribe(function (user) {
            _this3.loggedInUser = user;
          });
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (pm) {
            _this3.postId = pm.get('id');
            _this3.loading = true;
            return _this3.postsService.getPost(_this3.postId);
          })).subscribe(function (postValue) {
            _this3.initialFormValue = postValue;
            _this3.loading = false;
          });
        }
      }, {
        key: "onEditPost",
        value: function onEditPost(postValue) {
          var _this4 = this;

          this.postsService.updateMyPost(this.postId, postValue).subscribe(function () {
            _this4.router.navigate(['../../'], {
              relativeTo: _this4.route
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.errorSub.unsubscribe();
          this.authSub.unsubscribe();
        }
      }]);

      return EditPostComponent;
    }();

    EditPostComponent.ɵfac = function EditPostComponent_Factory(t) {
      return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]));
    };

    EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPostComponent,
      selectors: [["app-edit-post"]],
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], [3, "errorMessage"], [3, "loggedInUser", "initialFormValue", "formSubmitted", 4, "ngIf"], [3, "loggedInUser", "initialFormValue", "formSubmitted"]],
      template: function EditPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPostComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPostComponent_app_post_form_2_Template, 1, 2, "app-post-form", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_9__["PostFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9lZGl0LXBvc3QvZWRpdC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-post',
          templateUrl: './edit-post.component.html',
          styleUrls: ['./edit-post.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
        }, {
          type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PostListHomeComponent */

  /***/
  function srcAppFeatureModulesPostsPostListHomePostListHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListHomeComponent", function () {
      return PostListHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/feature-modules/posts/posts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/feature-modules/auth/auth.service */
    "./src/app/feature-modules/auth/auth.service.ts");
    /* harmony import */


    var src_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared-module/spinner/spinner.component */
    "./src/app/shared-module/spinner/spinner.component.ts");
    /* harmony import */


    var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../create-post/create-post.component */
    "./src/app/feature-modules/posts/create-post/create-post.component.ts");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../post-list/post-list.component */
    "./src/app/feature-modules/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared-module/error/error.component */
    "./src/app/shared-module/error/error.component.ts");

    function PostListHomeComponent_app_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
      }
    }

    function PostListHomeComponent_ng_container_1_app_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 5);
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", ctx_r34.errorMessage);
      }
    }

    function PostListHomeComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListHomeComponent_ng_container_1_app_error_1_Template, 1, 1, "app-error", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-create-post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-post-list", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteClicked", function PostListHomeComponent_ng_container_1_Template_app_post_list_deleteClicked_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.onDeletePost($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.errorMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx_r32.posts)("loggedinUser", ctx_r32.loggedinUser);
      }
    }

    function PostListHomeComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No posts added yet.\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return [1, 3, 5];
    };

    var PostListHomeComponent =
    /*#__PURE__*/
    function () {
      function PostListHomeComponent(postsService, route, router, authService, errorService) {
        _classCallCheck(this, PostListHomeComponent);

        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.errorService = errorService;
        this.posts = [];
        this.page = {
          pageSize: 3,
          currentPage: 1,
          totalData: 0,
          totalPage: 0
        };
      }

      _createClass(PostListHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userSub = this.authService.user$.subscribe(function (user) {
            _this5.loggedinUser = user;
          });
          this.errorSub = this.errorService.error$.subscribe(function (error) {
            _this5.loading = false;
            _this5.errorMessage = error.error.message;
          });
          this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (qp) {
            var currentPage = +qp.get('page') || _this5.page.currentPage;
            var pageSize = +qp.get('pageSize') || _this5.page.pageSize;
            _this5.loading = true;
            return _this5.postsService.getPosts(currentPage, pageSize);
          })).subscribe(function (res) {
            _this5.posts = res.data;
            _this5.page = res.page;
            _this5.loading = false;
          });
        }
      }, {
        key: "onDeletePost",
        value: function onDeletePost(id) {
          var _this6 = this;

          this.loading = true;
          this.errorMessage = '';
          this.postsService.deleteMyPost(id).subscribe(function (deletedPost) {
            _this6.posts = _this6.posts.filter(function (post) {
              return post._id !== deletedPost._id;
            });
            _this6.loading = false;

            _this6.reloadPage();
          });
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(e) {
          this.router.navigate(['./'], {
            relativeTo: this.route,
            queryParams: {
              page: e.pageIndex + 1,
              pageSize: e.pageSize
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
          this.errorSub.unsubscribe();
        }
      }, {
        key: "reloadPage",
        value: function reloadPage() {
          this.router.navigate(['./'], {
            relativeTo: this.route,
            queryParams: {
              ts: Date.now().toString()
            },
            queryParamsHandling: 'merge',
            skipLocationChange: true
          });
        }
      }]);

      return PostListHomeComponent;
    }();

    PostListHomeComponent.ɵfac = function PostListHomeComponent_Factory(t) {
      return new (t || PostListHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]));
    };

    PostListHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostListHomeComponent,
      selectors: [["app-post-list-home"]],
      decls: 4,
      vars: 7,
      consts: [[4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["class", "mat-body-1 info-text", 4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [3, "posts", "loggedinUser", "deleteClicked"], [3, "errorMessage"], [1, "mat-body-1", "info-text"]],
      template: function PostListHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostListHomeComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListHomeComponent_ng_container_1_Template, 4, 3, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-paginator", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PostListHomeComponent_Template_mat_paginator_page_2_listener($event) {
            return ctx.onChangePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostListHomeComponent_p_3_Template, 2, 0, "p", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedinUser && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.page.totalData)("pageSize", ctx.page.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length <= 0 && !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_9__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_10__["PostListComponent"], _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9wb3N0LWxpc3QtaG9tZS9wb3N0LWxpc3QtaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-list-home',
          templateUrl: './post-list-home.component.html',
          styleUrls: ['./post-list-home.component.css']
        }]
      }], function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/post-list/post-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/feature-modules/posts/post-list/post-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppFeatureModulesPostsPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function PostListComponent_div_0_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_horiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r40);
      }
    }

    function PostListComponent_div_0_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
      }

      if (rf & 2) {
        var post_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r38.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r38.title);
      }
    }

    var _c0 = function _c0(a1) {
      return ["./", a1, "edit"];
    };

    function PostListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostListComponent_div_0_button_9_Template, 3, 1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_div_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var post_r38 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.onDeleteClick(post_r38._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PostListComponent_div_0_img_22_Template, 1, 2, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LIKE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SHARE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r38 = ctx.$implicit;

        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r38.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r38.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, post_r38.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.loggedinUser._id === post_r38.user._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, post_r38._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r38.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r38.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r38.image);
      }
    }

    var PostListComponent =
    /*#__PURE__*/
    function () {
      function PostListComponent() {
        _classCallCheck(this, PostListComponent);

        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PostListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDeleteClick",
        value: function onDeleteClick(id) {
          this.deleteClicked.emit(id);
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ɵfac = function PostListComponent_Factory(t) {
      return new (t || PostListComponent)();
    };

    PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostListComponent,
      selectors: [["app-post-list"]],
      inputs: {
        posts: "posts",
        loggedinUser: "loggedinUser"
      },
      outputs: {
        deleteClicked: "deleteClicked"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], ["mat-card-avatar", "", 3, "src"], ["mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["more_options", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["mat-menu-item", "", "color", "warn", 3, "click"], [1, "image"], ["mat-card-image", "", 3, "src", "alt", 4, "ngIf"], ["align", "end"], ["mat-button", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-card-image", "", 3, "src", "alt"]],
      template: function PostListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostListComponent_div_0_Template, 28, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 1rem 0 1rem 0;\n}\n\nmat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        posts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loggedinUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/posts-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/feature-modules/posts/posts-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PostsRoutingModule */

  /***/
  function srcAppFeatureModulesPostsPostsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function () {
      return PostsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-post/edit-post.component */
    "./src/app/feature-modules/posts/edit-post/edit-post.component.ts");
    /* harmony import */


    var _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post-list-home/post-list-home.component */
    "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts");

    var routes = [{
      path: '',
      component: _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_3__["PostListHomeComponent"]
    }, {
      path: ':id/edit',
      component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__["EditPostComponent"]
    }];

    var PostsRoutingModule = function PostsRoutingModule() {
      _classCallCheck(this, PostsRoutingModule);
    };

    PostsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostsRoutingModule
    });
    PostsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostsRoutingModule_Factory(t) {
        return new (t || PostsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/posts.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/feature-modules/posts/posts.module.ts ***!
    \*******************************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppFeatureModulesPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts-routing.module */
    "./src/app/feature-modules/posts/posts-routing.module.ts");
    /* harmony import */


    var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared-module/shared.module */
    "./src/app/shared-module/shared.module.ts");
    /* harmony import */


    var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-post/create-post.component */
    "./src/app/feature-modules/posts/create-post/create-post.component.ts");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./post-list/post-list.component */
    "./src/app/feature-modules/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-post/edit-post.component */
    "./src/app/feature-modules/posts/edit-post/edit-post.component.ts");
    /* harmony import */


    var _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./post-list-home/post-list-home.component */
    "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts");

    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
    PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostsModule_Factory(t) {
        return new (t || PostsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, {
        declarations: [_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__["EditPostComponent"], _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__["PostListHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
        exports: [_posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__["EditPostComponent"], _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__["PostListHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
          exports: [_posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-modules/posts/posts.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/feature-modules/posts/posts.service.ts ***!
    \********************************************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppFeatureModulesPostsPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PostsService =
    /*#__PURE__*/
    function () {
      function PostsService(http) {
        _classCallCheck(this, PostsService);

        this.http = http;
        this.url = '/api/posts';
      }

      _createClass(PostsService, [{
        key: "getMyPosts",
        value: function getMyPosts() {
          return this.http.get("".concat(this.url, "/me"));
        }
      }, {
        key: "deleteMyPost",
        value: function deleteMyPost(id) {
          return this.http["delete"]("".concat(this.url, "/").concat(id, "/me"));
        }
      }, {
        key: "updateMyPost",
        value: function updateMyPost(postId, post) {
          var postData;

          if (typeof post.image === 'string') {
            postData = post;
          }

          if (typeof post.image === 'object') {
            postData = new FormData();
            postData.append('title', post.title);
            postData.append('content', post.content);
            postData.append('image', post.image);
          }

          return this.http.put("".concat(this.url, "/").concat(postId, "/me"), postData);
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return this.http.get("".concat(this.url, "/").concat(id));
        }
      }, {
        key: "getPosts",
        value: function getPosts(page, pageSize) {
          return this.http.get("".concat(this.url, "?page=").concat(page, "&pageSize=").concat(pageSize));
        }
      }, {
        key: "createPost",
        value: function createPost(post) {
          var postData = new FormData();
          postData.append('title', post.title);
          postData.append('content', post.content);
          postData.append('image', post.image);
          return this.http.post(this.url, postData);
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          return this.http["delete"]("".concat(this.url, "/").concat(postId));
        }
      }]);

      return PostsService;
    }();

    PostsService.ɵfac = function PostsService_Factory(t) {
      return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostsService,
      factory: PostsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~feature-modules-posts-posts-module~feature-modules-profile-profile-module-es5.js.map