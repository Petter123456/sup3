

    const productarea =   $('.productarea').val()
    //MINIMUM SALARY DEEPENING ON AREA OF EXPERTISE
    function MinSalaryIt() {
        if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
            return true
        }  else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "IT" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }     else if ($('.productarea .opts').val() === "IT" &&  Number($('.salary').val()) < 20000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
    };
    function MinSalaryFinance() {
        if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }
        else if ($('.productarea .opts').val() === "Finans/Ekonomi" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
            alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
            return true
        }     else if ($('.productarea .opts').val() === "Finans/Ekonomi" &&  Number($('.salary').val()) < 20000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
      };
    function MinSalaryMarketing() {
          if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                return true
            }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }
          else if ($('.productarea .opts').val() === "Marknadsföring" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
              alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
              return true
          }     else if ($('.productarea .opts').val() === "Marknadsföring" &&  Number($('.salary').val()) < 20000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
        };
    function MinSalaryCustomerService() {
              if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                    alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                    return true
                }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }
              else if ($('.productarea .opts').val() === "Kundtjänst" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                  return true
              }     else if ($('.productarea .opts').val() === "Kundtjänst" &&  Number($('.salary').val()) < 20000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
            };
    function MinSalaryTechnology() {
                  if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                        alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                        return true
                    }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }
                  else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                      return true
                  }     else if ($('.productarea .opts').val() === "Teknologi/Ingenjörer" &&  Number($('.salary').val()) < 20000){
                          alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                          return true
                      }
                };
    function MinSalaryLogistics() {
                              if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "1 year" && Number($('.salary').val()) < 33000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå");
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "Just Graduated" && Number($('.salary').val()) < 25000){
                                    alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                    return true
                                }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "2 years" && Number($('.salary').val()) < 37000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "3 years" && Number($('.salary').val()) < 40000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "4 years" && Number($('.salary').val()) < 45000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }
                              else if ($('.productarea .opts').val() === "Lager/Logistik" && $('.experience').val() === "5 years" && Number($('.salary').val()) < 50000){
                                  alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                  return true
                              }     else if ($('.productarea .opts').val() === "Lager/Logistik" &&  Number($('.salary').val()) < 20000){
                                      alert("Lönen ni erbjuder för den aktuella ställningen är för låg. Vänligen höj lönen till en mer attraktivt nivå")
                                      return true
                                  }
                            };
    //MINMUM SALARY DEEPENDING ON EXPERIANCE
    function experianceVsPositionPercentage(){
      var experience = $('.experience').val();
      var percentage = $('.percentage').val();

      if (percentage !== "100 %" && experience !== "Student" && experience !== "Nyexad") {
        alert("Personen du söker kommer inte att vara intresserad i en deltidstjänst. Vänligen uppdatera ställnings procenten eller sänk erfarenhets nivån till Nyexad.");
       return true
      };
    };

    //ON CLICK OF SHOW SUPPLIER RESTRICTIONS
    function showSuppliers(){$('.show').click(function (e){

      var isValid = true;
      // e.preventDefault(); // preventss default behavior
      if ($('.salary').val().length < 5) {
        alert("Lön för den aktuella ställningen är för låg, vänligen öka lönsnivån");
        isValid = false
      }
      else if(Date.parse($('.start_date').val()) > Date.parse($('.end_date').val())){
        alert("start datum kan inte förekomma efter slut datum");
        isValid = false
      }
      else if(Date.parse($('.start_date').val()) < Date.now()){
        alert("start datum måste förekomma efter dagens datum");
        isValid = false
      }
      else if (experianceVsPositionPercentage() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryIt() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryFinance() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryMarketing() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryCustomerService() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryTechnology() === true ){
        // return false
        isValid = false
      }
      else if (MinSalaryLogistics() === true ){
        // return false
        isValid = false
      }
      else {

        isValid = true
      };
      if (!isValid) {
        e.preventDefault();
        };
      });
    };
    ///// THIS WORKS!!!!THIS WORKS!!!!!!!!
    function choose_Supplier(){$('.välj_leverator').click(function(event){

      $('.btn.btn-primary.test').trigger('click')
          var productarea = $('.productarea').val()
          var position = $('#position').val()
          var start_date = $("#start_date").val()
          var end_date = $("#end_date").val()
          var city = $("#city").val()
          var percentage = $(".percentage").val()
          var experience = $(".experience").val()
          var salary = $("#salary").val()

          // var supplier = $('.supplier_table').closest('supplier_div');


          var supplier = event.target.closest('.supplier_div');
          var supplier_name = supplier.children[0].childNodes[1].textContent;

          var supplier_id = supplier.children[3].childNodes[1].textContent;
          var supplier_price = supplier.children[4].childNodes[1].textContent;
          var supplier_recruitment = supplier.children[2].childNodes[1].textContent;


          var type_of_service = $('.rent_or_recruit').val()

        var string =  "<p id='productarea'> Område: " + productarea +"</p>" + "<p id='position'> Tjänst: " + position +"</p>" + "<p id='start_date'> Start datum: " + start_date + "</p>" + "<p id='end_date'> Slut Datum: " + end_date + "</p>" + "<p id='city'> Stad: " + city + "</p>" + "<p id='percentage'> Ställningsprocent: " + percentage + "</p>" + "<p id='city'> Erfarenhet: " + experience + "</p>" +  "<p id='supplier_price'>" + supplier_price +"</p>"+ "<p id='supplier_recruitment'>" + supplier_recruitment +"</p>" + "<p id='supplier_name'> Leverantör: " + supplier_name + "</p>"+ "<p hidden id='supplier_id'>" + parseInt(supplier_id); + "</p>"+ "<p id='supplier_price'>" + supplier_price + "</p>";

        $('.modal-body').html(string);
        event.preventDefault();

        // SENDING DATA TO BACKEND VIA AJAXCALL
        $('.btn.btn-secondary.confirm_order').click(function(){
          $.ajax({
            type: "GET",
            url: "/confirm_order_and_email",
            data: {contracts: { productarea: productarea, position: position, start_date: start_date, end_date: end_date, city: city, percentage: percentage, experience: experience, salary: salary, supplier_name: supplier_name, supplier_id: supplier_id, supplier_price: supplier_price, productarea: productarea, type_of_service: type_of_service}}
          });
        });
      });
    };



