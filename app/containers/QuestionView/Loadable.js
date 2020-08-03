/**
 *
 * Asynchronously loads the component for QuestionView
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
