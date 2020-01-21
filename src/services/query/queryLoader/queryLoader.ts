import * as fs from 'fs';

import WidgetFileType, { FileLoaderResponse } from '../../../types';
import { messages } from '../../../messages';

export default function queryLoader(widgetDir: string): Promise<FileLoaderResponse> {
    return new Promise((resolve, reject) => {
        fs.readFile(
            `${widgetDir}/${WidgetFileType.QUERY}`,
            'utf8',
            (error: Error, data: string) => {
                if (!data || error) {
                    reject(messages.invalidQuery());
                }

                resolve({
                    type: WidgetFileType.QUERY,
                    data,
                });
            },
        );
    });
}
