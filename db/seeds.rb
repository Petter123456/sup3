# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Supplier.create(company: "Framtiden", company_number: nil, company_representative: nil, second_representative: nil, email: "petter.fagerlund@gmail.com", telephone: nil, city: "göteborg", recruitment_percentage: "25", description: "Vi är bäst på unga talanger med upp till 5 års erf...")if Supplier.count == 0

Supplier.create(company: "Effektiv", company_number: nil, company_representative: nil, second_representative: nil, email: "petter.fagerlund@gmail.com", telephone: nil, city: "göteborg", recruitment_percentage: "30", description: "För vinnare i arbetslivet")if Supplier.count == 1

Price.create(it: "3.0", finance: "2.3", call_center: "2.0", logisticts: "2.0", marketing: "2.1", technology: "2.8", supplier_id: 1)if Price.count == 0

Price.create(it: "1.0", finance: "2.6", call_center: "2.1", logisticts: "1.5", marketing: "2.0", technology: "2.4", supplier_id: 2)if Price.count == 1

User.create(id:11, name:"petter", email:"petter.fagerlund@gmail.com", password:"123")if User.count == 0
