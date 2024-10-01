import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getModuleFileName = (moduleUrl) => fileURLToPath(moduleUrl);
export const getModuleDirName = (moduleUrl) => dirname(getModuleFileName(moduleUrl));
