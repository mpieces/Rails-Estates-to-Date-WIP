module UsersHelper

   # Returns the current logged-in user, if any.
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  # Returns T if the user is logged in; F otherwise.
  def logged_in?
    !current_user.nil?
  end

end
