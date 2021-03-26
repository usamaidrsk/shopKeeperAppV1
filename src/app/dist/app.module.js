"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var slider_1 = require("@angular/material/slider");
var animations_1 = require("@angular/platform-browser/animations");
var auth_module_1 = require("./auth/auth.module");
var users_module_1 = require("./users/users.module");
var inventory_module_1 = require("./inventory/inventory.module");
var sales_module_1 = require("./sales/sales.module");
var reports_module_1 = require("./reports/reports.module");
var shared_module_1 = require("./shared/shared.module");
var db_service_service_1 = require("./shared/services/db_service.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                slider_1.MatSliderModule,
                animations_1.BrowserAnimationsModule,
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                inventory_module_1.InventoryModule,
                sales_module_1.SalesModule,
                reports_module_1.ReportsModule,
                shared_module_1.SharedModule,
            ],
            providers: [db_service_service_1.DBService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
