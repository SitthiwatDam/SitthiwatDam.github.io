AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  // {
  //   title: "Quiz App",
  //   cardImage: "assets/images/project-page/quiz.jpg",
  //   description: "A quiz app built using basic react.",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  {
    title: "Student Layers Initialization",
    cardImage: "assets/images/project-page/6.svg",
    description: "Exploring the Student Layers Initialization via distillation using BERT Huggingface.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Student_Layer_Initialization",
  },
  {
    title: "AIT GPT Chatbot",
    cardImage: "assets/images/project-page/7.svg",
    description: "Flask-based web app integrating the AIT-GPT chatbot with Langchain-RAG and \"Fastchat-T5-3B-v1.0\" model. It uses GPT2 for basic AIT-related conversations, optimized for hardware. Development details in Langchain_RAG.ipynb.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/AIT_GPT_Chatbot",
  },
  {
    title: "Instruction Tuning with hf-AlpacaEval",
    cardImage: "assets/images/project-page/8.svg",
    description: "Flask-based web app integrating instruction tuning for the 'distilgpt2' model using Hugging Face, Alpaca Format, and Alpaca Eval. Users can input instructions, and the model generates responses. Development details in AlpacaInstructionTuning.ipynb.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Instruction_Tuning_with_hf-AlpacaEval",
  },
  {
    title: "CISS Dashboard",
    cardImage: "assets/images/project-page/9.svg",
    description: "An interactive dashboard for analyzing Crash Investigation Sampling System (CISS) data. It provides insights into crash outcomes, vehicle safety, and driver behavior. Built with React and hosted on AWS Amplify, it offers dynamic filtering and rich visualizations for exploring crash-related data.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/CISS_dashboard",
  },
  {
    title: "MATHPLOT-VQA",
    cardImage: "assets/images/project-page/10.svg",
    description: "Interactive VQA web app for math charts using Flask and React. Upload a graph and ask questions—our system combines a MATCHA-based chart summarizer with a MiniChat-3B QA model to generate insightful answers. Fine-tuned with the AutoChart dataset. Full pipeline and evaluation included.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/MATHPLOT-VQA",
  },
  {
    title: "Backorder Prediction",
    cardImage: "assets/images/project-page/11.svg",
    description: "Implementation of a backorder prediction system, aimed at forecasting instances where products may become temporarily unavailable due to insufficient stock levels.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/BackOrderPrediction",
  },
  {
    title: "Car-Price-Prediction-from-Scratch",
    cardImage: "assets/images/project-page/12.svg",
    description: "Some Companies manufacture cars but struggle with pricing them effectively. The solution involves utilizing a machine learning model trained on car price datasets to develop a straightforward web-based car price prediction system.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Car-Price-Prediction-from-Scratch",
  },
  {
    title: "Car-Price-Prediction-Linear-Regression-Regularization-Momentum-from-Scratch",
    cardImage: "assets/images/project-page/13.svg",
    description: "Using the Car Price dataset but with the code from scratch, implement more regularization and momentum techniques on top of linear regression, perform some experiments using ML flow, and lastly deploy the docker to a prepared virtual machine.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Car-Price-Prediction-Linear-Regression-Regularization-Momentum-from-Scratch",
  },
  {
    title: "Car-Price-Prediction-Logistic-Regression",
    cardImage: "assets/images/project-page/14.svg",
    description: "Using the Car Price dataset but treating the problem as classification. This work implements Logistic Regression and adds some more features on top, perform some experiments using ML flow, and lastly deploy to docker to a prepared virtual machine.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Car-Price-Prediction-Logistic-Regression",
  },
  {
    title: "Sentence BERT",
    cardImage: "assets/images/project-page/15.svg",
    description: "This project is emphasis on leveraging text embeddings and capturing semantic similarity using a powerful encoder like BERT.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Sentence_BERT",
  },
  {
    title: "Resume Parser",
    cardImage: "assets/images/project-page/16.svg",
    description: "Creating a resume parser. Users will upload their resume in PDF format, and the system will output a list of unique skills and education details in order.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Resume_Parser",
  },
  {
    title: "EN_TH Translator",
    cardImage: "assets/images/project-page/17.svg",
    description: "Experimenting with different types of attention mechanisms, including general attention, multiplicative attention, and additive attention, to assess their efficacy in translating between Thai and English languages.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/EN_TH_Translator",
  },
  {
    title: "Text Generation",
    cardImage: "assets/images/project-page/18.svg",
    description: "Focus on building a language model using a text dataset and training a model that can generate coherent and contextually relevant text based on a given input.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Text_generation",
  },
  {
    title: "Engine Search",
    cardImage: "assets/images/project-page/19.svg",
    description: "Developing a search engine involves practical information retrieval in natural language processing. Implemented word embedding techniques to enhance the search capabilities of the engine. Additionally, creating a user-friendly web interface is crucial for accessibility and usability.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/SitthiwatDam/Engine_Search",
  },

  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title,description, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li style="position: relative;">
                    <a class="social-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      <span class="custom-tooltip">${description}</span>
                    </a>
                  </li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
