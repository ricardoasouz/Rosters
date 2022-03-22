/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ActionFactory } from '../types';
import { ActionType, AlertInfo, AddAlertAction, RemoveAlertAction } from './types';

export const addAlert: ActionFactory<AlertInfo, AddAlertAction> = newAlert => ({
  type: ActionType.ADD_ALERT,
  alertInfo: newAlert,
});

export const removeAlert: ActionFactory<number, RemoveAlertAction> = id => ({
  type: ActionType.REMOVE_ALERT,
  id,
});
