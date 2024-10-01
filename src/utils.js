import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';

export const getModuleFileName = (moduleUrl) => fileURLToPath(moduleUrl);
export const getModuleDirName = (moduleUrl) => dirname(getModuleFileName(moduleUrl));

export const isPathAccessible = async path => {
    try {
        await access(path);

        return true;
    } catch {
        return false;
    }
};