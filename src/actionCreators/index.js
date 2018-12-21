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
// Created by Jason Leach on 2018-09-04.
//

import axios from 'axios';
import { hideSettings, showSettings } from '../actions';
import { API } from '../constants';

const axi = axios.create({
  baseURL: API.BASE_URL(),
});
// const apiPollTimeout = 3000;
// const maxStatusCheckCount = (120 * 1000) / apiPollTimeout;
// let statusCheckCount = 0;

// const authenticationHeaderValue = () => {
//   let token = '';
//   try {
//     token = implicitAuthManager.idToken.bearer;
//   } catch (err) {
//     console.log('No JWT for authenticaiton.');
//   }
//   return `Bearer ${token}`;
// };
export const foo = () => dispatch => {
  dispatch(showSettings());
};

export const bar = () => dispatch => {
  dispatch(hideSettings());
};

export const test = () => {
  console.log('0******************', API.MSMS_ORG_GROUPS());
  return axi
    .get(API.MSMS_ORG_GROUPS(), {
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        // Authorization: 'dfdfdf',
      },
    })
    .then(res => {
      console.log('1******************');
      console.log(res.data);
    })
    .catch(err => {
      console.log('2******************');
      console.log(err.message);
    });
};
