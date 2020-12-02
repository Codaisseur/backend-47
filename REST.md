## REST

It's and architectural style, standard, methodology for designing APIs.

1. Operations as HTTP methods
2. Respond with appropiate HTTP status codes
3. Clean and meaningful urls.

# 1. Operations as HTTP methods

Operations => CRUD => Create, Read, Update, Delete

HTTP Methods: GET (Read), POST (Create), DELETE (delete), PUT & PATCH (Update).
(Put => send the complete object and replace, PATCH => send a field and update only that).

# 2.Respond with appropiate status codes.

400 => Bad request
401 => Unauthorized.
404 => not found

200 => Ok, all good
500 => Internal Server error.

200.. => Success, all good!
300.. => Redirects.
400.. => Failed, users fault. => You screwed up
500.. => Failed, servers fault => I screwed up

# 3.Clean and meaningful urls.

/createUser
/getAllUsers

/userLists
/addItemToList

GET - /user
POST - /user

GET - '/user'
POST - '/user'
PATCH - '/user/:id'
DELETE - '/user/:id'

/user/list/
/list/:id/item
