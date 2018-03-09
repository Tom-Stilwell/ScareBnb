export const fetchHomes = filters => {
  return $.ajax({
    method: "GET",
    url: "/api/homes",
    data: filters
  });
};

export const fetchHome = id => {
  return $.ajax({
    method: "GET",
    url: `api/homes/${id}`
  });
};

export const createHome = home => {
  return $.ajax({
    method: "POST",
    url: "/api/homes",
    data: home
  });
};

export const updateHome = home => {
  return $.ajax({
    method: "PATCH",
    url: `api/homes/${home.id}`,
    data: { home }
  });
};

export const destroyHome = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/homes/${id}`
  });
};
