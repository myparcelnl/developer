---
title: MyParcel API release notes
sidebar: auto
---
Hieronder kan je de release notes vinden van de MyParcel API. Als er vragen over een release zijn, dan kan je contact opnemen via ons [slack kanaal](https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LWQ5MWE5MTQ3MDg4YjU5NzdjYjk0OTY1ZDJiYjU5YzJjNzk3Yzk3NGY0OWFkZDU4MDYwZDEyZDlhZTgzOWM1MjI/).

## Release notes 3.300.0
_07-09-2022_
* Er is een rate limit ingesteld op de volgende endpoints:
  * ```/tracktraces``` 100 calls in 5 minuten
  * ```/delivery_options``` 30 calls in 5 minuten
  * ```/pickup_locations``` 30 calls in 5 minuten
  * POST ```/webhook_subscriptions``` 30 calls in 5 minuten
  * GET ```/webhook_subscriptions``` 150 calls in 5 minuten
  * DELETE ```/webhook_subscriptions``` 30 calls in 5 minuten
* Same day delivery via Instabox wordt niet langer getoond via het /delivery_options endpoint als de cut off tijd verstreken is

## Release notes 3.299.0
_23-08-2022_
* Zendingen die nog in het sorteerproces zitten kan je nu ook handmatig op afgeleverd zetten
* Als je zelf in de backoffice een zending op afgeleverd zet, dan zie je nu dat dit handmatig is gebeurt. "Zending is door jou op bezorgd gezet"

## Release notes 3.298.0
_16-08-2022_
* Het is niet langer mogelijk om bij een PostNL België Nederlandse pakket punten als optie te krijgen

## Release notes 3.297.0
_09-08-2022_
* Haalservice+ hanteert nu een minimale startdatum van 3 werkdagen
