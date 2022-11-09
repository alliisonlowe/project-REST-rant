# Project REST-Rant

REST-Rant is an App Where Wsers Can Review Restaurants.

| Method | Path  | Purpose |
|:---: | :---: | :---:|
| GET | / | Home page |
| GET | /places | Places Index Page |
| POST | /places | Create New Place |
| GET | /places/new | Form Page for Creating a New Place |
| GET | /places/:id | Details about a Particular Place |
| PUT | /places/:id | Update a Particular Place |
| GET | /places/:id/edit | Form a Page for Editing an Existing Place |
| DELETE | /places/:id | Delete a Particular Place |
| POST | /places/:id/rant | Create a Rant (comment) About a Particular Place |
| DELETE | /places/:id/rant/:rantId | Delete a Rant (comment) About a Particular Place |
| GET | * | 404 Page (matches any route not defined above) |

# Data Store for Places (Restaraunts).
| **Name** (string) | **City** (string) | **State** (string) | **Cuisines** (string) | **Pic** (string) |
