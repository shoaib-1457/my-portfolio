// import { useEffect, useRef } from "react";
// import "./styles/WhatIDo.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const WhatIDo = () => {
//   const containerRef = useRef<(HTMLDivElement | null)[]>([]);
//   const setRef = (el: HTMLDivElement | null, index: number) => {
//     containerRef.current[index] = el;
//   };
//   useEffect(() => {
//     if (ScrollTrigger.isTouch) {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.classList.remove("what-noTouch");
//           container.addEventListener("click", () => handleClick(container));
//         }
//       });
//     }
//     return () => {
//       containerRef.current.forEach((container) => {
//         if (container) {
//           container.removeEventListener("click", () => handleClick(container));
//         }
//       });
//     };
//   }, []);
//   return (
//     <div className="whatIDO">
//       <div className="what-box">
//         <h2 className="title">
//           W<span className="hat-h2">HAT</span>
//           <div>
//             I<span className="do-h2"> DO</span>
//           </div>
//         </h2>
//       </div>
//       <div className="what-box">
//         <div className="what-box-in">
//           <div className="what-border2">
//             <svg width="100%">
//               <line
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//               <line
//                 x1="100%"
//                 y1="0"
//                 x2="100%"
//                 y2="100%"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeDasharray="7,7"
//               />
//             </svg>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 0)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="0"
//                   x2="100%"
//                   y2="0"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>

//             <div className="what-content-in">
//               <h3>DEVELOP</h3>
//               <h4>Description</h4>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 quia aliquid laboriosam ducimus sit molestiae.
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">JavaScript</div>
//                 <div className="what-tags">TypeScript</div>
//                 <div className="what-tags">Three.js</div>
//                 <div className="what-tags">React</div>
//                 <div className="what-tags">Css</div>
//                 <div className="what-tags">Node.js</div>
//                 <div className="what-tags">Next.js</div>
//                 <div className="what-tags">Express.js</div>
//                 <div className="what-tags">PHP</div>
//                 <div className="what-tags">MySql</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//           <div
//             className="what-content what-noTouch"
//             ref={(el) => setRef(el, 1)}
//           >
//             <div className="what-border1">
//               <svg height="100%">
//                 <line
//                   x1="0"
//                   y1="100%"
//                   x2="100%"
//                   y2="100%"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeDasharray="6,6"
//                 />
//               </svg>
//             </div>
//             <div className="what-corner"></div>
//             <div className="what-content-in">
//               <h3>DESIGN</h3>
//               <h4>Description</h4>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                 quia aliquid laboriosam ducimus sit molestiae
//               </p>
//               <h5>Skillset & tools</h5>
//               <div className="what-content-flex">
//                 <div className="what-tags">Blender</div>
//                 <div className="what-tags">Zbrush</div>
//                 <div className="what-tags">UI Design</div>
//                 <div className="what-tags">Motion</div>
//                 <div className="what-tags">Rigging</div>
//                 <div className="what-tags">3D Animation</div>
//                 <div className="what-tags">Character Design</div>
//                 <div className="what-tags">Modelling</div>
//               </div>
//               <div className="what-arrow"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIDo;

// function handleClick(container: HTMLDivElement) {
//   container.classList.toggle("what-content-active");
//   container.classList.remove("what-sibling");
//   if (container.parentElement) {
//     const siblings = Array.from(container.parentElement.children);

//     siblings.forEach((sibling) => {
//       if (sibling !== container) {
//         sibling.classList.remove("what-content-active");
//         sibling.classList.toggle("what-sibling");
//       }
//     });
//   }
// }

import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Description</h4>
              <p>
                I am passionate developer skilled in DSA, problem-solving, and
                data analytics.I create efficient, scalable, and user-focused
                solutions with clean, maintainable, and optimized code.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">MsSQL</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Css</div>
                <div className="what-tags">Data Analytics</div>
                <div className="what-tags">Data Visualization</div>
                <div className="what-tags">Data Structures</div>
                <div className="what-tags">Data Management</div>
                <div className="what-tags">MySql</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DESIGN</h3>
              <h4>Description</h4>
              <p>
                I am creative designer skilled in graphic design, UI/UX design,
                and data visualization.I craft visually striking, user-centric,
                and impactful digital experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Blender</div>
                <div className="what-tags">Zbrush</div>
                <div className="what-tags">UI Design</div>
                <div className="what-tags">Motion</div>
                <div className="what-tags">Rigging</div>
                <div className="what-tags">3D Animation</div>
                <div className="what-tags">Character Design</div>
                <div className="what-tags">Modelling</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}