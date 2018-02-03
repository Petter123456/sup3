class ConfirmationMailer < ApplicationMailer
  default from: "wyncodeemailer@gmail.com"

    def confirmation_email(user) #user from controller
      @user = user
      mail(to: @user.email, subject: 'Sample Email')
      mail(to: 'petter.fagerlund@gmail.com', subject: 'Admin Email')
    end

    # def supplier_order_confirmation (supplier)
    #   @supplier = supplier
    #   mail(to: @supplier.email, subject: 'Sample Email')
    # end
    #
    # def admin_order_confirmation (admin)
    #   @admin = admin
    #   mail(to: 'petter.fagerlund@gmail.com', subject: 'Sample Email')
    # end

end
