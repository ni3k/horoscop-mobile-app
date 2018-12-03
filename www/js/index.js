/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

app.initialize();

var url_scraps = "https://astrologyanswers.com/horoscopes/";
var section = "-daily-horoscope/";



$(document).ready(() => {

    // $('.zod').click(function(){
    //      alert($(this).attr('id')); //$(this) is what you clicked!
    // })

    $(window).scroll(function() {
        var div1 = $("#mainNav");
        var div2 = $("#getit");
        var div1_top = div1.offset().top;
        var div2_top = div2.offset().top;
        var div1_bottom = div1_top + div1.height();
        var div2_bottom = div2_top + div2.height();

        if (div1_bottom >= div2_top && div1_top < div2_bottom) {
            // overlapped
            $('#mainNav').addClass('chromo');
            $('.navbar-brand').addClass('whitest');
            $('.nav-link').addClass('whitest');
            $('.navbar-toggler').addClass('whitest');
            $('.active').removeClass('whitest');
        }
        else {$('#mainNav').removeClass('chromo'); $('.navbar-brand').removeClass('whitest'); $('.nav-link').removeClass('whitest'); $('.navbar-toggler').removeClass('whitest');}
    }) 

   $('.zod').click(function() {
       // alert($(this).attr('id'))
        var current_zodia = $(this).attr('id');
        $('body').toggleClass('loaded');

       
        var url = url_scraps+current_zodia+section;
     //   var url = "https://astrologyanswers.com/horoscopes/aries-daily-horoscope/";
        $.get(url, function(response) {
            //$('body').toggleClass('loaded');

          console.log($(response).find('.horoscope_summary p:first').html());
          $('#prognoz').html($(response).find('.horoscope_summary p:first').html());
          $('#titlu').text(current_zodia);
          $('#afisare').modal();
          $('body').toggleClass('loaded');
          // $('#afisare').on('show.bs.modal', function (event) {
          //     var button = $(event.relatedTarget) // Button that triggered the modal
          //     var recipient = button.data('whatever') // Extract info from data-* attributes
          //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
          //     var modal = $(this)
          //     modal.find('.modal-title').text('New message to ' + recipient)
          //     modal.find('.modal-body input').val(recipient)
          //   })
        });
    })
})