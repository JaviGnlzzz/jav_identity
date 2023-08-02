$(() => {

  $('body').hide();
  
  let sex_selected = 0
  let value_height = $('#height').val();
  let gender = $('.identity-selection div').eq(sex_selected).data('gender')

  updateSelection()

  window.addEventListener('message', function(event){
    const {action} = event.data;

    if(action){
      $('body').fadeIn(300);
    }else{
      $('body').fadeOut(300);
    };
  })

  $('.identity-create').click(() => {

    const dofVal = $('#date').val();
    const name = $('#firstname').val();
    const lastname = $('#lastname').val();
  
    if(!dofVal || !name || !lastname){

      if(!$('.identity-create').hasClass('shake')){
        $('.identity-create').addClass('shake')
        setTimeout(() => {
          $('.identity-create').removeClass('shake')
        }, 800)
      }

    }else{
      const dateCheck = new Date(dofVal);

      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateCheck);
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateCheck);
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateCheck);
  
      const formattedDate = `${day}/${month}/${year}`;

      $.post(`https://${GetParentResourceName()}/register`, JSON.stringify({
        firstname: name,
        lastname: lastname,
        dateofbirth: formattedDate,
        sex: gender,
        height: value_height,
      }))

      $('.identity-create').addClass('fadeout')
    }   
  })


  $('.identity-selection .men').click(() => {
    sex_selected = 0
    updateSelection()
  })
  
  $('.identity-selection .women').click(() => {
    sex_selected = 1
    updateSelection()
  })

  function updateSelection(){
    
    $('.identity-selection i').css({'opacity' : '0.4'});
    $('.identity-selection i').eq(sex_selected).css({'opacity' : '1'});
    $('.range-text').text(value_height + 'cm');

    gender = $('.identity-selection div').eq(sex_selected).data('gender')

    $('#height').on('input', function() {
      value_height = $('#height').val();
      $('.range-text').text(value_height + 'cm');
    });
  };
})