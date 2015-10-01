# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Documentation
- Added DivShot config.


## [1.0.0] - 2015-10-01

Woot! A stable release!

No new functionality, but the code has been severely refractored.

All boilerplate code in assertion definitions and assertion tests has been moved to helpers.

It is now very easy to add new assertions and test them. Chime in!


## [0.6.0] - 2015-09-29

### Added
- `stringsEqualNoWhitespace`



## [0.5.0] - 2015-09-29

### Added
- `datesEqual`

### Documentation
- Fixed Travis badge image URL.
- Added code sample for 'smallerThan'.



## [0.4.0] - 2015-09-29

### Added
- `largerThan`, `largerThanOrEqual`, `smallerThan`, `smallerThanOrEqual`

### Documentation
- Adjusted assertions formatting.
- Added a note that `arraysSameMembers` is safe to compare Ember models.




## [0.3.0] - 2015-09-25

### Added
- `arrayContains`

### Documentation
- Assertion footprint formatting.



## [0.2.3] - 2015-09-23

### Documentation
- Moar badges!
- Filled in the description field in `package.json`.



## [0.2.2] - 2015-09-23

### Documentation
- v0.2.0 marked as yanked.
- Filled out repo and homepage fields in `package.json`.



## [0.2.1] - 2015-09-23

### Changed
- `numbersAlmostEqual` accepts an optional precision value, 6 by default.

### Refactored
- Message generatino is extracted into a reusable helper.

## Documentation
- Added a link for the Travis badge.




## [0.2.0] - 2015-09-23 [YANKED]

### Added
- `numbersAlmostEqual`

### Documentation
- Added Travis badge.
- Formatting.
- Fixed method footprints.
- Added code examples.
- Fixed version numbers in Changelog.



## [0.1.0] - 2015-09-22
Initial release.

### Added
- `isFalse`
- `arraysSameMembers`
- `arraysSameMembersOrdered`
