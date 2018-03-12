export const selectAllHomes = state => Object.values(state.entities.homes);

export const selectRentals = (state, home) =>
  home ? home.rental_ids.map(id => state.entities.rentals[id]) : [];
