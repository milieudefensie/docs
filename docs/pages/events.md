# User stories: Events

## Agenda overview page

::: info
🇳🇱 **Title**: "Evenementen"

⭐️ **Navigation position**: 4/5

🔗 **View page**: [veranderaars.milieudefensie.nl/agenda](https://veranderaars.milieudefensie.nl/agenda)

🔗 **Redesign**: [beweging.milieudefensie.nl/events](https://beweging.milieudefensie.nl/events)
:::

Goals:

- We want to show users events are in close proximity (in time, geographically, and in regards to identity & interests): close by location, in the near future, and relevant for them, because we know this optimizes the chances of them actually joining an event
- We want to give most visual attention to events that are relevant to the largest user cohort, to nudge this user cohort to sign up to those events. Most people visiting our calendar page are people who have never visited one of our events before.
- Users should not feel overwhelmed by choices (too many different events), because we know this optimizes the chances of them actually joining an event.

### Types of users

- People who are just browsing around and want to **learn more about our movement**
- People looking to do something **fun** and **social** (meet other like-minded people)
- People who want to **get involved** in our movement
- People who want to **organize something**, for example a local event or travel-together.

### Introduction event

https://mailchi.mp/powerlabs/follow-up-resources-from-designing-effective-campaign-calls

### Info for developers

Event categories:

- Highlighted events ⭐️
- Near you ('City') ⭐️
- Today / Tonight
- Tomorrow ('Day')
- Later this week ('Day',
  'Day',
  ...) / 'Friday'
- This weekend (Sat,
  Sun)
- Next week
- Later this month (‘Month')
- Next month ('Month'): this month +1
- ‘Month’: this month +2,
  etc

We show different event categories based on the day of the week.

ON ALL DAYS

- Highlighted events ⭐️
- Near you ('City')
  ...⭐️based on the day of the week ...
- Later this month: only if the end of 'Next week' is before the end of this month
- Next month
- 'Month'

MONDAY

- Today / Tonight
- Tomorrow (Tue)
- Later this week (Wed,
  Thu,
  Fri)
- This weekend
- Next week

TUESDAY

- Today / Tonight
- Tomorrow (Wed)
- Later this week (Thu,
  Fri)
- This weekend
- Next week

WEDNESDAY

- Today / Tonight
- Tomorrow (Thu)
- Friday
- This weekend
- Next week

THURSDAY

- Today / Tonight
- Tomorrow (Fri)
- This weekend
- Next week

FRIDAY

- Today / Tonight
- This weekend
- Next week

SATURDAY

- Today / Tonight
- Tomorrow (Sun)
- Next week

SUNDAY

- Today / Tonight
- Next week

## Single event page

::: info
🇳🇱 **Title**: Event title

⭐️ **Navigation position**: 3/5

🔗 **View page**: [veranderaars.milieudefensie.nl/lokaal/xyz...](https://veranderaars.milieudefensie.nl/lokaal/campagnemiddag-c)

:::

Design elements:

### Hero card

We wanted to create a hero design that is consistent with the preview cards of events as shown on the agenda overview page. This is why we use the same card component to build this hero section. The only differences are:

- We do not use a white background and a shadow to separate the hero card from the rest of the page. We do this to indicate this is the main content of the page, not a section that links to other website content.
- We use a larger font size for the title and subtitle - again to indicate this is the main content of the page.
- We replace the 'Sign up' button that is used on the agenda overview page with a signup form on the single event page. This signup form is the primary CTA of the page, so we give it a lot of visual prominence by using larger UI elements (e.g. a full width submit button) and a different color than other UI elements.

Other than that, all other elements are the same as the preview cards on the agenda overview page:

- Date and time
- Label for the event category
- Title
- Location
- Optional: Small label to indicate that the event is organized by a local group

### Signup form

The signup form is split up into two steps. The first step only includes 2 fields: e-mail address and an email opt-in checkbox. The second page has more fields: first name, last name, phone number, zip code and again an email opt-in checkbox. The reason for this is that we want to lower the barrier for people to sign up for an event. We know that if we ask too many questions, people will drop off and not sign up at all. By asking only the most essential information first, we can get more people to sign up. After they have signed up, we can ask them for more information.

Whenever technically possible, we save the information that users enter in the first step in our CRM immediately. This way, we can still send a confirmation email to users who only filled out the first step of the signup form. Whenever this is not possible, we save the information after submitting the second step of the signup form.

### Signup count

The signup count is shown to add social proof as a motivator to sign up.

### Travel-together tool

We have designed a tool that makes it easier for people to travel to our events together. This is particularly useful for large events such as climate marches or meetups where people often travel from far distances.

Traveling together is a great way to increase the social bonding between event participants. This tool helps people find others who are traveling to the same event from the same location, so they can coordinate their travel plans without requiring much work from our side.

It works like this:

- If nobody else organized a travel together event for a certain city, we show instructions on how to create a Signal group chat. They are asked to share the link to this group chat by submitting a form. We then add this link to the event page, so others can join the group chat.
- If somebody else already organized a travel together event for a certain city, we show the link to this group chat.

People's city is determined by their IP address. If we cannot determine their city, we ask them to enter it manually. They can also edit their city if they want to change it.

### Share buttons

- WhatsApp: WhatsApp is the most popular chat app in the Netherlands, and it is an important source of website traffic. WhatsApp allows people to share a predefined message by clicking a link. The user can then select a contact to share the message with. The message includes the event title, date, time, location and a link to the event page.
- Signal: Signal does not allow sharing a predefined message, so instead, we copy the message to the clipboard and show a button to open the Signal app. The user can then paste the message in a Signal chat.
