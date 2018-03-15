export const fetchCurrentUserInfo = id => {
  return $.ajax({
    method: "GET",
    url: `api/users/${id}/trips`
  });
};
