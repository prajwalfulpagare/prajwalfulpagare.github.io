let Projects = [
    {
    "projectTitle": "Stock Analysis",
    "projectDesc": "The Nifty 50 Stock Analysis Project leverages Power BI and SQL to provide comprehensive insights into the performance of the Nifty 50 stocks. Utilizing SQL for data retrieval and manipulation, the project extracts relevant financial and market data. Power BI is then employed for interactive visualization, enabling users to explore key metrics such as Summary, Volume Analysis, LTP Analysis, Turnover, Top and Bottom companies",
    "toolsUsed":"Power Bi, SQL",
    "projectLink":"https://www.novypro.com/project/nifty-50--stocks-analysis"
    },

    {
        
    "projectTitle": "World Cup 2023 Analysis",
    "projectDesc": "ThThe Cricket World Cup 2023 Analysis Project is a robust application developed using Power BI and SQL, offering a deep dive into the dynamics of the tournament. Leveraging SQL for efficient data processing, the project collects and manages comprehensive cricket match data, including player statistics, team performances, and match outcomes. Power BI is employed to create interactive dashboards and visualizations that highlight key trends, player insight. Users can explore dynamic analytics, such as batting and bowling averages, run rates, and match summaries, providing cricket enthusiasts with a powerful tool to analyze and relive the excitement of the 2023 World Cup.e Nifty 50 Stock Analysis Project leverages Power BI and SQL to provide comprehensive insights into the performance of the Nifty 50 stocks. Utilizing SQL for data retrieval and manipulation, the project extracts relevant financial and market data. Power BI is then employed for interactive visualization, enabling users to explore key metrics such as Summary, Volume Analysis, LTP Analysis, Turnover, Top and Bottom companies",
    "toolsUsed":"Power Bi, SQL",
    "projectLink":"https://www.novypro.com/project/world-cup-2023-analysis"
    }

]

const cardGroup = document.querySelector("#ProjectCard");

Projects.forEach((project)=>{
    const newProjectCard = document.createElement("div");
    console.log(project.projectTitle)
    newProjectCard.classList.add("card","bg-dark","border","rounded","m-2");
    newProjectCard.innerHTML = "<div class='card-body'>"+
    "<a style='text-decoration: none;' class='text-white' href="+ project.projectLink+"target='_blank'>"+
      "<h5 class='card-title text-white text-decoration-underline' >"+ project.projectTitle+"</h5>"+
      "<h6 style= 'display: inline;'>Tools Used:</h6>"+
      "<p style='display: inline;'>"+ project.toolsUsed+"</p>"+
      "<p class='card-text text-white'></p>"+   project.projectDesc +
    "</a>"+
  "</div>";

  cardGroup.appendChild(newProjectCard);
})