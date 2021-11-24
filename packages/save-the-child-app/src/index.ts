import { getAsyncLifecycle } from '@openmrs/esm-framework';

function setupOpenMRS() {
  const moduleName = '@savethechild/extention-app';

  const options = {
    featureName: 'save-the-child-extention',
    moduleName,
  };

  return {
    //attach the ext to a slot
    extensions: [
      {
        id: 'child-happiness-widget',
        load: getAsyncLifecycle(() => import('./child-happiness-widget'), options),
      },
    ],
  };
}

export { setupOpenMRS };
