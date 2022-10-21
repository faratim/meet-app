# 🙋🏾‍♂️🙋🏻‍♀️ Meetapp
Connect with interesting people near you at events in line with your interests.

## ☑️ Objectives
- Build a serverless, progressive web application (PWA) with React.
- Use test-driven development (TDD) and behavior-driven developement (BDD) techniques.
- Use Google Calendar API to fetch upcoming events.
- Data visualisation (number of upcoming events, & popularity of event genres)

### Context
- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
- PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

## ⚙️ Features

### **1. Search Events by City**
***Scenario 1:*** When user hasn’t searched for a city, show upcoming events from all cities.

>*User Story*:  As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.

*Given* user hasn't searched for any city,

*When* the user opens the app,

*Then* the user should see a list of all upcoming events.
<br><br>

**Scenario 2:** User should see a list of suggestions when they search for a city.

>*User Story*:  As a user, I should be able to see a list of suggestsions when I start typing, so that events that I am show are near my location.

*Given* the main page is open,

*When* the user starts typing in the city textbox,

*Then* the user should see a list of cities (suggestions) that match what they've typed.
<br><br>

**Scenario 3:** User can select a city from the suggested list.

>*User Story*:  As a user, I should be able to select a city from the sugessted list, so that I can see events relevant to my location.

*Given* city suggestsions are visible after a user typed something in the city textbox,

*When* the user selects a city from the list,

*Then*  user's city should be changed to their selection, and be shown that city's list of events
<br><br>

### **2. Show/Hide Event Details**
**Scenario 1:** An event element is collapsed by default

>*User Story*:  As a user, I should initially see a list of events with no details displayed, so that I can quickly see and overview of what is available.

*Given* a user has searched for a city,

*When* the list of events is shown,

*Then* event details should be hidden.
<br><br>

**Scenario 2:** User can expand an event to see its details

>*User Story*:  As a user, I should be able to reveal event details, so that I can get a more in-depth idea of what the event is about.

*Given* a list of events without details is shown,

*When* a user clicks on an event,

*Then* event details should be shown.
<br><br>

**Scenario 3:** User can collapse an event to hide its details

>*User Story*:  As a user, I should be able to hide event details, so that I can see the main overview of available events again.

*Given* an event's details were expanded,

*When* a user hides it's details,

*Then* the event's details should be hidden.
<br><br>

### **3. Specify Number of Events**
**Scenario 1:** When user hasn’t specified a number, 32 is the default number

>*User Story*:  As a user, I should see an adequate number of events automatically so I can started without any additional input.

*Given* a number of events to be shown has not been given,

*When* a user searches for events,

*Then* 32 events should be shown.
<br><br>

**Scenario 2:** User can change the number of events they want to see

>*User Story*:  As a user, I should be able to change the number of events shown, so I have control over what I see.

*Given* the user has searched and a list of events is shown,

*When* a user specifies a number of events to show,

*Then* the number of events shown should match the user-specified number.
<br><br>


### **4. Use the App When Offline**
**Scenario 1:** Show cached data when there’s no internet connection

>*User Story*:  As a user, I should be able to access the app offline, so that I can view events wherever I am, regardless of network availability.

*Given* the user has accessed the app previously,

*When* connection to internet is lost,

*Then* app will show data from the offline cache.
<br><br>

**Scenario 2:** Show error when user changes the settings (city, time range)

>*User Story*:  As a user, I should be shown an error message when something goes wrong, so I know what happened and can potentially fix it.

*Given* current time and city settings,

*When* a user changes city and time settings,

*Then* an error message should be displayed.
<br><br>


### 5. **Data Visualization**
**Scenario 1:** Show a chart with the number of upcoming events in each city

>*User Story*:  As a user, I should be able to see a chart with the number of upcoming events in each city to give me an idea of where events are happening.

*Given* a user is accessing the app,

*When* a user wants to see data on upcoming events,

*Then* a chart with upcoming events in each city is displayed.