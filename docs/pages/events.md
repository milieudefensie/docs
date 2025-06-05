# User stories: Events

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

## Types of users

- People who are just browsing around and want to **learn more about our movement**
- People looking to do something **fun** and **social** (meet other like-minded people)
- People who want to **get involved** in our movement
- People who want to **organize something**, for example a local event or travel-together.

## Info for developers

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
