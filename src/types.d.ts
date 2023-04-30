type AuthorAttributes = {
  email: string;
};

type PostAttributes = {
  title: string;
  author: {
    data: ContentTypeRecordResponse<AuthorAttributes>;
  };
};

type ContentTypeRecordResponse<ContentTypeAttributes> = {
  id: string;
  attributes: ContentTypeAttributes;
};

type StrapiAPIFindAllResponse<ContentTypeAttributes> =
  ContentTypeRecordResponse<ContentTypeAttributes>[];
