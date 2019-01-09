/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { registerLanguage } from '../_.contribution';

registerLanguage({
	id: 'clojure',
	extensions: ['.clj', '.clojure'],
	aliases: ['clojure', 'Clojure'],
	loader: () => import('./clojure')
});
