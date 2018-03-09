class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  validates :password_digest, :session_token, :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :homes,
    class_name: "Home",
    foreign_key: :host_id,
    primary_key: :id



  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email.downcase)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_random_token
    SecureRandom.urlsafe_base64
  end

  def email=(email)
    super(email.downcase)
  end

  def reset_session_token!
    self.session_token = User.generate_random_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_random_token
  end

end
