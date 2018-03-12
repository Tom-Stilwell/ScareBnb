class HomeRentalRequest < ApplicationRecord
  validates :start_date, :end_date, :status, presence: true
  validates :status, inclusion: ["PENDING", "APPROVED", "DENIED"]

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :home,
    class_name: "Home",
    foreign_key: :home_id,
    primary_key: :id

  validate :start_must_come_before_end
  validate :does_not_overlap_approved_request

  after_initialize :ensure_approved # for development and showing


  def approve!
    raise 'not pending' unless self.status == 'PENDING'

    transaction do
      self.status = 'APPROVED'
      self.save!
      overlapping_pending_requests.update_all(status: 'DENIED')
    end
  end


  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  def pending?
    self.status == 'PENDING'
  end

  private

  def ensure_approved
    self.status = 'APPROVED'
  end

  def overlapping_requests
    HomeRentalRequest
      .where.not(id: self.id)
      .where(home_id: home_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requests
    overlapping_requests.where('status = \'PENDING\'')
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] <<
        'Request conflicts with existing approved request'
    end
  end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << 'must come before end date'
    errors[:end_date] << 'must come after start date'
  end

end
