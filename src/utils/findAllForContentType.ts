import { API_BASE_URL, ContentType } from "@/constants";

export const findAllForContentType = async <ContentTypeAttributes>(
  contentType: ContentType,
  populateAllFields = true
): Promise<StrapiAPIFindAllResponse<ContentTypeAttributes>> => {
  const queryParams = new URLSearchParams();
  if (populateAllFields) queryParams.append("populate", "*");
  const queryParamsString = queryParams.toString();

  const res = await fetch(
    `${API_BASE_URL}/${contentType}?${queryParamsString}`
  );
  const { data } = await res.json();

  return data;
};
