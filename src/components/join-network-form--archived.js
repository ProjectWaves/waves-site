// import React from 'react';
// import { useForm } from '../utilities/hooks';
// import { css } from '@emotion/core';

// /* Leaving support in for React stateful forms, but
//   we're going to use Netlify for now. Commenting out the
//   React specific items and adding the Netlify form support
// */

// const JoinNetworkFormArchive = () => {
//   const confirmEntry = () => {
//     console.log(`
//     Entry submitted!
//     Name: ${input.name}
//     Address: ${input.address}
//     Phone: ${input.phone || 'No phone number provided'}
//     Email: ${input.email || 'No email address provided'}
//     `);
//   };
//   const { input, handleChange, handleSubmit } = useForm(confirmEntry);

//   return (
//     // <form
//     //   method="post"
//     //   name="waves-connected-two"
//     //   netlify-honeypot="bot-field"
//     //   data-netlify="true"
//     // >
//       {/* <input type="hidden" name="bot-field" />
//       <label>
//         Name
//         <input type="text" name="name" id="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" id="email" />
//       </label>
//       <label>
//         Subject
//         <input type="text" name="subject" id="subject" />
//       </label>
//       <label>
//         Message
//         <textarea name="message" id="message" rows="5" />
//       </label>
//       <button type="submit">Send</button>
//       <input type="reset" value="Clear" />
//     </form> */}
//     <form
//     method="post"
//     name="waves-connected"
//       data-netlify="true"
//       netlify-honeypot="bot-field"
// >
//     </form>
//     //   // onSubmit={handleSubmit}
//     // >
//     //   <div
//     //     css={css`
//     //       display: flex;
//     //       flex-direction: column;
//     //       justify-content: center;
//     //     `}
//     //   >
//     //     {/* <input type="hidden" name="bot-field" /> */}
//     //     <label for="name">Enter your full name:</label>
//     //     <input
//     //       name="name"
//     //       type="text"
//     //       // onChange={handleChange}
//     //       // value={input.name}
//     //       placeholder="First Last"
//     //       required
//     //     />
//     //     <label for="address">Enter your street address:</label>
//     //     <textarea
//     //       name="address"
//     //       id="address"
//     //       rows="5"
//     //       cols="33"
//     //       // onChange={handleChange}
//     //       // value={input.address}
//     //       placeholder="1234 Street Baltimore MD, 21202"
//     //     />
//     //     <label for="phone">Enter your phone number (optional):</label>
//     //     <input
//     //       name="phone"
//     //       type="tel"
//     //       id="phone"
//     //       // onChange={handleChange}
//     //       // value={input.phone}
//     //       placeholder="410-555-5555"
//     //       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//     //     />
//     //     <label for="email">Enter your email (optional):</label>
//     //     <input
//     //       name="email"
//     //       type="email"
//     //       size="50"
//     //       // onChange={handleChange}
//     //       // value={input.email}
//     //       placeholder="name@email.com"
//     //     />
//     //     <button
//     //       // type="submit"
//     //       css={css`
//     //         color: #121212;
//     //         background: #e5f8ff;
//     //         padding: 1rem;
//     //         font-size: 2rem;
//     //         margin-top: 1rem;
//     //         border: 2px solid #121212;
//     //         border-radius: 16px;
//     //         transition: all ease 0.3s;
//     //         text-transform: none;

//     //         &:hover {
//     //           color: #e5f8ff;
//     //           background: #121212;
//     //           border: 2px solid #e5f8ff;
//     //           cursor: pointer;
//     //         }
//     //         &:focus {
//     //           outline: 0.5px dashed #000;
//     //         }
//     //       `}
//     //     >
//     //       Join Now
//     //     </button>
//     //   </div>
//     // </form>
//   );
// };

// export default JoinNetworkFormArchive;
