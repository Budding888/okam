/**
 * @file Babel config
 * @author xiaohong8023@outlook.com
 */

'use strict';

const path = require('path');

module.exports = {
    env: {
        development: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                'babel-plugin-espower',
                'babel-plugin-empower-assert',
                [
                    'module-resolver',
                    {
                        alias: {
                            core: path.join(__dirname, 'src'),
                            test: path.join(__dirname, 'test')
                        }
                    }
                ]
            ]
        }
    }
};
