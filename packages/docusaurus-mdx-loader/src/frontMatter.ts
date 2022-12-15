/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  JoiFrontMatter as Joi,
  validateFrontMatter,
} from '@docusaurus/utils-validation';

export type MDXFrontMatter = {
  format: 'md' | 'mdx';
};

export const DefaultMDXFrontMatter: MDXFrontMatter = {
  format: 'mdx', // TODO later => move to undefined (using file extension)
};

const MDXFrontMatterSchema = Joi.object<MDXFrontMatter>({
  format: Joi.string().equal('md', 'mdx').default(DefaultMDXFrontMatter.format),
}).default(DefaultMDXFrontMatter);

export function validateMDXFrontMatter(frontMatter: unknown): MDXFrontMatter {
  return validateFrontMatter(frontMatter, MDXFrontMatterSchema, {
    allowUnknown: false,
  });
}
