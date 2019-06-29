# Miru API

REST controller modules.

## Endpoints specification

**All the bodies of the requests have to be jsons.**

<br/>

### For Users

PATH | METHOD | BODY AND PARAMS | DESCRIPTIONS 
--- | --- | --- | --- 
/user  | post  | **name**: name of the user<br/>**lastname**: last name of the user<br/>**birthday**: birthday of the user<br/>**email**: email of the user<br/>**username**: username of the user<br/>**password** - password of the user<br/> | Create a new user
/user/login | post | | Create a team 
/user/confirmation/:token | get | **teamID**: id of the team | Find a team by ID