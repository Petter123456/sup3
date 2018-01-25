class ExampleMailer < ApplicationMailer
  default from: "wyncodeemailer@gmail.com"


  def sample_email(user) #user from controller
    @user = user
    mail(to: @user.email, subject: 'Sample Email')
  end

end
