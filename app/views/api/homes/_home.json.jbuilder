
json.home do
  json.merge! home.attributes
  json.stars Home.getReviewAverages(home.id)
  json.rental_ids home.rentals.pluck(:id)
  json.review_ids home.reviews.pluck(:id)
end

json.rentals do
  home.rentals.each do |rental|
    json.set! rental.id do
      json.extract! rental, :id, :home_id, :user_id, :start_date, :end_date
    end
  end
end

json.reviews do
  home.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :reviewer_id, :home_id, :body
    end
  end
end
