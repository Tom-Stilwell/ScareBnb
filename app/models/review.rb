class Review < ApplicationRecord


  belongs_to :reviewer,
    class_name: "User",
    foreign_key: :reviewer_id,
    primary_key: :id

  belongs_to :home,
    class_name: "Home",
    foreign_key: :home_id,
    primary_key: :id
end
