/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  // {
  //   title: "A Batch Normalized Inference Network Keeps the KL Vanishing Away",
  //   authors:
  //     "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
  //   conferences:
  //     "The 58th Annual Meeting of the Association for Computational Linguistics",
  //   researchYr: 2020,
  //   citebox: "popup1",
  //   image: "assets/images/research-page/inteferenceNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 1",
  //   absbox: "absPopup1",
  // },
  {
    title: "CAR DAMAGE ASSESSMENT SYSTEM: A CLOUD-BASED SERVERLESS WEB APPLICATION POWERED BY DEFORMABLE CONVOLUTIONAL NETWORK PLUS",
    authors:
      "Sitthiwat Damrongpreechar",
    conferences:
      "Asian Institute of Technology Master's Degree Research Project",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/research-page/20.svg",
    citation: {
      vancouver:
        "Damrongpreechar S. CAR DAMAGE ASSESSMENT SYSTEM: A Cloud-Based Serverless Web Application Powered by Deformable Convolutional Network Plus. Master’s Degree Research Project, Asian Institute of Technology (AIT); 2025.",
    },
    abstract:
      "Accurate and efficient vehicle damage assessment remains a critical challenge in the automotive insurance industry. Manual inspections are time-consuming, costly, and prone to error, contributing to claims leakage and delayed settlements. As insurance providers increasingly seek automation to improve service speed and reduce operational costs, there is growing interest in AI-powered assessment systems.\n This study addresses these challenges by developing a cloud-based, serverless web application that performs real-time car damage assessment using deep learning. A Deformable Convolutional Network Plus (DCN+) model was trained on the Car Damage Detection (CarDD) dataset, which provides comprehensive annotations across six damage categories to support accurate instance segmentation. The system was deployed using AWS Fargate and integrated with a React frontend, while GPT-4o was used to generate interpretable natural language reports.\n The system achieved strong technical and user-centered performance. The trained model obtained a mean Average Precision (mAP) of 0.593 for bounding boxes and 0.559 for segmentation. All users in a usability study completed tasks successfully, with high ratings for clarity, efficiency, and ease of use. Replacing SageMaker with a containerized deployment on ECS improved cost control and compatibility but introduced cold-start delays and required more complex orchestration. User feedback also revealed opportunities to enhance the experience beyond core model accuracy—such as clearer post-assessment navigation, more visible report access, and support for optional manual damage confirmation—highlighting the importance of transparency, control, and interface design in fostering trust.\n This research demonstrates the feasibility and effectiveness of combining deep learning and serverless cloud infrastructure for automated car damage assessment. It contributes a scalable, explainable, and user-centered solution for streamlining claims processing, particularly in emerging markets like Thailand where digital transformation in insurance remains limited.",
    absbox: "absPopup1",
    link: "https://drive.google.com/drive/folders/101JmymchELxZ7O0qFOjrdMXSRSZlLbJl?usp=sharing",
  },
   {
    title: "Peer-to-Peer (P2P) Energy Trading Prototype Implementation with Private Ethereum Blockchain and WebSocket",
    authors:
      "Sitthiwat Damrongpreechar, Nuttapon Boonyaudomsart, Chalie Charoenlarpnopparut",
    conferences:
      "2024 International Conference on Smart Grid and Energy (ICSGE), IEEE",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/21.svg",
    citation: {
      vancouver:
        "S. Damrongpreechar, N. Boonyaudomsart and C. Charoenlarpnopparut, \"Peer-to-Peer (P2P) Energy Trading Prototype Implementation with Private Ethereum Blockchain and WebSocket,\" 2024 International Conference on Smart Grid and Energy (ICSGE), Singapore, Singapore, 2024, pp. 31-37, doi: 10.1109/ICSGE61115.2024.00013.",
    },
    abstract:
      "Peer-to-Peer (P2P) Energy Trading Prototype Implementation is presented in this paper. This study aims to design a prototype and implement it with a P2P energy trading system, private Ethereum blockchain, and WebSocket. A Raspberry Pi 3 Model B (Pi3B) hosts the WebSocket server for creating the duplex communication including the current sensors sensing and data transaction transmitting. The personal computer hosts the user interface and private Ethereum blockchain server. The private Ethereum blockchain is used to deploy smart contracts and store transaction data. ESP32-WROOM-32 micro-controllers are used to operate the peer circuits including the relays and current sensors. The prototype results show the operation of the prototype by performing the energy transfer simulation with different types of consumption loads in the determined time.",
    absbox: "absPopup1",
    link: "https://ieeexplore.ieee.org/document/10529573",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href=${link} class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