$(document).on('ready', function(){

    showSuppliers();

    choose_Supplier();


  $('#productarea').val( localStorage.getItem("saveProductArea"));

  $('.experience').val( localStorage.getItem("saveExperiance"));

  $('.percentage').val( localStorage.getItem("savePercentage"));

  $('.start_date').val( localStorage.getItem("saveStartDate"));

  $('.end_date').val( localStorage.getItem("saveEndDate"));

  $('.city').val( localStorage.getItem("saveCity"));

$('.position').val( localStorage.getItem("savePosition"));
});



function myFunction(e){

  var prodArea = $('#productarea').val()
  var experience = $('.experience').val()
  var percentage = $('.percentage').val()
  var startdate = $('.start_date').val()
  var enddate = $('.end_date').val()
  var city = $('.city').val()
  var position = $('.position').val()



  localStorage.setItem("saveProductArea", prodArea);
  localStorage.setItem("saveExperiance", experience);
  localStorage.setItem("savePercentage", percentage);
  localStorage.setItem("saveStartDate", startdate);
  localStorage.setItem("saveEndDate", enddate);
  localStorage.setItem("saveCity", city);
  localStorage.setItem("savePosition", position);

  //document.getElementById("main_form").submit();



  if (document.getElementsByClassName("supplier_div")[0]) {
    // console.log("hej hej")
    //document.getElementById("reset").click();
    window.location.reload()
  };
}



function notLoggedIn(){
  if ($('.petterpetter').text()
 === "false"){
    alert("Vänligen logga in för att göra en beställning");
    document.getElementById("login").click();
  } else if ($('.petterpetter').text()
==="true") {
  alert("Tack för din beställning! Du har nu fått en orderbekräftelse till din mail, och leverantören du valde kommer kontakta dig inom kort")
  document.getElementById("reset").click();


  }

}


// VIKTIGT ATTT SPARA TILL LÖN OM DEN INTE SKALL GÅ ATT ÄNDRA
// , readonly: params["salary"] ? true : false
//
// function localStor(){
//
//
//   // document.getElementById("productarea").addEventListener("click", function(){
//   //   localStorage.setItem("productarea10", $('.productarea').val());
//   //
//   //    console.log(localStorage.getItem("productarea10"));
//   //
//   //
//   //
//   //
//   // });
//
//   // $('.productarea') = localStorage.getItem("productarea10");
//
//
//
// addEventListener('DOMContentLoaded', function(){
//   document.querySelector('select[name="assitance"]').onchange=changeEventHandler;},false);
//
//
// function changeEventHandler(event){
//  localStorage.setItem("productarea10", $('.productarea').val());
// };
//
//
// };