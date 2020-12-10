(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~feature-modules-posts-posts-module~feature-modules-profile-profile-module"],{

/***/ "./src/app/feature-modules/posts/comments-section/comments-section.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/feature-modules/posts/comments-section/comments-section.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CommentsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsSectionComponent", function() { return CommentsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/feature-modules/posts/posts.service.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _shared_module_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-module/input/input.component */ "./src/app/shared-module/input/input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _shared_module_util_buttons_util_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-module/util-buttons/util-buttons.component */ "./src/app/shared-module/util-buttons/util-buttons.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");










function CommentsSectionComponent_div_3_app_util_buttons_8_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-util-buttons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsSectionComponent_div_3_app_util_buttons_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const comment_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.onDeleteComment(comment_r56._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", ctx_r57.post);
} }
function CommentsSectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentsSectionComponent_div_3_app_util_buttons_8_Template, 3, 1, "app-util-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r56 = ctx.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r55.loggedinUser.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.loggedinUser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r56.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.loggedinUser._id === comment_r56.user);
} }
class CommentsSectionComponent {
    constructor(fb, postsService) {
        this.fb = fb;
        this.postsService = postsService;
    }
    ngOnInit() {
        this.form = this.fb.group({ comment: [''] });
    }
    onDeleteComment(commentId) {
        this.postsService.deleteComment(this.post._id, commentId);
    }
    onSubmitComment() {
        this.postsService.createComment(this.form.value, this.post._id, this.loggedinUser);
        this.form.get('comment').setValue('');
    }
}
CommentsSectionComponent.ɵfac = function CommentsSectionComponent_Factory(t) { return new (t || CommentsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
CommentsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsSectionComponent, selectors: [["app-comments-section"]], inputs: { comments: "comments", post: "post", loggedinUser: "loggedinUser" }, decls: 4, vars: 3, consts: [[1, "example-form", 3, "formGroup", "keydown.enter"], ["label", "Leave a comment", 3, "control"], ["style", "padding: 1rem 0; display: flex", 4, "ngFor", "ngForOf"], [2, "padding", "1rem 0", "display", "flex"], ["mat-card-avatar", "", 2, "display", "block", "margin-right", "1rem", 3, "src"], [2, "flex", "3"], [3, "post", 4, "ngIf"], [3, "post"], ["mat-menu-item", "", "color", "warn", 3, "click"]], template: function CommentsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function CommentsSectionComponent_Template_form_keydown_enter_1_listener() { return ctx.onSubmitComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommentsSectionComponent_div_3_Template, 9, 4, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.form.get("comment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_module_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_module_util_buttons_util_buttons_component__WEBPACK_IMPORTED_MODULE_7__["UtilButtonsComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9jb21tZW50cy1zZWN0aW9uL2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments-section',
                templateUrl: './comments-section.component.html',
                styleUrls: ['./comments-section.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }]; }, { comments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loggedinUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/create-post/create-post.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/feature-modules/posts/create-post/create-post.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/feature-modules/posts/posts.service.ts");
/* harmony import */ var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/feature-modules/auth/auth.service */ "./src/app/feature-modules/auth/auth.service.ts");
/* harmony import */ var _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-module/post-form/post-form.component */ "./src/app/shared-module/post-form/post-form.component.ts");






class CreatePostComponent {
    constructor(route, router, postsService, authService) {
        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.authService = authService;
        this.initialFormValue = {
            title: '',
            content: '',
            image: '',
        };
    }
    ngOnInit() {
        this.authService.user$.subscribe((userProfile) => {
            this.loggedInUser = userProfile;
        });
    }
    onCreatePost(post) {
        this.postsService.createPost(post).subscribe(() => {
            this.router.navigate(['./'], {
                relativeTo: this.route,
                queryParams: {
                    ts: Date.now().toString(),
                },
                queryParamsHandling: 'merge',
                skipLocationChange: true,
            });
        });
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 1, vars: 2, consts: [[3, "loggedInUser", "initialFormValue", "formSubmitted"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmitted", function CreatePostComponent_Template_app_post_form_formSubmitted_0_listener($event) { return ctx.onCreatePost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedInUser", ctx.loggedInUser)("initialFormValue", ctx.initialFormValue);
    } }, directives: [_shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_4__["PostFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/edit-post/edit-post.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/feature-modules/posts/edit-post/edit-post.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPostComponent", function() { return EditPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/feature-modules/posts/posts.service.ts");
/* harmony import */ var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/feature-modules/auth/auth.service */ "./src/app/feature-modules/auth/auth.service.ts");
/* harmony import */ var src_app_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-module/error/error.component */ "./src/app/shared-module/error/error.component.ts");
/* harmony import */ var _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared-module/spinner/spinner.component */ "./src/app/shared-module/spinner/spinner.component.ts");
/* harmony import */ var _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared-module/post-form/post-form.component */ "./src/app/shared-module/post-form/post-form.component.ts");











function EditPostComponent_app_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
} }
function EditPostComponent_app_post_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmitted", function EditPostComponent_app_post_form_2_Template_app_post_form_formSubmitted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onEditPost($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedInUser", ctx_r25.loggedInUser)("initialFormValue", ctx_r25.initialFormValue);
} }
class EditPostComponent {
    constructor(route, router, postsService, authService, errorService) {
        this.route = route;
        this.router = router;
        this.postsService = postsService;
        this.authService = authService;
        this.errorService = errorService;
        this.initialFormValue = {
            title: '',
            content: '',
            image: '',
        };
    }
    ngOnInit() {
        this.errorSub = this.errorService.error$.subscribe((error) => {
            this.errorMessage = error.error.message;
        });
        this.authSub = this.authService.user$.subscribe((user) => {
            this.loggedInUser = user;
        });
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((pm) => {
            this.postId = pm.get('id');
            this.loading = true;
            return this.postsService.fetchPost(this.postId);
        }))
            .subscribe((postValue) => {
            this.initialFormValue = postValue;
            this.loading = false;
        });
    }
    onEditPost(postValue) {
        this.postsService.updateMyPost(this.postId, postValue).subscribe(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
        });
    }
    ngOnDestroy() {
        this.errorSub.unsubscribe();
        this.authSub.unsubscribe();
    }
}
EditPostComponent.ɵfac = function EditPostComponent_Factory(t) { return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"])); };
EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPostComponent, selectors: [["app-edit-post"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "errorMessage"], [3, "loggedInUser", "initialFormValue", "formSubmitted", 4, "ngIf"], [3, "loggedInUser", "initialFormValue", "formSubmitted"]], template: function EditPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPostComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditPostComponent_app_post_form_2_Template, 1, 2, "app-post-form", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"], _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _shared_module_post_form_post_form_component__WEBPACK_IMPORTED_MODULE_9__["PostFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9lZGl0LXBvc3QvZWRpdC1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-post',
                templateUrl: './edit-post.component.html',
                styleUrls: ['./edit-post.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }, { type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/likes-dialog/likes-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/feature-modules/posts/likes-dialog/likes-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: LikesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesDialogComponent", function() { return LikesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/feature-modules/posts/posts.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-module/spinner/spinner.component */ "./src/app/shared-module/spinner/spinner.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








function LikesDialogComponent_app_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
} }
function LikesDialogComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r39.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r39.name);
} }
function LikesDialogComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LikesDialogComponent_ng_container_1_div_1_Template, 5, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.users);
} }
class LikesDialogComponent {
    constructor(dialogRef, postsService, data) {
        this.dialogRef = dialogRef;
        this.postsService = postsService;
        this.postId = data.postId;
    }
    ngOnInit() {
        this.loading = true;
        this.postsService.getLikes(this.postId).subscribe((users) => {
            this.loading = false;
            this.users = users;
        });
    }
}
LikesDialogComponent.ɵfac = function LikesDialogComponent_Factory(t) { return new (t || LikesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
LikesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikesDialogComponent, selectors: [["app-likes-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["mat-dialog-content", "", "style", "display: flex; margin-top: 0.5rem", 4, "ngFor", "ngForOf"], ["mat-dialog-content", "", 2, "display", "flex", "margin-top", "0.5rem"], ["mat-card-avatar", "", 2, "display", "block", "margin-right", "1rem", 3, "src"], [2, "margin", "auto 0"]], template: function LikesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LikesDialogComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LikesDialogComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9saWtlcy1kaWFsb2cvbGlrZXMtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-likes-dialog',
                templateUrl: './likes-dialog.component.html',
                styleUrls: ['./likes-dialog.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PostListHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListHomeComponent", function() { return PostListHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/feature-modules/posts/posts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/feature-modules/auth/auth.service */ "./src/app/feature-modules/auth/auth.service.ts");
/* harmony import */ var src_app_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-module/spinner/spinner.component */ "./src/app/shared-module/spinner/spinner.component.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-post/create-post.component */ "./src/app/feature-modules/posts/create-post/create-post.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post-list/post-list.component */ "./src/app/feature-modules/posts/post-list/post-list.component.ts");
/* harmony import */ var _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared-module/error/error.component */ "./src/app/shared-module/error/error.component.ts");












function PostListHomeComponent_app_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
} }
function PostListHomeComponent_ng_container_1_app_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error", 5);
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorMessage", ctx_r31.errorMessage);
} }
function PostListHomeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListHomeComponent_ng_container_1_app_error_1_Template, 1, 1, "app-error", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-create-post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-post-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteClicked", function PostListHomeComponent_ng_container_1_Template_app_post_list_deleteClicked_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onDeletePost($event); })("commentSubmitted", function PostListHomeComponent_ng_container_1_Template_app_post_list_commentSubmitted_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onCommentSubmit($event); })("postLiked", function PostListHomeComponent_ng_container_1_Template_app_post_list_postLiked_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onClickLike($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx_r29.posts)("loggedinUser", ctx_r29.loggedinUser);
} }
function PostListHomeComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No posts added yet.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [1, 3, 5]; };
class PostListHomeComponent {
    constructor(postsService, route, router, authService, errorService) {
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
            totalPage: 0,
        };
    }
    ngOnInit() {
        this.userSub = this.authService.user$.subscribe((user) => {
            this.loggedinUser = user;
        });
        this.errorSub = this.errorService.error$.subscribe((error) => {
            this.loading = false;
            this.errorMessage = error.error.message;
        });
        this.postsService.posts$.subscribe((posts) => {
            this.loading = false;
            this.posts = posts;
        });
        this.postsService.page$.subscribe((page) => {
            this.loading = false;
            this.page = page;
        });
        this.route.queryParamMap.subscribe((qp) => {
            const currentPage = +qp.get('page') || this.page.currentPage;
            const pageSize = +qp.get('pageSize') || this.page.pageSize;
            this.loading = true;
            this.postsService.fetchPosts(currentPage, pageSize);
        });
    }
    onDeletePost(id) {
        this.loading = true;
        this.postsService.deleteMyPost(id);
    }
    onClickLike({ postId }) {
        this.postsService.likePost(postId, this.loggedinUser._id);
    }
    onCommentSubmit({ commentValue, postId }) {
        this.postsService.createComment(commentValue, postId, this.loggedinUser);
    }
    onChangePage(e) {
        this.router.navigate(['./'], {
            relativeTo: this.route,
            queryParams: {
                page: e.pageIndex + 1,
                pageSize: e.pageSize,
            },
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.errorSub.unsubscribe();
    }
}
PostListHomeComponent.ɵfac = function PostListHomeComponent_Factory(t) { return new (t || PostListHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"])); };
PostListHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostListHomeComponent, selectors: [["app-post-list-home"]], decls: 4, vars: 7, consts: [[4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["class", "mat-body-1 info-text", 4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [3, "posts", "loggedinUser", "deleteClicked", "commentSubmitted", "postLiked"], [3, "errorMessage"], [1, "mat-body-1", "info-text"]], template: function PostListHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostListHomeComponent_app_spinner_0_Template, 1, 0, "app-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListHomeComponent_ng_container_1_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PostListHomeComponent_Template_mat_paginator_page_2_listener($event) { return ctx.onChangePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostListHomeComponent_p_3_Template, 2, 0, "p", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedinUser && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.page == null ? null : ctx.page.totalData)("pageSize", ctx.page == null ? null : ctx.page.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts.length <= 0 && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _shared_module_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_8__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_9__["PostListComponent"], _shared_module_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9wb3N0LWxpc3QtaG9tZS9wb3N0LWxpc3QtaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-list-home',
                templateUrl: './post-list-home.component.html',
                styleUrls: ['./post-list-home.component.css'],
            }]
    }], function () { return [{ type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_feature_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/post-list/post-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/feature-modules/posts/post-list/post-list.component.ts ***!
  \************************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../likes-dialog/likes-dialog.component */ "./src/app/feature-modules/posts/likes-dialog/likes-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_module_util_buttons_util_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-module/util-buttons/util-buttons.component */ "./src/app/shared-module/util-buttons/util-buttons.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comments-section/comments-section.component */ "./src/app/feature-modules/posts/comments-section/comments-section.component.ts");













const _c0 = function (a1) { return ["./", a1, "edit"]; };
function PostListComponent_div_0_app_util_buttons_9_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-util-buttons", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_div_0_app_util_buttons_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const post_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onDeleteClick(post_r41._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, post_r41._id));
} }
function PostListComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r41.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r41.title);
} }
function PostListComponent_div_0_app_comments_section_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comments-section", 15);
} if (rf & 2) {
    const post_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comments", post_r41.comments)("loggedinUser", ctx_r44.loggedinUser)("post", post_r41);
} }
function PostListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostListComponent_div_0_app_util_buttons_9_Template, 5, 4, "app-util-buttons", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostListComponent_div_0_div_15_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const post_r41 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.openLikesDialog(post_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const post_r41 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onCommentButtonClick(post_r41._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const post_r41 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.onLikeClick(post_r41._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " LIKE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PostListComponent_div_0_app_comments_section_27_Template, 1, 3, "app-comments-section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r41.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r41.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, post_r41.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.loggedinUser._id === post_r41.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r41.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r41.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r41.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.renderLikes(post_r41), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r40.renderCommentButton(post_r41.comments), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.renderLikeButton(post_r41.likes));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.commentSection === post_r41._id);
} }
class PostListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postLiked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    renderLikes(post) {
        const alreadyLiked = post.likes.find((userId) => userId === this.loggedinUser._id);
        if (alreadyLiked) {
            if (post.likes.length === 1) {
                return `You like this post`;
            }
            return `You and other ${post.likes.length - 1} people like this post`;
        }
        else {
            if (post.likes.length === 0) {
                return null;
            }
            return `${post.likes.length} people like this post`;
        }
    }
    renderLikeButton(likes) {
        return likes.find((id) => id === this.loggedinUser._id)
            ? 'favorite'
            : 'favorite_border';
    }
    renderCommentButton(comments) {
        if (comments.length > 0) {
            return `${comments.length} comments`;
        }
        if (comments.length <= 0) {
            return 'COMMENT';
        }
    }
    openLikesDialog(post) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.data = { postId: post._id };
        this.dialog.open(_likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LikesDialogComponent"], dialogConfig);
    }
    onLikeClick(postId) {
        this.postLiked.emit({ postId });
    }
    onCommentButtonClick(postId) {
        if (this.commentSection !== postId) {
            this.commentSection = postId;
        }
        else {
            this.commentSection = '';
        }
    }
    onDeleteClick(id) {
        this.deleteClicked.emit(id);
    }
    onDeleteComment(postId, commentId) {
        this.commentDeleted.emit({ postId, commentId });
    }
}
PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], inputs: { posts: "posts", loggedinUser: "loggedinUser" }, outputs: { deleteClicked: "deleteClicked", commentDeleted: "commentDeleted", postLiked: "postLiked" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], ["mat-card-avatar", "", 3, "src"], [3, "post", 4, "ngIf"], ["class", "image-container", 4, "ngIf"], ["align", "end", 2, "margin-bottom", "0"], [2, "margin-right", "auto"], ["mat-button", "", 3, "click"], ["color", "warn"], [3, "comments", "loggedinUser", "post", 4, "ngIf"], [3, "post"], ["mat-menu-item", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["mat-menu-item", "", "color", "warn", 3, "click"], [1, "image-container"], ["mat-card-image", "", 3, "src", "alt"], [3, "comments", "loggedinUser", "post"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostListComponent_div_0_Template, 28, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _shared_module_util_buttons_util_buttons_component__WEBPACK_IMPORTED_MODULE_7__["UtilButtonsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_10__["CommentsSectionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 1rem 0 1rem 0;\n}\n\nmat-card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 300px;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS1tb2R1bGVzL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtbW9kdWxlcy9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtIDAgMXJlbSAwO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-list',
                templateUrl: './post-list.component.html',
                styleUrls: ['./post-list.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loggedinUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], commentDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], postLiked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/posts-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/feature-modules/posts/posts-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-post/edit-post.component */ "./src/app/feature-modules/posts/edit-post/edit-post.component.ts");
/* harmony import */ var _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list-home/post-list-home.component */ "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts");






const routes = [
    {
        path: '',
        component: _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_3__["PostListHomeComponent"],
    },
    { path: ':id/edit', component: _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_2__["EditPostComponent"] },
];
class PostsRoutingModule {
}
PostsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsRoutingModule });
PostsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsRoutingModule_Factory(t) { return new (t || PostsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/posts.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/feature-modules/posts/posts.module.ts ***!
  \*******************************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/feature-modules/posts/posts-routing.module.ts");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-post/create-post.component */ "./src/app/feature-modules/posts/create-post/create-post.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/feature-modules/posts/post-list/post-list.component.ts");
/* harmony import */ var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-post/edit-post.component */ "./src/app/feature-modules/posts/edit-post/edit-post.component.ts");
/* harmony import */ var _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-list-home/post-list-home.component */ "./src/app/feature-modules/posts/post-list-home/post-list-home.component.ts");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments-section/comments-section.component */ "./src/app/feature-modules/posts/comments-section/comments-section.component.ts");
/* harmony import */ var _likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./likes-dialog/likes-dialog.component */ "./src/app/feature-modules/posts/likes-dialog/likes-dialog.component.ts");













