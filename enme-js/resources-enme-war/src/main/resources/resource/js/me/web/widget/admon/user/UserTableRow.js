/*
 * Copyright 2013 encuestame
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/***
 *  @author juanpicado19D0Tgm@ilDOTcom
 *  @version 1.146
 *  @module Admon
 *  @namespace Widget
 *  @class UserTableRow
 */
define([
         "dojo/_base/declare",
         "dojo/dom-construct",
         "dijit/registry",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dijit/_WidgetsInTemplateMixin",
         "dijit/form/CheckBox",
         "me/web/widget/pictures/AccountPicture",
         "me/core/main_widgets/EnmeMainLayoutWidget",
         "me/web/widget/admon/user/UserGroup",
         "me/core/enme",
         "dojo/text!me/web/widget/admon/user/template/UserTableRow.html" ],
        function(
                declare,
                domConstruct,
                registry,
                _WidgetBase,
                _TemplatedMixin,
                _WidgetsInTemplateMixin,
                CheckBox,
                AccountPicture,
                main_widget,
                UserGroup,
                _ENME,
                 template) {
            return declare([ _WidgetBase, _TemplatedMixin, main_widget, _WidgetsInTemplateMixin], {

          // template string.
            templateString : template,

            data: null,

            postMixInProperties: function(){},

            /**
             * Post Create.
             */
            postCreate: function() {
                this.buildDefaultRow();
            },

            /**
             * Build Default Row.
             */
            buildDefaultRow : function() {
                var data = this.data;
                this.createInput(data)
                this.createColumnDialog(data.username);
                this.createGroupWidget(data);
                this.createColumn(data.relateTimeEnjoy);
                this.buildStatus(data.status);
                this.createColumn(data.tweetPoll, true);
                this.createColumn(data.poll, true);
                this.createColumn(data.survey, true);
                this.createColumn(
                        dojo.date.locale.format(new Date(), {datePattern: "MM/dd/yy" , selector:'date'}), true);
                this.createColumn(data.followers == null ? 0 : data.followers, true);
            },

            /**
             * Build Options.
             */
            buildOptions : function(id){

            },

            /**
             * Create Column.
             * @method
             * @param
             * @param
             */
            createColumnDialog : function(text, centered) {
                 var td = domConstruct.create('td');
                 var a = domConstruct.create('a');
                 dojo.addClass(a, "link");
                 a.innerHTML = text;
                 a.href = "#";
                 //dojo.connect(a, "onclick", this, this.editUSer);
                 td.appendChild(a);
                 this._trbody.appendChild(td);
            },

            /*
             *
             */
            createGroupWidget : function(data){
                var td = domConstruct.create('td');
                var groupWidget = new UserGroup(
                        {
                         dataUser: data,
                         parentWidget: this
                         });
                td.appendChild(groupWidget.domNode);
                this._trbody.appendChild(td);
            },

            /**
             * Edit User.
             */
            editUSer : function(){
                var userEdit = registry.byId("userEdit");
                userEdit.data = this.data;
                if (userEdit != null) {
                    this.getUserInfo(this.data.id);
                }
            },

            /**
             * Get User.
             * @method
             */
            getUserInfo : function(id ) {
                var load = dojo.hitch(this, function(response) {
                    registry.byId("userEdit").show();
                    var data = response.success.user;
                    registry.byId("userEdit").title = data.username;
                    var name = registry.byId("name");
                    name.setValue(data.username);
                    var email = registry.byId("email");
                    email.setValue(data.email);
                    var realName = registry.byId("realName");
                    realName.setValue(data.name);
                    //set widgets
                    if (registry.byId("widgetPermission")) {
                        registry.byId("widgetPermission").user = data;
                        registry.byId("widgetPermission").initialize();
                    } else {
                        console.info("Permission Widget not found");
                    }
                });
                var error = function(error) {
                    console.debug("error", error);
                };
                //encuestame.service.xhrGet('encuestame.service.list.userInfo', {id: id}, load, error);
                this.getURLService().get('encuestame.service.list.userInfo', {id: id}, load, error , dojo.hitch(this, function() {}));
            },

            /**
             * Create Column.
             * @method
             */
            createColumn : function(text, centered) {
                var td = domConstruct.create('td');
                if (centered) {
                    td.setAttribute("align", "center");
                }
                td.innerHTML = text;
                this._trbody.appendChild(td);
            },

            /**
             * Create Input.
             * @method
             */
            createInput : function(data) {
                var td = domConstruct.create('td');
                var widgetInput = new AccountPicture({
                     username : data.username,
                     target : "_blank"
                 });
                td.appendChild(widgetInput.domNode);
                this._trbody.appendChild(td);
            },

            /**
             *
             * @method
             */
             buildStatus : function(status) {
                var td = domConstruct.create('td');
                td.innerHTML = status;
                this._trbody.appendChild(td);
             }
    });
});