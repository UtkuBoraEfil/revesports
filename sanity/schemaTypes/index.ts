import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { contactType } from "./contactType";
import { applicationType } from "./applicationType";
import { newsletterType } from "./newsletterType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    contactType,
    applicationType,
    newsletterType,
  ],
};
