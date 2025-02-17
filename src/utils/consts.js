/**
 * Slinkity-specific data attributes
 * Applied to mount points and associated scripts
 *
 * @typedef SlinkityAttrs
 * @property {string} id - ID to identify mount points in the DOM for hydration
 * @property {string} ssr - true / false flag to identify mount points that need SSR on server request / on production build
 
 * @type {SlinkityAttrs}
 */
const SLINKITY_ATTRS = {
  id: 'data-s-id',
  ssr: 'data-s-needs-ssr',
}

/**
 * @typedef ImportAliases
 * @property {string} root - alias for importing resources from the project root (`process.cwd()`)
 * @property {string} input - alias for importing from the project input directory, as specified in 11ty's dir.input
 * @property {string} includes - alias for importing from the project includes directory, as specified in 11ty's dir.includes
 * @property {string} layouts - alias for importing from the project layouts directory, as specified in 11ty's dir.layouts
 */
const IMPORT_ALIASES = {
  root: '/@root',
  input: '/@input',
  includes: '/@includes',
  layouts: '/@layouts',
}

const PACKAGES = {
  client: 'slinkity/client',
}

/**
 * Name for the web component used to mount React
 */
const SLINKITY_REACT_MOUNT_POINT = 'slinkity-react-mount-point'

/**
 * File name for user slinkity config files
 */
const SLINKITY_CONFIG_FILE_NAME = 'slinkity.config'

module.exports = {
  SLINKITY_ATTRS,
  SLINKITY_CONFIG_FILE_NAME,
  SLINKITY_REACT_MOUNT_POINT,
  IMPORT_ALIASES,
  PACKAGES,
}
