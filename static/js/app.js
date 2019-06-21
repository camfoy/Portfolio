const projects_button = d3.select("#projects-btn");
projects_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", true);
    tableau_button.classed("active", false);
    excel_button.classed("active", false);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", true);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", false);

    let title = d3.select("#title");
    title.html("");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");
    panel_img.html("<img src='static/images/projects/pursuit-monkey.png' alt='' class='img-responsive center-block'>");

    let panel = d3.select("#panel");
    panel.html("");
    panel.html("<h3>Pursuit Monkey</h3> <p>A simple web app built to quickly chart Google Trends data, Amazon data and Helium 10 data. Users enter up to five search terms to plot against one another and can navigate to different plots, including a Leaflet map. Technology used includes JavaScript, HTML, CSS, Python and SQL.</p> <p><a href='https://github.com/camfoy/Pursuit-Monkey-Project'>GitHub</a></p>");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");
    panel_img_2.html("<img src='static/images/projects/title-i.png' alt='' class='img-responsive center-block'>");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");
    panel_2.html("<h3>Title I Enrollment</h3> <p>Austin ISD enrollment has been shrinking year after year, local news has reported. Simultaneously, the number of Title I students in Austin has been on the rise. In this project we delve deeper into the problem by collecting, cleaning and displaying data with Python.</p> <p><a href='https://github.com/camfoy/Title-I-Enrollment-Project'>GitHub</a></p>");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("");

    let excel = d3.select("#excel");
    excel.html("");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("");

    let title_2 = d3.select("#title-2");
    title_2.html("");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("");

});

const tableau_button = d3.select("#tableau-btn");
tableau_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", false);
    tableau_button.classed("active", true);
    excel_button.classed("active", false);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", false);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", false);

    let title = d3.select("#title");
    title.html("");
    title.html("Citi Bike Analytics");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");

    let panel = d3.select("#panel");
    panel.html("");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("<iframe src='https://public.tableau.com/shared/9NHY726Y5?:display_count=yes&:origin=viz_share_link:showVizHome=no&:embed=true' width='900' height='700'></iframe>");

    let excel = d3.select("#excel");
    excel.html("");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("");
    
    let title_2 = d3.select("#title-2");
    title_2.html("");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("");

});

const excel_button = d3.select("#excel-btn");
excel_button.on("click", function() {

    d3.event.preventDefault();

    projects_button.classed("active", false);
    tableau_button.classed("active", false);
    excel_button.classed("active", true);

    let bottom_row = d3.select("#project-2");
    bottom_row.classed("bottom-problem", false);

    let excel_title = d3.select("#title-2");
    excel_title.classed("bottom-problem-2", true);

    let title = d3.select("#title");
    title.html("");
    title.html("Kickstarter Analysis");

    let panel_img = d3.select("#panel-img");
    panel_img.html("");

    let panel = d3.select("#panel");
    panel.html("");

    let panel_img_2 = d3.select("#panel-img-2");
    panel_img_2.html("");

    let panel_2 = d3.select("#panel-2");
    panel_2.html("");

    let tableau_panel = d3.select("#tableau-panel");
    tableau_panel.html("");

    let excel = d3.select("#excel");
    excel.html("<p>Here I organize and analyze a database of 4,000 past Kickstarter projects to uncover some market trends. I use conditional formatting, create new columns with formulas, and construct pivot tables and pivot charts in order to do so. By clicking on the bottom right of the pane, you can view the full workbook in a new tab.</p><p><a href='https://github.com/camfoy/Excel-Kickstarter-Analysis'>GitHub</a></p>");

    let excel_panel = d3.select("#excel-panel");
    excel_panel.html("<iframe src='https://onedrive.live.com/embed?cid=49B8CB444F54133A&resid=49B8CB444F54133A%21702&authkey=AMEtN2HwPXZ0oIs&em=2' width='100%' height='400' frameborder='0' scrolling='no'></iframe>");

    let title_2 = d3.select("#title-2");
    title_2.html("");
    title_2.html("Stock Market Scripting");

    let excel_2 = d3.select("#excel-2");
    excel_2.html("<p>VBA allowed me to parse through multiple worksheets, totaling over 4 million rows of stock market data, and perform calculations systematically. This powerful tool not only automated tedious tasks, but also allowed me to apply logic unavailable outside of VBA. Click the GitHub link to view the full code.</p><p><a href='https://github.com/camfoy/VBA-Stock-Market-Scripting'>GitHub</a></p>");

    let excel_panel_2 = d3.select("#excel-panel-2");
    excel_panel_2.html("<img src='static/images/excel/excel-3.png' alt='' class='img-responsive center-block'>");

});