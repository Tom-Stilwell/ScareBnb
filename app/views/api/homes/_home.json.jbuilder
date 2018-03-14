
json.home do
  json.merge! home.attributes
  json.stars Home.get_review_averages(home.id)
  json.rental_ids home.rentals.pluck(:id)
  json.review_ids home.reviews.pluck(:id)
  json.reviewer_ids home.reviewers.distinct.pluck(:id)
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
      json.extract! review, :id, :reviewer_id, :home_id, :body, :created_at
    end
  end
end

json.reviewers do
  home.reviewers.distinct.each do |reviewer|
    json.set! reviewer.id do
      json.extract! reviewer, :id, :fname, :lname
    end
  end
end
