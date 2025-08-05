# Authorization

## Description

In "Portal da RECONQUISTA", multiple roles are available, and each user can be assigned one:

- Guest
- Member
- Moderator
- Admin

The `Guest` role is automatically assigned upon sign-up. The `Member` role is granted once a user meets the requirements to access "Portal da RECONQUISTA" features, such as paying the subscription fee or being under 21 years old.

Users can be downgraded if they don't pay the subscription fee.

The `Moderator` role is assigned to users by the admins.

The `Admin` role is manually assigned.

## Implementation

We have a database table that maps each user to their respective role.

In nuxt `server` endpoints, we check the user and their role to allow or deny access to that endpoint.

We can use additional fields like user `district` to determine if access is permitted.

Since authorization is done on the server, "Portal da RECONQUISTA" tables should have NO `RLS` policies.

Note: We use drizzle's direct access to the database to make queries.

## Roles

### Guest

Has highly restricted access to platform features and must meet the requirements to be upgraded to the `Member` role.

### Member

Access to all `non-moderator` and `non-admin` platform features.

### Moderator

Selected access to member management including moderating discussions and enforcing community rules.

### Admin

Holds full control over the platform, with unrestricted access to all features, settings, and management tools.