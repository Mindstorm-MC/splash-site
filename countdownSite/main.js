/*     
  site colors 

  red   (scarlet)  = #AB202A (171, 32, 42)
  grey-blue        = #335549
  Yellow           = #f5d43e 
  off-white        = #faf9eb
  grey             = #545454
  black (not 100%) = #15141A (21, 20, 26)  
  black            = #000000

*/
const variables = {

  // website countdown timer 
  website_countdown: 'website_countdown_text',
  website_startDate: '5/30/2026',
  website_startTime: '9:00pm CST',

  // server countdown timer
  server_countdown: 'server_countdown_text',
  server_startDate: '6/6/2026',
  server_startTime: '12:00pm CST',
  
}

const site_count = document.getElementById(variables.website_countdown);
const serv_count = document.getElementById(variables.server_countdown);
site_count.innerHTML = `${variables.website_startDate} <br> ${variables.website_startTime}`;
serv_count.innerHTML = `${variables.server_startDate} <br> ${variables.server_startTime}`;

