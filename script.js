  // Manual message navigation
  let currentIndexMessage = 0;
    
  function prevMessage() {
      currentIndexMessage = ($('.message-slider .message').length + currentIndexMessage - 1) % $('.message-slider .message').length;
      updateMessageSlider();
  }

  function nextMessage() {
      currentIndexMessage = (currentIndexMessage + 1) % $('.message-slider .message').length;
      updateMessageSlider();
  }

  function updateMessageSlider() {
      let translateValue = -currentIndexMessage * 100; // Slide one message at a time
      $('.message-slider ul').css('transform', 'translateX(' + translateValue + '%)');
  }

  // jQuery for image slider
  $(document).ready(function () {
      let currentIndexImage = 0;
      let images = $('.image-slider img');

      setInterval(function () {
          currentIndexImage = (currentIndexImage + 1) % images.length;
          updateImageSlider();
      }, 5000); // Change slide every 5 seconds

      function updateImageSlider() {
          images.hide().eq(currentIndexImage).show();
      }
  });

  // jQuery for message slider
  $(document).ready(function () {
      let messages = $('.message-slider .message');

      setInterval(function () {
          currentIndexMessage = (currentIndexMessage + 1) % messages.length;
          updateMessageSlider();
      }, 5000); // Change slide every 5 seconds
  });


// // Manual image slider navigation

// let currentIndexImage = 0;
// let currentIndexMessage = 0;

// // Function to fetch messages from JSON file
// function fetchMessages() {
//     fetch('messages.json') // Assuming your JSON file is named messages.json
//         .then(response => response.json())
//         .then(data => {
//             // Populate messages dynamically
//             populateMessages(data);
//         })
//         .catch(error => console.error('Error fetching messages:', error));
// }
// // Function to populate messages dynamically
// function populateMessages(messages) {
//     let messageList = $('.message-slider ul');
    
//     messages.forEach(message => {
//         let messageItem = `
//             <li class="message staff-message">
//                 <h2>${message.name}</h2>
//                 <p>${message.message}</p>
//             </li>
//         `;
//         messageList.append(messageItem);
//     });

//     // Update the message slider after populating messages
//     updateMessageSlider();
// }

// // Manual message navigation
// function prevMessage() {
//     currentIndexMessage = ($('.message-slider .message').length + currentIndexMessage - 1) % $('.message-slider .message').length;
//     updateMessageSlider();
// }

// function nextMessage() {
//     currentIndexMessage = (currentIndexMessage + 1) % $('.message-slider .message').length;
//     updateMessageSlider();
// }

// // Update the message slider
// function updateMessageSlider() {
//     let translateValue = -currentIndexMessage * 100;
//     $('.message-slider ul').css('transform', 'translateX(' + translateValue + '%)');
// }

// // Function to fetch and populate messages on document ready
// $(document).ready(function () {
//     fetchMessages();

//     // jQuery for image slider
//     let currentIndexImage = 0;
//       let images = $('.image-slider img');

//       setInterval(function () {
//           currentIndexImage = (currentIndexImage + 1) % images.length;
//           updateImageSlider();
//       }, 5000); // Change slide every 5 seconds

//       function updateImageSlider() {
//           images.hide().eq(currentIndexImage).show();
//       }
// });