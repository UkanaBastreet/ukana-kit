module.exports = {
  multiProject: false /* Enable searching projects with component folder path */,
  skipFinalStep: false /* Toggle final step agreement */,
  checkExistenceOnCreate: false /* Enable check folder for components which can be replaced */,
  folderPath:
    "src/" /* Destination path or array of paths to create components */,
  templatesFolder: "templates" /* Folder with templates */,
  templates: [
    {
      name: "component",
      files: {
        /* Component folder structure declaration */
        component: {
          name: "[name].tsx",
          file: [{ name: "fc.tmp", description: "Functional component" }],
          optional: false,
          default: true,
        },
        style: {
          name: "[name].module.scss",
          file: [{ name: "style.tmp", description: "Style file view" }],
          optional: false,
          default: true,
        },
        declare: {
          name: "[name].module.scss.d.ts",
          file: [{ name: "declare.tmp", description: "Declare file view" }],
          optional: false,
          default: true,
        },
      },
    },
  ],
  placeholders: {
    /* Template placeholders */
    NAME: ({ componentName }) => componentName,
    COMPONENT_FILE_PREFIX: ({ filePrefix }) => filePrefix,
    STYLE: ({ files }) =>
      files.style ? `\nimport s from './${files.style.name}';` : "",
    STORY_PATH: ({ join, project, destinationFolder, componentName }) =>
      join(project, destinationFolder, componentName),
  },
};