class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
        _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"],
        _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"],
        _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__["EditPostComponent"],
        _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__["PostListHomeComponent"],
        _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_10__["CommentsSectionComponent"],
        _likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_11__["LikesDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]], exports: [_posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"],
                    _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"],
                    _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_8__["EditPostComponent"],
                    _post_list_home_post_list_home_component__WEBPACK_IMPORTED_MODULE_9__["PostListHomeComponent"],
                    _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_10__["CommentsSectionComponent"],
                    _likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_11__["LikesDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    src_app_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                exports: [_posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_7__["PostListComponent"]],
                entryComponents: [_likes_dialog_likes_dialog_component__WEBPACK_IMPORTED_MODULE_11__["LikesDialogComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature-modules/posts/posts.service.ts":
/*!********************************************************!*\
  !*** ./src/app/feature-modules/posts/posts.service.ts ***!
  \********************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PostsService {
    constructor(http) {
        this.http = http;
        this.url = '/api/posts';
        this.posts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.page$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            pageSize: 3,
            currentPage: 1,
            totalData: 0,
            totalPage: 0,
        });
    }
    getPosts() {
        return this.posts$.getValue();
    }
    fetchMyPosts() {
        this.http
            .get(`${this.url}/me`)
            .subscribe(({ data: posts }) => {
            this.posts$.next(posts);
        });
    }
    updateMyPost(postId, post) {
        let postData;
        if (typeof post.image === 'string') {
            postData = post;
        }
        if (typeof post.image === 'object') {
            postData = new FormData();
            postData.append('title', post.title);
            postData.append('content', post.content);
            postData.append('image', post.image);
        }
        return this.http.put(`${this.url}/${postId}/me`, postData);
    }
    deleteMyPost(id) {
        // optimistic update
        const prevPosts = this.posts$.getValue();
        this.posts$.next(this.posts$.getValue().filter((post) => post._id !== id));
        this.http.delete(`${this.url}/${id}/me`).subscribe(() => { }, (error) => {
            this.posts$.next(prevPosts);
        });
    }
    createPost(post) {
        const postData = new FormData();
        postData.append('title', post.title);
        postData.append('content', post.content);
        postData.append('image', post.image);
        return this.http.post(this.url, postData);
    }
    fetchPost(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    deletePost(postId) {
        return this.http.delete(`${this.url}/${postId}`);
    }
    fetchPosts(page, pageSize) {
        this.http
            .get(`${this.url}?page=${page}&pageSize=${pageSize}`)
            .subscribe((res) => {
            this.posts$.next(res.data);
            this.page$.next(res.page);
        });
    }
    getLikes(postId) {
        return this.http.get(`${this.url}/${postId}/like`);
    }
    likePost(postId, userId) {
        // optimistic update
        const posts = [...this.getPosts()];
        const index = posts.findIndex((post) => post._id === postId);
        const prevLikes = [...posts[index].likes];
        const alreadyLiked = posts[index].likes.find((id) => id === userId);
        if (alreadyLiked) {
            posts[index].likes = posts[index].likes.filter((id) => id !== userId);
        }
        else {
            posts[index].likes.push(userId);
        }
        this.posts$.next(posts);
        this.http
            .patch(`${this.url}/${postId}/like`, { userId })
            .subscribe((res) => {
            if (!res) {
                const likeIndex = posts[index].likes.findIndex((id) => id === userId);
                posts[index].likes.splice(likeIndex, 1);
                this.posts$.next(posts);
            }
        }, (error) => {
            posts[index].likes = prevLikes;
            this.posts$.next(posts);
        });
    }
    createComment(formValue, postId, loggedinUser) {
        const posts = [...this.getPosts()];
        const index = posts.findIndex((p) => p._id === postId);
        const prevComments = [...posts[index].comments];
        posts[index].comments = [
            ...posts[index].comments,
            {
                user: loggedinUser._id,
                avatar: loggedinUser.avatar,
                name: loggedinUser.name,
                content: formValue.comment,
            },
        ];
        this.http
            .post(`${this.url}/${postId}/comments`, formValue)
            .subscribe((comment) => {
            const comments = [...posts[index].comments];
            const lastIndex = comments.length - 1;
            comments[lastIndex] = comment;
        }, (error) => {
            posts[index].comments = prevComments;
        });
    }
    deleteComment(postId, commentId) {
        // optimistic update
        const posts = [...this.getPosts()];
        const index = posts.findIndex((post) => post._id === postId);
        const prevComments = [...posts[index].comments];
        const filteredComments = posts[index].comments.filter((comment) => comment._id !== commentId);
        posts[index].comments = filteredComments;
        this.posts$.next(posts);
        this.http
            .delete(`${this.url}/${postId}/comments/${commentId}`)
            .subscribe(() => { }, (error) => {
            posts[index].comments = prevComments;
        });
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~feature-modules-posts-posts-module~feature-modules-profile-profile-module-es2015.js.map