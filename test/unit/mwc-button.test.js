/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {assert} from 'chai';
import {Button} from '@material/mwc-button';
import {afterNextRender} from '@material/mwc-base/utils.js';

let element;

suite('mwc-button');

beforeEach(() => {
  element = document.createElement('mwc-button');
  document.body.appendChild(element);
});

afterEach(() => {
  document.body.removeChild(element);
});

test('initializes as an mwc-button', () => {
  assert.instanceOf(element, Button);
});

test('get/set disabled updates the disabled property on the native button element', async () => {
  element.disabled = true;
  await afterNextRender();
  const button = element.shadowRoot.querySelector('button');
  assert.equal(button.hasAttribute('disabled'), true);

  element.disabled = false;
  await afterNextRender();
  assert.equal(button.hasAttribute('disabled'), false);
});

test('setting `icon` adds an icon to the button', async () => {
  const ICON_SELECTOR = '.mdc-button__icon';

  await afterNextRender();
  let icon = element.shadowRoot.querySelector(ICON_SELECTOR);
  assert.equal(icon, null);

  element.icon = 'check';
  await afterNextRender();
  icon = element.shadowRoot.querySelector(ICON_SELECTOR);
  assert.instanceOf(icon, Element);

  element.icon = undefined;
  await afterNextRender();
  icon = element.shadowRoot.querySelector(ICON_SELECTOR);
  assert.equal(icon, null);
});
