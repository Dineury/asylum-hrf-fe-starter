import pieChart from '../../../assets/pie-chart.png';
 import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

const imgObj = [
  { src: barGraph, caption: "Search Grant Rates By Office", id: 1},
  { src: pieChart, caption: "Search Grant Rates By Nationality", id:2 },
  { src: lineGraph, caption: "Search Grant Rates Over Time", id: 3}
]

const infoObj = [
  {id: 4,number: '36%', text: "By the end of the Trump administration, the average asylum office\ngrant rate had fallen 36% from an average of 44 percent in fiscal year\n2016 to 28 percent in fiscal year 2020." },
  {id: 5,number: '5%', text: "The New York asylum office grant rate dropped to 5 percent in fiscal\nyear 2020." },
  {id: 6,number: '6x Lower', text: "Between fiscal year 2017 and 2020, the New York asylum office's\naverage grant rate was 6 times lower than the San Francisco asylum\noffice."}
]

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 21; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 12); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>

      <div className="flex flex-row justify-center" > 
       {
        imgObj.map(img => {
          return (
            <div key={img.id} >
            <img src={img.src} className='m-5 w-70 h-60 m' /> 
        <p>{img.caption}</p>
            </div>
          )
        })
       }

        
      </div>
      <br></br>
      <div className='flex flex-row justify-around'>
       <img src={paperStack} className='w-[45em] h-[27em] justify-self-center p-10 rounded-[50px] '/> 
       <p className='content-center pr-[100px] text-sm '  >Human Rights First has created a search tool to give you a user-friendly way to explore a<br></br>data set of asylum decisions between FY 2016 and May 2021 
        by the USCIS Asylum Office,<br></br> which we received through a Freedom of Information Act request. You can search for<br></br> information on asylum grant rates by year, nationality, and asylum office, 
        visualize the <br></br>data with charts and heat maps, and download the data set.</p>
      </div>
      
       <h2 className='text-4xl m-20 ' >Systemic Disparity Insights </h2>
       
       <div className='flex flex-row justify-evenly' >
       {
        infoObj.map(section => {
          return (
            <div  key={section.id} > 
            <h5 className='text-2xl' >{section.number}</h5> <br></br>
            <p className='text-sm whitespace-pre-line ' >{section.text}</p>
            </div>
          )
        })
       }
       </div>

       <div className='flex-c' >
        <button onClick={scrollToTop} className='m-10' >Back to Top ^</button>
       </div>

    </div>
  );
};
