import React from "react";
// import ReactJson from 'react-json-view';

function Results(props) {
  return (
    <section>
      <pre>
        {props.method} {props.url}
      </pre>
    </section>
  );
}

// function Results(props) {
//   return (
//     <section>
//       <pre>{
//         props.data
//           ? JSON.stringify(props.data)
//           : null
//           }</pre>
//     </section>
//   );

// }

export default Results;
