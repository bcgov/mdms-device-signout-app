//
// DevHub
//
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Created by Jason Leach on 2018-08-24.
//

import { combineReducers } from 'redux';
import { SETTINGS_VISIBILITY } from '../constants';

const settings = (state = { isVisible: false }, action) => {
  switch (action.type) {
    case SETTINGS_VISIBILITY.SHOULD_HIDE:
      return { isVisible: false };
    case SETTINGS_VISIBILITY.SHOULD_SHOW:
      return { isVisible: true };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ settings });

export default rootReducer;
