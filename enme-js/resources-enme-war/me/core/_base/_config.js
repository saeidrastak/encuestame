/**
 * Copyright 2014 encuestame
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
 *  @version 1.147
 *  @module ModuleName
 *  @namespace Widget
 *  @class FileName
 */

define([
		"dojo/_base/lang"
	],function(lang) {

	var _config = {
		contextPath : '../../json'

	};

	return {

		/**
		 *
		 * @param config
		 */
		merge : function(config) {
			if (config) {
				_config = lang.mixin(_config, config);
			}
		},

		/**
		 *
		 * @param property
		 * @param value
		 */
		set : function(property, value) {
			if (property && value) {
				_config[property] = value;
			}
		},

		/**
		 * Get a config value.
		 * @param value
		 */
		get : function (value) {
			return _config[value];
		}
	}
});
